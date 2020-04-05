#!/usr/bin/env node

const fs = require('fs')
const spawnSync = require('child_process').spawnSync
const packages = fs.readdirSync('./packages', { withFileTypes: true })
    .filter(entry => entry.isDirectory() && entry.name !== 'node_modules')
    .map(entry => `./packages/${entry.name}`)


packages.forEach(pkg => {
  const cmd = spawnSync('npx', ['ncu', '-u'], { cwd: pkg, encoding: 'utf-8' })
  console.log(cmd.stdout.toString())
})
