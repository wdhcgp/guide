let { resolve } = require('path')
module.exports = {
    mode:'production',
    entry: './src/index.js',
    output: {
      filename: 'guide.min.js',
      path:resolve(__dirname, 'dist'),
      library: {
        name: 'guideCanvas',
        type: 'var',
        export: 'default'
      }
    }
}