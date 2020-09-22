<template>
<div class="container" draggable="false" @mousedown="returnFalse" v-if="check_flag">
  <div class="album" ref="album" @mousedown="returnFalse">
    <img src="https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3796661942,1362224026&fm=26&gp=0.jpg" alt="" width="150" height="200">
    <img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3328813059,4233954730&fm=26&gp=0.jpg" alt="" width="150" height="200">
    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3296148637,835878443&fm=15&gp=0.jpg" alt="" width="150" height="200">
    <img src="https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=4255298094,1849192991&fm=26&gp=0.jpg" alt="" width="150" height="200">

    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586367457617&di=c4f435530cb07bb5e09911175e59abb1&imgtype=0&src=http%3A%2F%2Fimg0.pconline.com.cn%2Fpconline%2F1303%2F12%2F3208685_java-01.jpg" alt="" width="150" height="200">
    <img src="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=2347341404,6594994&fm=26&gp=0.jpg" alt="" width="150" height="200">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586367793027&di=fb88c478b2a763e1fe831b826d8b728b&imgtype=0&src=http%3A%2F%2Fwww.vephp.com%2Fpublic%2Fuploads%2Fmodules%2Farticle%2F2017101716362196697.jpg" alt="" width="150" height="200">
    <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1586367840954&di=cf7273e3329dbd81d5d17209225142e6&imgtype=0&src=http%3A%2F%2Fimg0.imgtn.bdimg.com%2Fit%2Fu%3D1142340810%2C4197896472%26fm%3D214%26gp%3D0.jpg" alt="" width="150" height="200">
    <img src="https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2237470352,552559233&fm=26&gp=0.jpg" alt="" width="150" height="200">
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      check_flag: true
    }
  },
  methods: {
    returnFalse(e) {
      e.preventDefault()
    },
    setIntervalFunc() {
      var album = this.$refs.album
      var imgs = this.$refs.album.children
      var len = imgs.length
      var unitDeg = 360 / len
      this.interval = setInterval(() => {
        unitDeg += 10
        album.style.transform = ` rotateY(${unitDeg * 0.2}deg)`
      }, 200);
    },
    //返回true表示为pc端打开，返回false表示为手机端打开
    check() {
      let flag = navigator.userAgent.match(/(phone|pod|iPhone|iPod|ios|Android|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      return !flag;
    },
  },
  mounted() {
    this.check_flag = this.check()
    if(!this.check_flag) {
      return
    }
    var album = this.$refs.album
    var imgs = this.$refs.album.children
    var len = imgs.length
    var unitDeg = 360 / len
    var newX, newY, lastX, lastY, minusX, minusY
    var rotX = 0
    var rotY = 0
    let interval
    let vm = this
    this.$nextTick(() => {
      Array.prototype.forEach.call(imgs, (it, i, arr) => {
        it.style.transform = `rotateY(${i * unitDeg}deg) translateZ(300px)`
        it.style.transition = `1s ${(len - i) * 0.1}s`
        it.onmousedown = this.returnFalse
      })
      //   鼠标移动 相册旋转 改变album的transform 的rotateX 和 rotateY的值
      document.onmousedown = function (e) { // 鼠标点击事件
        clearInterval(interval)
        clearTimeout(vm.timeout)
        lastX = e.clientX
        lastY = e.clientY
        this.onmousemove = (e) => { // 鼠标移动事件
          clearTimeout(vm.timeout)
          clearInterval(interval)
          newX = e.clientX
          newY = e.clientY

          // 假设 并求值 两次鼠标移动的差值就是移动的距离 和相册旋转的角度成正比
          minusX = newX - lastX
          minusY = newY - lastY

          rotX += minusY
          rotY += minusX

          album.style.transform = `rotateX(${-rotX * 0.2}deg) rotateY(${rotY * 0.2}deg)`

          // 新的值用完之后就成了旧的值
          lastX = newX
          lastY = newY
        }
        this.onmouseup = (e) => { // 鼠标松开事件
          console.log('松开')
          clearInterval(vm.interval)
          clearTimeout(vm.timeout)
          vm.timeout = setTimeout(_ => {
            clearInterval(vm.interval)
            vm.$nextTick(_=>{
              vm.setIntervalFunc()
            })
          }, 3000)
          this.onmousemove = null
        }
      }
    })
    this.setIntervalFunc()
    interval = this.interval

  },
  beforeDestroy() {
    if (this.interval || this.timeout) {
      clearInterval(this.interval)
      clearTimeout(this.timeout)
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  // background: black;
  perspective: 1000px;
  /*场景景深*/
  &:before {
    content: "";
    display: table;
  }

  .album {
    width: 150px;
    height: 200px;
    // border: solid 1px red;
    margin: 0px auto;
    position: relative;
    transform-style: preserve-3d;
    margin-bottom: 125px;
    /*设置场景风格*/
    img {
      position: absolute;
      -webkit-box-reflect: below 5px -webkit-linear-gradient(top, rgba(250, 250, 250, 0), rgba(250, 250, 250, .0) 30%, rgba(250, 250, 250, 0.3));
    }
  }
}
</style>
