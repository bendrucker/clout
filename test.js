'use strict'

var test = require('tape')
var hasAnsi = require('has-ansi')
var stripAnsi = require('strip-ansi')
var clout = require('./')

test(function (t) {
  t.plan(10)
  var logger = {
    log: function (prefix, message) {
      t.equal(this, logger)
      t.equal(arguments.length, 2)
      t.ok(hasAnsi(prefix))
      t.equal(stripAnsi(prefix), '[foo]')
      t.equal(message, 'barbaz')
    },
    error: function (prefix, message) {
      t.equal(this, logger)
      t.equal(arguments.length, 2)
      t.ok(hasAnsi(prefix))
      t.equal(stripAnsi(prefix), '[baz]')
      t.equal(message, 'qux flux')
    }
  }
  clout('foo', logger)('bar%s', 'baz')
  clout('baz', logger).error('qux', 'flux')
})
