<template>
<div id="gitalk-container"></div>
</template>

<script>
import 'gitalk/dist/gitalk.css'
import Gitalk from 'gitalk'
export default {
  data() {
    return {
      
    }
  },
  methods: {
   
  },
  watch: {
    
  },
  mounted() {
    const path = window.location.pathname
    var gitalk = new Gitalk({
      clientID: '2b1788264bb67c20726e',
      clientSecret: 'adb65f93f32454c2b71b5c3998c2defccdcd6f73',
      repo: 'Creator',
      owner: 'CreatorMr',
      admin: ['CreatorMr'],
      id: decodeURI(path),      // Ensure uniqueness and length less than 50
      distractionFreeMode: false  // Facebook-like distraction free mode
    })
    console.log(gitalk,'gitalk--')
    gitalk.render('gitalk-container')
  },
  beforeDestroy() {
  
  },
}
</script>

<style>

</style>
