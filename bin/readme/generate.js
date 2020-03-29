const {readdirSync, writeFileSync, readFileSync} = require('fs')
const jsdoc = require('jsdoc-api')
const nunjucks = require('nunjucks')
nunjucks.configure({autoescape: false})

const {model, modelPackage} = require('./model-data')

const template = readFileSync('./bin/readme/partials/readme-package.njk', 'utf8')
const templateRoot = readFileSync('./bin/readme/partials/readme-root.njk', 'utf8')

const packages = readdirSync('./packages')

const baseData = {
  name: 'Okiba Components',
  description: '',
  packages: [],
  url: 'https://github.com/okiba-gang/okiba-components/tree/master/packages/'
}

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array)
  }
}

async function generate(path, name, version, submodules) {
  const data = model(await jsdoc.explain({ files: `./packages/${path}/index.js` }), baseData)

  data.pkgName = name
  data.version = version

  if (submodules) {
    data.submodules = []
    await asyncForEach(submodules, async (submodule) => {
      const submoduleData = await generate(`${name}/${submodule}`, name, version)
      data.submodules.push({
        ...submoduleData,
        name: submoduleData.name.replace(`${data.name} / `, ''),
        package: name,
        path: `./${submodule}`,
      })
    })
  }

  const markdown = nunjucks.renderString(template, data)

  writeFileSync(`./packages/${path}/README.md`, markdown)

  try {
    baseData.packages.push(modelPackage(data, baseData))
    return data
  } catch (e) {
    throw new Error(`Missing required fields in package: ${data.pkgName} (${name})\n`)
  }
}

async function generateAll() {
  await asyncForEach(packages, async name => {

    if (name === '.DS_Store') return

    const { version, submodules } = JSON.parse(readFileSync(`./packages/${name}/package.json`))

    await generate(name, name, version, submodules)
  })

  const markdown = nunjucks.renderString(templateRoot, baseData)

  writeFileSync('./README.md', markdown)
}

generateAll()
