# nodeJs 开发实战
极客时间 
### 什么是node.js

官网的话：
Node.js 是一个基于[^chromeV8引擎]的JavaScript运行环境 [^要注明的文本]
Node.js 使用了一个[^事件驱动]、[^非阻塞式I/O]的模型，使起轻量又高校

一般去理解标注的三部分，其实没有必要

在node.js 里运行javascript和在chrome中运行有什么不同？
chrome浏览器用的同样的JavaScript引擎和模型

几乎没有不一样！！！

> 不一样：

> 1、node.js 没有浏览器的API，document、window

> 2、node.js 让你用类似的方式，控制整个计算器


### node.js 能做什么

web服务 -腾讯视频   
  1、搜索引擎优化+首屏速度优化 = 服务端渲染

  2、服务端渲染 + 前后端同构 = Node.js

构建工作流
  gulpJs webpack 
  构建工具不会永远不出问题
  构建工具不会永远满足需求
  使用Node.js 做js 构建工具，最保险

开发工具 Visual Studio Code 

游戏 wayward

可扩展性：
大型应用需要给使用这自定义模块的能力

使用Node.js 做复杂本地应用
  可以利用js的灵活性提供外部扩展
  js 庞大的开发者基数让给你他们呢的灵活性等到利用

客户端应用- twitch.tv
在已有的网站的情况下需要新开发客户端应用
用Node.js 客户端技术（electron） 实现，最大限度的复用现有工程

### 实战项目

Node.js 版即可时间网站
* 列表页面
  * 打通前后台
  * 服务端渲染
* 详情页
  * 网页路由
  * 异步加载
* 播放页
  * API服务器

# 第二章

### 技术预研

什么技术预研

* 分析要做的需求，找出技术难点
* 针对每个技术那点进行攻克

BFF
Backend for Frontend 
中间渲染层 负责组装后台放回的数据，返回给浏览器，为前端所服务的后台服务

* 对用户侧提供http服务
* 使用后端RPC服务 

### Node 开发环境 


### CommonJs 规范

<!-- <script/> -->
* 脚本变多时，需要手动管理加载顺序
* 不同的脚本之间逻辑调用，需要通过全局变量的方式。
* 没有html 怎么办？

CommonJs 规范 来管理js 的加载
* JavaScript社区发起，在Node.js 上应用并推广
* 后续也影响到了浏览器端JavaScript.
* eq webpack 兼容CommonJs 规范

 webpack --devtool none --mode development --target node index.js  
 webpack 打包指定文件

 ### npm 

 开发npm   npm init


 npm event-stream 事件  问题 
 

### Node.js 的内置模块


* EventEmitter 
  * 观察者模式  （往上抛事件的能力）
    * addEventLister
    * removeEventLister
  * 调用 vs 抛事件
    * 关键在于 “不知道被通知者的存在”
    * 以及 “，没有人听还能继续下去”

### 异步 非阻塞I/O 

非阻塞I/O  
I/O   即 Input/Output 一个系统的输入和输出
阻塞I/O  和非阻塞I/O  的区别在于系统接收输入再到输出期间，能不能接收其他输入

理解非阻塞I/O 的要点在于
* 确定给一个进行Input/Output的系统
* 思考在I/O过程中，能不能进行其他I/O
限定一个系统范围
<img  :src="$withBase('/assets/technology/node/io.jpg')">
对于我们点菜人员：
系统 = 食堂阿姨/服务生，输入 = （客人）点菜、输出 = 端到菜
排队打饭是阻塞I/O：食堂工作人员在每个学生点菜到端到菜离开之前这个期间是不能给别的同学打饭的，或者说对于学生来讲，在前面的人没有走之前，只能等着
餐厅点菜是非阻塞I/O：服务生点完菜就可以服务其他人，对于客人来讲，在点菜和菜端上来的期间，服务生可以接受其他客人的点菜

### 异步编程 callback
* 回调函数格式规范
  * error-first callback
  * Node-style callback
* 第一个参数是error ，后面的参数才是结果


* 异步流程控制
* async.js
* thunk 编程范式

### 事件循环
每个事件循环相当于一个全新的栈

### promise
Node.js 异步编程
Promise
  * 当前事件循环得不到的结果，但未来的事件循环回给到你结果
  * 是一个状态机
    * pending
    * fulfilled?resolved
    * rejected

promise的状态是可以转换的
只能从pending-resolved或者rejected


* .then 和 .catch 
  * resolved状态的promise会回调后面的第一个.then
  * rejected状态的promise 会回调后面的第一个.catch 
  * 任何一个rejected状态且后面没有.catch的Promise，都会造成浏览器/node的环境的全局错误

* 执行then和catch会返回一个新Promise， 该Promise最终状态根据then 和catch 的回调函数的执行结果决定
  * 如果回到函数最终是throw， 该Promise是rejected状态
  * 如果回调函数最终是return， 该Promise是resolved状态
  * 但如果回调函数最终return了一个Promise，该Promise会和回调函数return的Promise保持一致（这种机制，可以在promise的链式调用中串行的执行多个异步任务）

### async await

* async / await
  * async function 是 Promise的语法糖封装  async 就是return promise的一个普通函数
  * 异步编程的终极方案-以同步的方式写异步
    * await 关键字可以 “暂停” async function 的执行
    * await 关键字可以以同步的写法获取Promise的执行结果
    * try-catch 可以获取 await 所得到的错误


* 一个穿越事件循环存在的 function


### Http 服务

* HTTP是什么？
  * 应用层协议
  * 五层网络协议

  |     |
  |  ----  | 
  | 5.应用层  |
  | 4.运输层  | 
  | 3.网络层  |
  | 2.数据链路层  | 
  | 1.物理层  | 

* http 做的 把网页打包成网络数据包   在 拆数据包 成网页

<img  :src="$withBase('/assets/technology/node/http.jpg')">

* 一个网页请求，包含两次http包的交换
  * 浏览器向http服务发送请求http包
  * http服务器向浏览器返回http包
* 以极客时间首页为例，分析http格式

* http 服务要做什么事情
  * 解析进来的http请求报文
  * 返回对应的http返回的报文


### HTTP 简单实现一个HTTP服务器

<<< @/docs/technology/node/http.js

### 20 | HTTP：实现网页版石头剪刀布

### 21 HTTP：用express优化石头剪刀布游戏

Express
* 关键功能有哪些
* 推导出它要解决的问题是什么

功能

  * 路由
  * 简化http操作 request/response 
    * request：pathname、query等
    * response： send()、json()、jsonp()等
  * 模版引擎
  * 脚手架，快速创建应用，容易上手

  express 会根据返回的数据格式来处理成我们可能想要的样子

  node  end 
  express send

  express 中间件

  express 洋葱模型不完善 

  ### 22 | HTTP：用koa优化石头剪刀布游戏

  koa 

核心功能
* 中间件 -- 使用async function实现中间件
  * 有 “暂停执行” 的能力
  * 在异步的情况下也符合洋葱模型 

    express 的中间件洋葱模型， 同步没有任何非阻塞I/O  异步调用的情况下是符合洋葱模型 但是一旦有异步就出现问题，打破了洋葱模型

    koa 中间件使用async 来编写的

    await next()  函数可以中断这个中间件的执行，后面的都执行完在执行这个

* request和response的处理--- 比express 更极致的request/response的简化
  * ctx.status = 200
  * ctx.body = '内容'
  将  request和response  收到ctx 中

* 没有路由，需要在中间件中自己设计编写

express vs koa
* express 门槛更低，koa 更强大
* express 封装更多的东西，开发更快速，koa可定制型更高

### RPC通信

 RPC调用

 * Remote Procedure Call (远程过程调用)

 * 和Ajax 有什么相同点？
  * 都是两个计算机之间的网络通信
  * 需要双方约定一个数据格式

  ajax  浏览器-服务器
  rpc  服务器-服务器

  不同： 
   * ajax 使用dns 作为寻址服务 ，rpc 不一定，在内网中调用 没必要
   * rpc 应用层协议一般不使用http，使用二进制 协议
   * 基于 tcp/udp

* 寻址/负载均衡
  * ajax 使用dns 进行寻址 
  <img  :src="$withBase('/assets/technology/node/ajax.jpg')">
  * rpc 使用特有的服务进行寻址
  <img  :src="$withBase('/assets/technology/node/rpc.jpg')">


* tcp 通信方式
  * 单工通信
  * 半双工通信  （同一时间 ，轮番单工通信） rpc
  * 全双工通信 rpc

* 二进制协议
  * 更小的数据包体积
  * 更快的编解码速率

### RPC调用：Node.js Buffer编解码二进制数据包
buffer.form 
```
const buffer = Buffer.form('string') // 从现有的数据结构
```
buffer.alloc
```
const buffer = Buffer.alloc(20) // 从指定长度
```

### RPC 调用：Node.js net建立多路复用的RPC通道

根据单工，半双工，全双工示例理解


### 项目实战

nodemon 
koa-mount  路由
koa-static
protocol-buffers 
koa-graphql 

memory-fs
mkdirp
几个常用的包

模版引擎、子模版
easy_sock 用来实现node 和 后台的rpc 通信的模块
const easy_sock = new EasySock({
  ip: 170.0.0.1,
  port: 3000,
  timeout: 500,
  keepAlive: true
})

### 性能优化 http服务的性能测试

压力测试工具
  * ab 性能压测
  * webbench
-c 模拟多少的客户端请求  -n 多少次 -t 测试多少时间
ab -c200 -n1600 http://127.0.0.1:3000/download


找到性能瓶颈所在地
  * top      cpu 内存
  * iostat    io 设备带宽
  负载


### node 自带的性能分析工具

node --prof entry.js
node --prof-process isolate-0xxxxxx.log > profile.txt 输出到profile.txt 文件

工具 
  * Node 自带 profile
  * chrome devtool

chrome
node --inspect--brk entry.js

clinic.js npm 包


### 性能优化

 readFileSync 减少执行次数


qps

### 内存管理优化

* 垃圾回收

* 新生带  容量更小，垃圾回收更快
* 老生代  容量更大，垃圾清理频率更低

* 减少内存使用，也是提高服务性能的手段
* 如果有内存泄漏，会导致服务性能大大降低

检测内存泄漏？？？


Node.js Buffer 的内存分配策略

8Kb

节省内存的使用最好方法
使用池

### Node C++ 插件
node-gyp 编译使用的包
bindings 处理引入的路径太长的问题, 自动判断各种情况的node 文件

const geetXXX = require('./build/Release/test.node')
const geetXXX = require('bindings')('node文件的名字')

### 多进程优化

child_process
worker_threads

### cluster 模块

os 
os.cpus().length 
一般只fork 一半的

### 进程守护

* Node.js 的稳定性
在主进程里对服务器进程的进行监控

* uncaughtException
* 心跳包

```
//child.js 中 
process.on('uncaughtException', (err) =>{
  console.log(err)
  process.exit(1);
})
setInterval(()=>{
  if(process.memoryUsage().rss>734003200){
    console.log('omm')
    process.exit(1)
  }
})

// 子进程心跳响应
process.on('message', (str)=> {
  if(str == 'ping') {
    process.send('pong')
  }
})
```

```

// 对子进程做心跳检测
//没隔一段时间给子进程发一个心跳包，没返回，就是僵尸进程
const worker = cluster.fork()
var inter = setInterval(_=>{
  worker.send('ping');
  missedPing++;
  if(missedPing>=3) {
    clearInterval(inter)
    process.kill(worker.process.pid)
  }
}, 3000)
worker.on('message', (msg) => {
  if(msg == 'pong') {
    missedPing--;
  }
})

// master.js,  在退出之后马上创建 一个子进程
cluster.on('exit', ()=>{
  //cluster.fork()
  setTimeout(_=>{
    cluster.fork()
  }, 5000)
})



```

### 利用架构的设计 性能优化

动静分离

* 静态内容
  * 基本不会变动，也不会因为请求参数不同而变化
  * -> CDN分发，HTTP缓存等
* 动态内容
  * 各种因为请求参数不同而变动，且变种的数量几乎不可枚举
  * -> 用大量的源站机器承载，结合反响代理进行负载均衡

  netstat -nlp | grep 80
  ab 工具在yum 中叫 httpd-tools

  ### 框架设计和工程化

  * 架构设计
    * 底层更稳固  -> 程序不容易崩溃
    * 更容易往上搭 ->扩展新功能更方便
  
  * 工程工具
    * 更加易于施工 -> 学习上手成本低
    * 保证施工安全 -> 不会因为操作失误搞挂程序
  

  * 给工程师使用的产品
    * 开发体验
      * 可维护性
      * 可靠性
      * 易用性
      * 。。。
    （软件质量体系）

Kiss 原则    
渐进式 vue 

### 设计模式
<img  :src="$withBase('/assets/technology/node/design.jpg')">


### serverless
<img  :src="$withBase('/assets/technology/node/serverless.jpg')">

Serverless => 屏蔽细节

服务端框架

工具端代码

!!!
事件循环
https://www.taopoppy.cn/node/one_betterNode.html#%E6%9E%B6%E6%9E%84%E5%8D%87%E7%BA%A7

### xcode 调试
./configure -- -f xcode

设置协议
