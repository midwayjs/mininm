<p align="center">
  <br/>
  <br/>
  <b>mininm</b>
  <br />
  <br />
  <span>移除 <b>node_modules</b> 中数以万计的无用文件</span>
  <br />
  <br />
  <span>
    <a href="https://www.npmjs.org/package/@midwayjs/mininm"><img src="https://img.shields.io/npm/v/@midwayjs/mininm.svg?style=flat" alt="npm"></a> 
    <a href="./LICENSE" alt="GitHub license">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg" />
    </a>
    <a href="https://github.com/echosoar/@midwayjs/mininm/actions?query=workflow%3A%22Node.js+CI%22" alt="Node.js CI">
      <img src="https://img.shields.io/badge/Node.js%20CI-passing-brightgreen" />
    </a>
  </span>
  <br />
  <br />
</p>

## Use In Command
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
