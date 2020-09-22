export default ({pages})=> {
    var x=document.getElementById("gitalk-container")
    if(x) {
      x.remove(x.selectedIndex)
    }
    
    const path = window.location.pathname
    // 获取当前页面信息
    const page =document.querySelector('.page')

    const linkGitalk = document.createElement('link');
    linkGitalk.href = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.css';
    linkGitalk.rel = 'stylesheet';
    document.body.appendChild(linkGitalk);

    const scriptGitalk = document.createElement('script');
    scriptGitalk.src = 'https://cdn.jsdelivr.net/npm/gitalk@1/dist/gitalk.min.js';
    document.body.appendChild(scriptGitalk);

    scriptGitalk.onload= () => {
      let gitalk = document.createElement('div')
      gitalk.id = 'gitalk-container'
      page.appendChild(gitalk)
      var _gitalk = new Gitalk({
        clientID: '2b1788264bb67c20726e',
        clientSecret: 'adb65f93f32454c2b71b5c3998c2defccdcd6f73',
        repo: 'Creator',
        owner: 'CreatorMr',
        admin: ['CreatorMr'],
        id: decodeURI(path),      // Ensure uniqueness and length less than 50
        distractionFreeMode: false      // 每个页面根据url生成对应的issue，保证页面之间的评论都是独立的
      })
      _gitalk.render('gitalk-container')
    }
}