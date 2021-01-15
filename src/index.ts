import { join } from 'path';
import * as globby from 'globby';
import { unlink, existsSync, stat, readdir, remove, lstat } from 'fs-extra';
import { uselessFilesMatch } from './uselessFilesMatch';

export * from './uselessFilesMatch';
export const removeUselessFiles = async (target: string, otherPattern?: string[]) => {
  const start = Date.now();
  const nm = join(target, 'node_modules');
  const list = await globby(uselessFilesMatch.concat(otherPattern || []), {
    cwd: nm,
    deep: 5,
  });
  console.log(' - Useless files Count', list.length);
  let size = 0;
  for (const file of list) {
    const path = join(nm, file);
    if (existsSync(path)) {
      const stats = await stat(path);
      size += stats.size;
      await unlink(path);
    }
  }
  console.log(
    ` - Remove Useless file ${Number(size / (2 << 19)).toFixed(2)} MB`,
    `(Time: ${Number((Date.now() - start) / 1000).toFixed(2)}s)`
  );
  await new Promise(resolve => {
    setTimeout(resolve, 2000);
  })
};

export const removeUselessDirs = async (target: string) => {
  const start = Date.now();
  const emptyDirSize = await removeEmptyDirs(target);
  console.log(
    ' - Remove Useless Dir',
    emptyDirSize,
    `(Time: ${Number((Date.now() - start) / 1000).toFixed(2)}s)`
  );
  return emptyDirSize;
}
const removeEmptyDirs = async (target: string) => {
  const dirList = await readdir(target);
  let size = 0;
  await Promise.all(dirList.map(async dirName => {
    const dirPath = join(target, dirName);
    const stats = await lstat(dirPath);
    if (stats.isDirectory()) {
      const count = await removeEmptyDirs(dirPath);
      size += count;
    }
  }));
  const newDirList = await readdir(target);
  if (newDirList.length === 0) {
    size ++;
    await remove(target);
  }
  return size;
}