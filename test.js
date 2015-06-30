'use strict'

var test = require('tape')
var chalk = require('chalk')
var clout = require('./')

test(function (t) {
  t.plan(10)
  var logger = {
    log: function (prefix, message) {
      t.equal(this, logger)
      t.equal(arguments.length, 2)
      t.ok(chalk.hasColor(prefix))
      t.equal(chalk.stripColor(prefix), '[foo]')
      t.equal(message, 'barbaz')
    },
    error: function (prefix, message) {
      t.equal(this, logger)
      t.equal(arguments.length, 2)
      t.ok(chalk.hasColor(prefix))
      t.equal(chalk.stripColor(prefix), '[baz]')
      t.equal(message, 'qux flux')
    }
  }
  clout('foo', logger)('bar%s', 'baz')
  clout('baz', logger).error('qux', 'flux')
})
