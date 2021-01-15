# mininm
移除 `node_modules` 中数以万计的无用文件

## Use In CLI
```shell
$ npm i @midwayjs/mininm -g
$ mininm
```

## Use In Code

```shell
$ npm i @midwayjs/mininm -S
```

```TS
import { removeUselessFiles, removeUselessDirs } from '@midwayjs/mininm';

await removeUselessFiles(baseDir);
await removeUselessDirs(baseDir);
```
