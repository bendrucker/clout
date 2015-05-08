'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.createLogger = createLogger;

var _chalk = require('chalk');

'use strict';

function createLogger(name) {
  var logger = arguments[1] === undefined ? console.log : arguments[1];

  var prefix = '[' + _chalk.cyan(name) + ']';
  function bind(logger) {
    return logger.bind(console, prefix);
  }
  return _extends(bind(logger), {
    error: bind(console.error)
  });
}