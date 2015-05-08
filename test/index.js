'use strict'

import test from 'tape'
import {hasColor, stripColor} from 'chalk'
import {createLogger} from '../'

test((t) => {
  t.plan(5)
  const log = createLogger('foo', function (prefix, message) {
    t.equal(this, console)
    t.equal(arguments.length, 2)
    t.ok(hasColor(prefix))
    t.equal(stripColor(prefix), '[foo]')
    t.equal(message, 'bar')
  })
  log('bar')
})
