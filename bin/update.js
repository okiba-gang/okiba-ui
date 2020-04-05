#!/usr/bin/env node

const fs = require('fs')
const spawnSync = require('child_process').spawnSync
const packages = fs.readdirSync('./packages')
  .filter(entry => fs.lstatSync(`./packages/${entry}`).isDirectory() && entry !== 'node_modules')
  .map(entry => `./packages/${entry}`)


packages.forEach(pkg => {
  const cmd = spawnSync('npx', ['ncu', '-u'], { cwd: pkg, encoding: 'utf-8' })
  console.log(cmd.stdout.toString())
})
