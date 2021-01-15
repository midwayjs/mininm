import { removeUselessFiles, removeUselessDirs } from '../src/index';
import { execSync } from 'child_process';
import { resolve } from 'path';
import { existsSync, remove } from 'fs-extra';
import * as assert from 'assert';

describe('/test/index.test.ts', () => {
  const baseDir = resolve(__dirname, './fixtures/base-app');
  it('base package', async () => {

    const nm = resolve(baseDir, 'node_modules');
    if (existsSync(nm)) {
      await remove(nm);
    }
    execSync(`cd ${baseDir};npm --registry=https://registry.npm.taobao.org install --production`);
    await removeUselessFiles(baseDir);
    await removeUselessDirs(baseDir);
    assert(!existsSync(resolve(nm, '@midwayjs/core/README.md')));
  });
});
