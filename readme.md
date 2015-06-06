# clout [![Build Status](https://travis-ci.org/bendrucker/clout.svg?branch=master)](https://travis-ci.org/bendrucker/clout)

> Ultra-simple logging for CLIs

## Install

```
$ npm install --save clout
```


## Usage

```js
var log = require('clout')('my-tool')
log('hi')
log.error('oh noes')
```

## API

##### `clout(name, [logger])` -> `function`

Creates a logger function with an `error` method.

##### name

*Required*  
Type: `string`

The name of your logger. This will be printed before log messages.

##### logger

Type: `object`  
Default: `console`

An object with `log` and `error` methods that the clout logger will call.

## License

MIT © [Ben Drucker](http://bendrucker.me)
