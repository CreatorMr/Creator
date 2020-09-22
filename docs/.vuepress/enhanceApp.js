// import './public/iconfont/iconfont.css'
// import getGitalk from "./common/getGitalk"
export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  setTimeout(() => {
    try {
      document && (() => {
        // getGitalk.call(this, siteData)
      })()
    } catch (e) {
      console.error(e.message)
    }
  },500)
}
