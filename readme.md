# clout [![Build Status](https://travis-ci.org/bendrucker/clout.svg?branch=master)](https://travis-ci.org/bendrucker/clout)

> Ultra-simple logging for CLIs


## Install

```
$ npm install --save clout
```


## Usage

```js
var log = require('clout').createLogger('my-tool')
log('hi')
log.error('oh noes')
```

## API

### clout.createLogger(name, [defaultLogger])

#### name

*Required*  
Type: `string`

The name of your logger. This will be printed before log messages.

#### defaultLogger

Type: `function`  
Default: `console.log`

A default logging function. This will be bound to `console`.

## License

MIT © [Ben Drucker](http://bendrucker.me)
