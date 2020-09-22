const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  name: 'vuepress-plugin-PluginTest',
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ],
  globalUIComponents: 'PluginTest'
})