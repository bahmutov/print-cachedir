'use strict'

/* eslint-env mocha */
const execaWrap = require('execa-wrap')
const { join } = require('path')
const la = require('lazy-ass')

describe('print-cachedir', () => {
  const index = join(__dirname, 'index.js')
  const bin = join(__dirname, '..', 'bin', 'print-cachedir.js')

  it('prints error and exits when used as a module', () => {
    return execaWrap('node', [index]).then(output => {
      la(output.includes('code: 1'), 'exits with code 1\n', output)
    })
  })

  it('exits successfully', () => {
    return execaWrap('node', [bin, 'foo']).then(output => {
      la(output.includes('code: 0'), 'exits successfully\n', output)
    })
  })

  it('prints cache dir using bin', () => {
    return execaWrap('node', [bin, 'foobarbaz'], { filter: ['stdout'] }).then(
      output => {
        la(output.includes('stdout:'), 'has stdout\n', output)
        la(output.includes('foobarbaz'), 'has path with the module\n', output)
      }
    )
  })
})
