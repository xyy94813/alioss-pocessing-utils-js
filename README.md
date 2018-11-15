# alioss-pocessing-utils-js

Easy to generate the processing API of AliOSS.

[![CircleCI branch](https://img.shields.io/circleci/project/github/xyy94813/alioss-pocessing-utils-js/master.svg?style=flat-square)](https://circleci.com/gh/xyy94813/alioss-pocessing-utils-js)
[![Dependencies](https://img.shields.io/david/xyy94813/alioss-pocessing-utils-js.svg)](https://david-dm.org/xyy94813/alioss-pocessing-utils-js)
[![DevDependencies](https://img.shields.io/david/dev/xyy94813/alioss-pocessing-utils-js.svg)](https://david-dm.org/xyy94813/alioss-pocessing-utils-js?type=dev)

[![npm package](https://img.shields.io/npm/v/alioss-pocessing-utils.svg?style=flat-square)](https://www.npmjs.org/package/alioss-pocessing-utils)
[![npm downloads](https://img.shields.io/npm/dm/alioss-pocessing-utils.svg?style=flat-square)](http://npmjs.com/alioss-pocessing-utils)

## Install

### yarn

```js
yarn add alioss-pocessing-utils
```

### npm

```js
npm i alioss-pocessing-utils -S
```

## Usage

There are some example to show how to use alioss-pocessing-utils

### ES6

```js
import AliOSSProcessUtil, { ImageResizeMode } from 'alioss-pocessing-utils';

const aliOSSImageUrl = `https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg`;
const imgProcesshandler = new AliOSSImageProcessingUtil(aliOSSImageUrl);

imgProcesshandler.getAliOSSImageResizeAPI({
  mode: ResizeMode.FIXED
});
```

### CommonJS

```js
const {
  default: AliOSSProcessUtil,
  ImageResizeMode
} = require('alioss-pocessing-utils');

const aliOSSImageUrl = `https://image-demo.oss-cn-hangzhou.aliyuncs.com/example.jpg`;
const imgProcesshandler = new AliOSSProcessUtil(aliOSSImageUrl);

imgProcesshandler.getAliOSSImageResizeAPI({
  mode: ImageResizeMode.FIXED
});
```

## API

[Full API](./API.md)
## Contruibution

DefinitelyTyped only works because of contributions by users like you!

### Git Message

[Follow the Angular git commit message specification](https://github.com/angular/angular.js/blob/master/DEVELOPERS.md#commits)

But, you can ignore the `scope`

## ALi OSS DOC

[中文文档](https://help.aliyun.com/document_detail/44686.html?spm=a2c4g.11186623.6.1145.6c0eb5d0fFdoYb)

[English Document](https://www.alibabacloud.com/help/doc-detail/44686.htm?spm=a2c63.p38356.b99.503.ac7c7cd8TGmaKG)
