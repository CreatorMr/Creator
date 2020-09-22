<template>
  <div class="circle1" @click="play">
      <div class="circle2"></div>
       <img class="turn" src="./img/music.jpg" alt="">
        <audio autoplay id="audio" ref="audio" src="http://mp3.dwjgrw.cn/down/31389.mp3">
        您的浏览器不支持 audio 标签。
        </audio>
  </div>
</template>

<script>
import getGitalk from "../../common/getGitalk"
export default {
  data() {
    return {
      text: "这个是自定义插件-test",
      musicUrl: 'https://moeplayer.b0.upaiyun.com/aplayer/secretbase.mp3'
    }
  },
  methods: {
    play() {
      if(this.$refs.audio.paused) {
         this.$refs.audio.play()
      } else {
         this.$refs.audio.pause()
      }
    }
  },
  watch: {
    $route(to, from) {
      console.log('000000')
      getGitalk.call(this, {
        pages: {}
      })
    }
  },
  mounted() {

  },
  beforeDestroy() {

  },
}
</script>

<style>
.turn{
  border-radius: 100%;
  width: 100px;
  height: 100px;
  animation: pan-data-v-35d0876e 10s linear infinite;
  z-index: 103;
  transition: all .5s;
  cursor: pointer;
  transform: rotate(57deg);
}
 @keyframes turn{
    0%{-webkit-transform:rotate(0deg);}
    25%{-webkit-transform:rotate(90deg);}
    50%{-webkit-transform:rotate(180deg);}
    75%{-webkit-transform:rotate(270deg);}
    100%{-webkit-transform:rotate(360deg);}
  }

.circle1 {
  width: 100px;
  height: 100px;
  border-radius: 5px;
  position: fixed;
  z-index: 500;
  bottom: 50px;
  right: -50px;
  transition: all .5s;
	z-index:2;
	-webkit-animation:myfirst1 5s linear infinite;
}
.circle1:hover{
  right: 30px;
}
@-webkit-keyframes myfirst1 {
	0% {
	transform:rotate(0deg);
	box-shadow:0px 0px 10px #fff;
  }
  50% {
    transform:rotate(180deg);
    box-shadow:0px 0px 45px #fff;
  }
  100% {
    transform:rotate(360deg);
    box-shadow:0px 0px 10px #fff;
  }
}.circle2 {
	width:10px;
	height:10px;
	border:4px solid #ddd;
	border-radius:20px;
	left:45px;
	top:5px;
	position:absolute;
	z-index:2;
	overflow:hidden;
	background-color:#ddd;
	box-shadow:0px 0px 5px #fff;
}
</style>
