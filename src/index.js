'use strict'

import {cyan} from 'chalk'

export function createLogger (name, logger = console.log) {
  const prefix = `[${cyan(name)}]`
  function bind (logger) {
    return logger.bind(console, prefix)
  }
  return Object.assign(bind(logger), {
    error: bind(console.error)
  })
}
