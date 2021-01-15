const args = process.argv.slice(2);
const mod = args[0] || 'fd';
const otherPattern = args[1] || '';
const { removeUselessFiles, removeUselessDirs } = require('../dist');
module.exports = async () => {
  const cwd = process.cwd();
  console.log('[Mini NM] Clear in ', cwd);
  console.log('[Mini NM] Please wait...');
  if (mod.includes('f')) {
    await removeUselessFiles(cwd, otherPattern ? otherPattern.split(','): []);
  }
  if (mod.includes('d')) {
    await removeUselessDirs(cwd);
  }
  console.log('[Mini NM] Remove success!');
};

