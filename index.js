'use strict'

var printf = require('pff')
var chalk = require('chalk')

module.exports = function createLogger (name, logger) {
  if (!logger) logger = console
  var prefix = printf('[%s]', chalk.cyan(name))
  function logWith (method, args) {
    args = Array.prototype.slice.call(args)
    return method.apply(logger, [prefix].concat(args))
  }
  function log () {
    logWith(logger.log, arguments)
  }
  log.error = function error () {
    logWith(logger.error, arguments)
  }
  return log
}
