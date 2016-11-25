# glbl

[![NPM](https://nodei.co/npm/glbl.png)](https://nodei.co/npm/glbl/)

[![NPM version](https://img.shields.io/npm/v/glbl.svg)](https://www.npmjs.com/package/glbl)
[![Build Status](https://travis-ci.org/remarkablemark/glbl.svg?branch=master)](https://travis-ci.org/remarkablemark/glbl)
[![Coverage Status](https://coveralls.io/repos/github/remarkablemark/glbl/badge.svg?branch=master)](https://coveralls.io/github/remarkablemark/glbl?branch=master)

A module that is simply a reference to an [object](https://developer.mozilla.org/docs/Web/JavaScript/Guide/Working_with_Objects).

## Install

```sh
$ npm install glbl
```

## Usage

```js
var obj = require('glbl');
obj.key = 'value';
console.log(obj); // { key: 'value' }
```

## Testing

```sh
$ npm test
$ npm run lint
```

## License

[MIT](https://github.com/remarkablemark/glbl/blob/master/LICENSE)
