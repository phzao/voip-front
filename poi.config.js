const path = require('path')

const __folderDir = process.env.RUN_PKG !== 'true' ? 'src' : 'dist'
const __components = path.join(__dirname, 'packages', 'components', __folderDir)
const __services = path.join(__dirname, 'packages', 'services', __folderDir)

module.exports = {
  entry: 'src/index',
  chainWebpack: config => {
    config.resolve.modules.add(path.join(__dirname, 'src'))

    config.resolve.alias
      .set('components', __components)
      .set('services', __services)
  }
}

