'use strict'

var format = require('simple-format')
var toArray = require('to-array')
var chalk = require('chalk')

module.exports = function createLogger (name, logger) {
  if (!logger) logger = console
  var prefix = format('[%s]', chalk.cyan(name))
  function write (method, messages) {
    messages = toArray(messages)
    var message = format.apply(null, messages)
    return method.call(logger, prefix, message)
  }
  function log () {
    write(logger.log, arguments)
  }
  log.error = function error () {
    write(logger.error, arguments)
  }
  return log
}
