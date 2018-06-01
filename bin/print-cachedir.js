#!/usr/bin/env node

'use strict'

const help = [
  'USE: print-cachedir <module name>',
  '    "print-cachedir Cypress"'
].join('\n')

const join = require('path').join

require('simple-bin-help')({
  minArguments: 3, // [node, script, name]
  packagePath: join(__dirname, '..', 'package.json'),
  help: help
})

const name = process.argv[2]
const cachedir = require('cachedir')
console.log(cachedir(name))
