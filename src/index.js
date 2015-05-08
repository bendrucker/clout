'use strict'

import {cyan} from 'chalk'

export function createLogger (name, logger) {
  const prefix = `[${cyan(name)}]`
  function bind (logger) {
    return logger.bind(console, prefix)
  }
  return Object.assign(bind(logger || console.log), {
    error: bind(console.error)
  })
}
