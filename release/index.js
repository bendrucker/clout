'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports.createLogger = createLogger;

var _chalk = require('chalk');

'use strict';

function createLogger(name, logger) {
  var prefix = '[' + _chalk.cyan(name) + ']';
  function bind(logger) {
    return logger.bind(console, prefix);
  }
  return Object.assign(bind(logger || console.log), {
    error: bind(console.error)
  });
}