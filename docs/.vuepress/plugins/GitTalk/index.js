const { path } = require('@vuepress/shared-utils')

module.exports = (options, context) => ({
  name: 'vuepress-plugin-GitTalk',
  enhanceAppFiles: [
    path.resolve(__dirname, 'enhanceAppFile.js')
  ],
  globalUIComponents: 'GitTalk'
})