(window.webpackJsonp=window.webpackJsonp||[]).push([[79],{607:function(t,s,a){"use strict";a.r(s);var e=a(4),v=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"nodejs-开发实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#nodejs-开发实战"}},[t._v("#")]),t._v(" nodeJs 开发实战")]),t._v(" "),a("p",[t._v("极客时间")]),t._v(" "),a("h3",{attrs:{id:"什么是node-js"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#什么是node-js"}},[t._v("#")]),t._v(" 什么是node.js")]),t._v(" "),a("p",[t._v("官网的话：\nNode.js 是一个基于[^chromeV8引擎]的JavaScript运行环境 [^要注明的文本]\nNode.js 使用了一个[^事件驱动]、[^非阻塞式I/O]的模型，使起轻量又高校")]),t._v(" "),a("p",[t._v("一般去理解标注的三部分，其实没有必要")]),t._v(" "),a("p",[t._v("在node.js 里运行javascript和在chrome中运行有什么不同？\nchrome浏览器用的同样的JavaScript引擎和模型")]),t._v(" "),a("p",[t._v("几乎没有不一样！！！")]),t._v(" "),a("blockquote",[a("p",[t._v("不一样：")])]),t._v(" "),a("blockquote",[a("p",[t._v("1、node.js 没有浏览器的API，document、window")])]),t._v(" "),a("blockquote",[a("p",[t._v("2、node.js 让你用类似的方式，控制整个计算器")])]),t._v(" "),a("h3",{attrs:{id:"node-js-能做什么"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-能做什么"}},[t._v("#")]),t._v(" node.js 能做什么")]),t._v(" "),a("p",[t._v("web服务 -腾讯视频"),a("br"),t._v("\n1、搜索引擎优化+首屏速度优化 = 服务端渲染")]),t._v(" "),a("p",[t._v("2、服务端渲染 + 前后端同构 = Node.js")]),t._v(" "),a("p",[t._v("构建工作流\ngulpJs webpack\n构建工具不会永远不出问题\n构建工具不会永远满足需求\n使用Node.js 做js 构建工具，最保险")]),t._v(" "),a("p",[t._v("开发工具 Visual Studio Code")]),t._v(" "),a("p",[t._v("游戏 wayward")]),t._v(" "),a("p",[t._v("可扩展性：\n大型应用需要给使用这自定义模块的能力")]),t._v(" "),a("p",[t._v("使用Node.js 做复杂本地应用\n可以利用js的灵活性提供外部扩展\njs 庞大的开发者基数让给你他们呢的灵活性等到利用")]),t._v(" "),a("p",[t._v("客户端应用- twitch.tv\n在已有的网站的情况下需要新开发客户端应用\n用Node.js 客户端技术（electron） 实现，最大限度的复用现有工程")]),t._v(" "),a("h3",{attrs:{id:"实战项目"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实战项目"}},[t._v("#")]),t._v(" 实战项目")]),t._v(" "),a("p",[t._v("Node.js 版即可时间网站")]),t._v(" "),a("ul",[a("li",[t._v("列表页面\n"),a("ul",[a("li",[t._v("打通前后台")]),t._v(" "),a("li",[t._v("服务端渲染")])])]),t._v(" "),a("li",[t._v("详情页\n"),a("ul",[a("li",[t._v("网页路由")]),t._v(" "),a("li",[t._v("异步加载")])])]),t._v(" "),a("li",[t._v("播放页\n"),a("ul",[a("li",[t._v("API服务器")])])])]),t._v(" "),a("h1",{attrs:{id:"第二章"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#第二章"}},[t._v("#")]),t._v(" 第二章")]),t._v(" "),a("h3",{attrs:{id:"技术预研"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#技术预研"}},[t._v("#")]),t._v(" 技术预研")]),t._v(" "),a("p",[t._v("什么技术预研")]),t._v(" "),a("ul",[a("li",[t._v("分析要做的需求，找出技术难点")]),t._v(" "),a("li",[t._v("针对每个技术那点进行攻克")])]),t._v(" "),a("p",[t._v("BFF\nBackend for Frontend\n中间渲染层 负责组装后台放回的数据，返回给浏览器，为前端所服务的后台服务")]),t._v(" "),a("ul",[a("li",[t._v("对用户侧提供http服务")]),t._v(" "),a("li",[t._v("使用后端RPC服务")])]),t._v(" "),a("h3",{attrs:{id:"node-开发环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-开发环境"}},[t._v("#")]),t._v(" Node 开发环境")]),t._v(" "),a("h3",{attrs:{id:"commonjs-规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#commonjs-规范"}},[t._v("#")]),t._v(" CommonJs 规范")]),t._v(" "),a("ul",[a("li",[t._v("脚本变多时，需要手动管理加载顺序")]),t._v(" "),a("li",[t._v("不同的脚本之间逻辑调用，需要通过全局变量的方式。")]),t._v(" "),a("li",[t._v("没有html 怎么办？")])]),t._v(" "),a("p",[t._v("CommonJs 规范 来管理js 的加载")]),t._v(" "),a("ul",[a("li",[t._v("JavaScript社区发起，在Node.js 上应用并推广")]),t._v(" "),a("li",[t._v("后续也影响到了浏览器端JavaScript.")]),t._v(" "),a("li",[t._v("eq webpack 兼容CommonJs 规范")])]),t._v(" "),a("p",[t._v("webpack --devtool none --mode development --target node index.js"),a("br"),t._v("\nwebpack 打包指定文件")]),t._v(" "),a("h3",{attrs:{id:"npm"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#npm"}},[t._v("#")]),t._v(" npm")]),t._v(" "),a("p",[t._v("开发npm   npm init")]),t._v(" "),a("p",[t._v("npm event-stream 事件  问题")]),t._v(" "),a("h3",{attrs:{id:"node-js-的内置模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-js-的内置模块"}},[t._v("#")]),t._v(" Node.js 的内置模块")]),t._v(" "),a("ul",[a("li",[t._v("EventEmitter\n"),a("ul",[a("li",[t._v("观察者模式  （往上抛事件的能力）\n"),a("ul",[a("li",[t._v("addEventLister")]),t._v(" "),a("li",[t._v("removeEventLister")])])]),t._v(" "),a("li",[t._v("调用 vs 抛事件\n"),a("ul",[a("li",[t._v("关键在于 “不知道被通知者的存在”")]),t._v(" "),a("li",[t._v("以及 “，没有人听还能继续下去”")])])])])])]),t._v(" "),a("h3",{attrs:{id:"异步-非阻塞i-o"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步-非阻塞i-o"}},[t._v("#")]),t._v(" 异步 非阻塞I/O")]),t._v(" "),a("p",[t._v("非阻塞I/O"),a("br"),t._v("\nI/O   即 Input/Output 一个系统的输入和输出\n阻塞I/O  和非阻塞I/O  的区别在于系统接收输入再到输出期间，能不能接收其他输入")]),t._v(" "),a("p",[t._v("理解非阻塞I/O 的要点在于")]),t._v(" "),a("ul",[a("li",[t._v("确定给一个进行Input/Output的系统")]),t._v(" "),a("li",[t._v("思考在I/O过程中，能不能进行其他I/O\n限定一个系统范围\n"),a("img",{attrs:{src:t.$withBase("/assets/technology/node/io.jpg")}}),t._v("\n对于我们点菜人员：\n系统 = 食堂阿姨/服务生，输入 = （客人）点菜、输出 = 端到菜\n排队打饭是阻塞I/O：食堂工作人员在每个学生点菜到端到菜离开之前这个期间是不能给别的同学打饭的，或者说对于学生来讲，在前面的人没有走之前，只能等着\n餐厅点菜是非阻塞I/O：服务生点完菜就可以服务其他人，对于客人来讲，在点菜和菜端上来的期间，服务生可以接受其他客人的点菜")])]),t._v(" "),a("h3",{attrs:{id:"异步编程-callback"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#异步编程-callback"}},[t._v("#")]),t._v(" 异步编程 callback")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("回调函数格式规范")]),t._v(" "),a("ul",[a("li",[t._v("error-first callback")]),t._v(" "),a("li",[t._v("Node-style callback")])])]),t._v(" "),a("li",[a("p",[t._v("第一个参数是error ，后面的参数才是结果")])]),t._v(" "),a("li",[a("p",[t._v("异步流程控制")])]),t._v(" "),a("li",[a("p",[t._v("async.js")])]),t._v(" "),a("li",[a("p",[t._v("thunk 编程范式")])])]),t._v(" "),a("h3",{attrs:{id:"事件循环"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#事件循环"}},[t._v("#")]),t._v(" 事件循环")]),t._v(" "),a("p",[t._v("每个事件循环相当于一个全新的栈")]),t._v(" "),a("h3",{attrs:{id:"promise"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#promise"}},[t._v("#")]),t._v(" promise")]),t._v(" "),a("p",[t._v("Node.js 异步编程\nPromise")]),t._v(" "),a("ul",[a("li",[t._v("当前事件循环得不到的结果，但未来的事件循环回给到你结果")]),t._v(" "),a("li",[t._v("是一个状态机\n"),a("ul",[a("li",[t._v("pending")]),t._v(" "),a("li",[t._v("fulfilled?resolved")]),t._v(" "),a("li",[t._v("rejected")])])])]),t._v(" "),a("p",[t._v("promise的状态是可以转换的\n只能从pending-resolved或者rejected")]),t._v(" "),a("ul",[a("li",[a("p",[t._v(".then 和 .catch")]),t._v(" "),a("ul",[a("li",[t._v("resolved状态的promise会回调后面的第一个.then")]),t._v(" "),a("li",[t._v("rejected状态的promise 会回调后面的第一个.catch")]),t._v(" "),a("li",[t._v("任何一个rejected状态且后面没有.catch的Promise，都会造成浏览器/node的环境的全局错误")])])]),t._v(" "),a("li",[a("p",[t._v("执行then和catch会返回一个新Promise， 该Promise最终状态根据then 和catch 的回调函数的执行结果决定")]),t._v(" "),a("ul",[a("li",[t._v("如果回到函数最终是throw， 该Promise是rejected状态")]),t._v(" "),a("li",[t._v("如果回调函数最终是return， 该Promise是resolved状态")]),t._v(" "),a("li",[t._v("但如果回调函数最终return了一个Promise，该Promise会和回调函数return的Promise保持一致（这种机制，可以在promise的链式调用中串行的执行多个异步任务）")])])])]),t._v(" "),a("h3",{attrs:{id:"async-await"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#async-await"}},[t._v("#")]),t._v(" async await")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("async / await")]),t._v(" "),a("ul",[a("li",[t._v("async function 是 Promise的语法糖封装  async 就是return promise的一个普通函数")]),t._v(" "),a("li",[t._v("异步编程的终极方案-以同步的方式写异步\n"),a("ul",[a("li",[t._v("await 关键字可以 “暂停” async function 的执行")]),t._v(" "),a("li",[t._v("await 关键字可以以同步的写法获取Promise的执行结果")]),t._v(" "),a("li",[t._v("try-catch 可以获取 await 所得到的错误")])])])])]),t._v(" "),a("li",[a("p",[t._v("一个穿越事件循环存在的 function")])])]),t._v(" "),a("h3",{attrs:{id:"http-服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-服务"}},[t._v("#")]),t._v(" Http 服务")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("HTTP是什么？")]),t._v(" "),a("ul",[a("li",[t._v("应用层协议")]),t._v(" "),a("li",[t._v("五层网络协议")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th")])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("5.应用层")])]),t._v(" "),a("tr",[a("td",[t._v("4.运输层")])]),t._v(" "),a("tr",[a("td",[t._v("3.网络层")])]),t._v(" "),a("tr",[a("td",[t._v("2.数据链路层")])]),t._v(" "),a("tr",[a("td",[t._v("1.物理层")])])])])]),t._v(" "),a("li",[a("p",[t._v("http 做的 把网页打包成网络数据包   在 拆数据包 成网页")])])]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/technology/node/http.jpg")}}),t._v(" "),a("ul",[a("li",[a("p",[t._v("一个网页请求，包含两次http包的交换")]),t._v(" "),a("ul",[a("li",[t._v("浏览器向http服务发送请求http包")]),t._v(" "),a("li",[t._v("http服务器向浏览器返回http包")])])]),t._v(" "),a("li",[a("p",[t._v("以极客时间首页为例，分析http格式")])]),t._v(" "),a("li",[a("p",[t._v("http 服务要做什么事情")]),t._v(" "),a("ul",[a("li",[t._v("解析进来的http请求报文")]),t._v(" "),a("li",[t._v("返回对应的http返回的报文")])])])]),t._v(" "),a("h3",{attrs:{id:"http-简单实现一个http服务器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#http-简单实现一个http服务器"}},[t._v("#")]),t._v(" HTTP 简单实现一个HTTP服务器")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" http "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'http'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nhttp"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createServer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" res")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("req"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("url "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/favicon.ico'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("end")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("writeHead")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// res.send('hello')")]),t._v("\n  fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("createReadStream")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("__dirname"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/index.html'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("pipe")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("res"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("listen")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")])])])]),a("h3",{attrs:{id:"_20-http-实现网页版石头剪刀布"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_20-http-实现网页版石头剪刀布"}},[t._v("#")]),t._v(" 20 | HTTP：实现网页版石头剪刀布")]),t._v(" "),a("h3",{attrs:{id:"_21-http-用express优化石头剪刀布游戏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_21-http-用express优化石头剪刀布游戏"}},[t._v("#")]),t._v(" 21 HTTP：用express优化石头剪刀布游戏")]),t._v(" "),a("p",[t._v("Express")]),t._v(" "),a("ul",[a("li",[t._v("关键功能有哪些")]),t._v(" "),a("li",[t._v("推导出它要解决的问题是什么")])]),t._v(" "),a("p",[t._v("功能")]),t._v(" "),a("ul",[a("li",[t._v("路由")]),t._v(" "),a("li",[t._v("简化http操作 request/response\n"),a("ul",[a("li",[t._v("request：pathname、query等")]),t._v(" "),a("li",[t._v("response： send()、json()、jsonp()等")])])]),t._v(" "),a("li",[t._v("模版引擎")]),t._v(" "),a("li",[t._v("脚手架，快速创建应用，容易上手")])]),t._v(" "),a("p",[t._v("express 会根据返回的数据格式来处理成我们可能想要的样子")]),t._v(" "),a("p",[t._v("node  end\nexpress send")]),t._v(" "),a("p",[t._v("express 中间件")]),t._v(" "),a("p",[t._v("express 洋葱模型不完善")]),t._v(" "),a("h3",{attrs:{id:"_22-http-用koa优化石头剪刀布游戏"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_22-http-用koa优化石头剪刀布游戏"}},[t._v("#")]),t._v(" 22 | HTTP：用koa优化石头剪刀布游戏")]),t._v(" "),a("p",[t._v("koa")]),t._v(" "),a("p",[t._v("核心功能")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("中间件 -- 使用async function实现中间件")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("有 “暂停执行” 的能力")])]),t._v(" "),a("li",[a("p",[t._v("在异步的情况下也符合洋葱模型")]),t._v(" "),a("p",[t._v("express 的中间件洋葱模型， 同步没有任何非阻塞I/O  异步调用的情况下是符合洋葱模型 但是一旦有异步就出现问题，打破了洋葱模型")]),t._v(" "),a("p",[t._v("koa 中间件使用async 来编写的")]),t._v(" "),a("p",[t._v("await next()  函数可以中断这个中间件的执行，后面的都执行完在执行这个")])])])]),t._v(" "),a("li",[a("p",[t._v("request和response的处理--- 比express 更极致的request/response的简化")]),t._v(" "),a("ul",[a("li",[t._v("ctx.status = 200")]),t._v(" "),a("li",[t._v("ctx.body = '内容'\n将  request和response  收到ctx 中")])])]),t._v(" "),a("li",[a("p",[t._v("没有路由，需要在中间件中自己设计编写")])])]),t._v(" "),a("p",[t._v("express vs koa")]),t._v(" "),a("ul",[a("li",[t._v("express 门槛更低，koa 更强大")]),t._v(" "),a("li",[t._v("express 封装更多的东西，开发更快速，koa可定制型更高")])]),t._v(" "),a("h3",{attrs:{id:"rpc通信"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpc通信"}},[t._v("#")]),t._v(" RPC通信")]),t._v(" "),a("p",[t._v("RPC调用")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Remote Procedure Call (远程过程调用)")])]),t._v(" "),a("li",[a("p",[t._v("和Ajax 有什么相同点？")])]),t._v(" "),a("li",[a("p",[t._v("都是两个计算机之间的网络通信")])]),t._v(" "),a("li",[a("p",[t._v("需要双方约定一个数据格式")])])]),t._v(" "),a("p",[t._v("ajax  浏览器-服务器\nrpc  服务器-服务器")]),t._v(" "),a("p",[t._v("不同：")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("ajax 使用dns 作为寻址服务 ，rpc 不一定，在内网中调用 没必要")])]),t._v(" "),a("li",[a("p",[t._v("rpc 应用层协议一般不使用http，使用二进制 协议")])]),t._v(" "),a("li",[a("p",[t._v("基于 tcp/udp")])]),t._v(" "),a("li",[a("p",[t._v("寻址/负载均衡")]),t._v(" "),a("ul",[a("li",[t._v("ajax 使用dns 进行寻址\n"),a("img",{attrs:{src:t.$withBase("/assets/technology/node/ajax.jpg")}})]),t._v(" "),a("li",[t._v("rpc 使用特有的服务进行寻址\n"),a("img",{attrs:{src:t.$withBase("/assets/technology/node/rpc.jpg")}})])])]),t._v(" "),a("li",[a("p",[t._v("tcp 通信方式")]),t._v(" "),a("ul",[a("li",[t._v("单工通信")]),t._v(" "),a("li",[t._v("半双工通信  （同一时间 ，轮番单工通信） rpc")]),t._v(" "),a("li",[t._v("全双工通信 rpc")])])]),t._v(" "),a("li",[a("p",[t._v("二进制协议")]),t._v(" "),a("ul",[a("li",[t._v("更小的数据包体积")]),t._v(" "),a("li",[t._v("更快的编解码速率")])])])]),t._v(" "),a("h3",{attrs:{id:"rpc调用-node-js-buffer编解码二进制数据包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpc调用-node-js-buffer编解码二进制数据包"}},[t._v("#")]),t._v(" RPC调用：Node.js Buffer编解码二进制数据包")]),t._v(" "),a("p",[t._v("buffer.form")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const buffer = Buffer.form('string') // 从现有的数据结构\n")])])]),a("p",[t._v("buffer.alloc")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("const buffer = Buffer.alloc(20) // 从指定长度\n")])])]),a("h3",{attrs:{id:"rpc-调用-node-js-net建立多路复用的rpc通道"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rpc-调用-node-js-net建立多路复用的rpc通道"}},[t._v("#")]),t._v(" RPC 调用：Node.js net建立多路复用的RPC通道")]),t._v(" "),a("p",[t._v("根据单工，半双工，全双工示例理解")]),t._v(" "),a("h3",{attrs:{id:"项目实战"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目实战"}},[t._v("#")]),t._v(" 项目实战")]),t._v(" "),a("p",[t._v("nodemon\nkoa-mount  路由\nkoa-static\nprotocol-buffers\nkoa-graphql")]),t._v(" "),a("p",[t._v("memory-fs\nmkdirp\n几个常用的包")]),t._v(" "),a("p",[t._v("模版引擎、子模版\neasy_sock 用来实现node 和 后台的rpc 通信的模块\nconst easy_sock = new EasySock({\nip: 170.0.0.1,\nport: 3000,\ntimeout: 500,\nkeepAlive: true\n})")]),t._v(" "),a("h3",{attrs:{id:"性能优化-http服务的性能测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化-http服务的性能测试"}},[t._v("#")]),t._v(" 性能优化 http服务的性能测试")]),t._v(" "),a("p",[t._v("压力测试工具")]),t._v(" "),a("ul",[a("li",[t._v("ab 性能压测")]),t._v(" "),a("li",[t._v("webbench\n-c 模拟多少的客户端请求  -n 多少次 -t 测试多少时间\nab -c200 -n1600 http://127.0.0.1:3000/download")])]),t._v(" "),a("p",[t._v("找到性能瓶颈所在地")]),t._v(" "),a("ul",[a("li",[t._v("top      cpu 内存")]),t._v(" "),a("li",[t._v("iostat    io 设备带宽\n负载")])]),t._v(" "),a("h3",{attrs:{id:"node-自带的性能分析工具"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-自带的性能分析工具"}},[t._v("#")]),t._v(" node 自带的性能分析工具")]),t._v(" "),a("p",[t._v("node --prof entry.js\nnode --prof-process isolate-0xxxxxx.log > profile.txt 输出到profile.txt 文件")]),t._v(" "),a("p",[t._v("工具")]),t._v(" "),a("ul",[a("li",[t._v("Node 自带 profile")]),t._v(" "),a("li",[t._v("chrome devtool")])]),t._v(" "),a("p",[t._v("chrome\nnode --inspect--brk entry.js")]),t._v(" "),a("p",[t._v("clinic.js npm 包")]),t._v(" "),a("h3",{attrs:{id:"性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#性能优化"}},[t._v("#")]),t._v(" 性能优化")]),t._v(" "),a("p",[t._v("readFileSync 减少执行次数")]),t._v(" "),a("p",[t._v("qps")]),t._v(" "),a("h3",{attrs:{id:"内存管理优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内存管理优化"}},[t._v("#")]),t._v(" 内存管理优化")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("垃圾回收")])]),t._v(" "),a("li",[a("p",[t._v("新生带  容量更小，垃圾回收更快")])]),t._v(" "),a("li",[a("p",[t._v("老生代  容量更大，垃圾清理频率更低")])]),t._v(" "),a("li",[a("p",[t._v("减少内存使用，也是提高服务性能的手段")])]),t._v(" "),a("li",[a("p",[t._v("如果有内存泄漏，会导致服务性能大大降低")])])]),t._v(" "),a("p",[t._v("检测内存泄漏？？？")]),t._v(" "),a("p",[t._v("Node.js Buffer 的内存分配策略")]),t._v(" "),a("p",[t._v("8Kb")]),t._v(" "),a("p",[t._v("节省内存的使用最好方法\n使用池")]),t._v(" "),a("h3",{attrs:{id:"node-c-插件"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#node-c-插件"}},[t._v("#")]),t._v(" Node C++ 插件")]),t._v(" "),a("p",[t._v("node-gyp 编译使用的包\nbindings 处理引入的路径太长的问题, 自动判断各种情况的node 文件")]),t._v(" "),a("p",[t._v("const geetXXX = require('./build/Release/test.node')\nconst geetXXX = require('bindings')('node文件的名字')")]),t._v(" "),a("h3",{attrs:{id:"多进程优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多进程优化"}},[t._v("#")]),t._v(" 多进程优化")]),t._v(" "),a("p",[t._v("child_process\nworker_threads")]),t._v(" "),a("h3",{attrs:{id:"cluster-模块"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cluster-模块"}},[t._v("#")]),t._v(" cluster 模块")]),t._v(" "),a("p",[t._v("os\nos.cpus().length\n一般只fork 一半的")]),t._v(" "),a("h3",{attrs:{id:"进程守护"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#进程守护"}},[t._v("#")]),t._v(" 进程守护")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Node.js 的稳定性\n在主进程里对服务器进程的进行监控")])]),t._v(" "),a("li",[a("p",[t._v("uncaughtException")])]),t._v(" "),a("li",[a("p",[t._v("心跳包")])])]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("//child.js 中 \nprocess.on('uncaughtException', (err) =>{\n  console.log(err)\n  process.exit(1);\n})\nsetInterval(()=>{\n  if(process.memoryUsage().rss>734003200){\n    console.log('omm')\n    process.exit(1)\n  }\n})\n\n// 子进程心跳响应\nprocess.on('message', (str)=> {\n  if(str == 'ping') {\n    process.send('pong')\n  }\n})\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n// 对子进程做心跳检测\n//没隔一段时间给子进程发一个心跳包，没返回，就是僵尸进程\nconst worker = cluster.fork()\nvar inter = setInterval(_=>{\n  worker.send('ping');\n  missedPing++;\n  if(missedPing>=3) {\n    clearInterval(inter)\n    process.kill(worker.process.pid)\n  }\n}, 3000)\nworker.on('message', (msg) => {\n  if(msg == 'pong') {\n    missedPing--;\n  }\n})\n\n// master.js,  在退出之后马上创建 一个子进程\ncluster.on('exit', ()=>{\n  //cluster.fork()\n  setTimeout(_=>{\n    cluster.fork()\n  }, 5000)\n})\n\n\n\n")])])]),a("h3",{attrs:{id:"利用架构的设计-性能优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#利用架构的设计-性能优化"}},[t._v("#")]),t._v(" 利用架构的设计 性能优化")]),t._v(" "),a("p",[t._v("动静分离")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("静态内容")]),t._v(" "),a("ul",[a("li",[t._v("基本不会变动，也不会因为请求参数不同而变化")]),t._v(" "),a("li",[t._v("-> CDN分发，HTTP缓存等")])])]),t._v(" "),a("li",[a("p",[t._v("动态内容")]),t._v(" "),a("ul",[a("li",[t._v("各种因为请求参数不同而变动，且变种的数量几乎不可枚举")]),t._v(" "),a("li",[t._v("-> 用大量的源站机器承载，结合反响代理进行负载均衡")])]),t._v(" "),a("p",[t._v("netstat -nlp | grep 80\nab 工具在yum 中叫 httpd-tools")]),t._v(" "),a("h3",{attrs:{id:"框架设计和工程化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#框架设计和工程化"}},[t._v("#")]),t._v(" 框架设计和工程化")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("架构设计")]),t._v(" "),a("ul",[a("li",[t._v("底层更稳固  -> 程序不容易崩溃")]),t._v(" "),a("li",[t._v("更容易往上搭 ->扩展新功能更方便")])])]),t._v(" "),a("li",[a("p",[t._v("工程工具")]),t._v(" "),a("ul",[a("li",[t._v("更加易于施工 -> 学习上手成本低")]),t._v(" "),a("li",[t._v("保证施工安全 -> 不会因为操作失误搞挂程序")])])]),t._v(" "),a("li",[a("p",[t._v("给工程师使用的产品")]),t._v(" "),a("ul",[a("li",[t._v("开发体验\n"),a("ul",[a("li",[t._v("可维护性")]),t._v(" "),a("li",[t._v("可靠性")]),t._v(" "),a("li",[t._v("易用性")]),t._v(" "),a("li",[t._v("。。。\n（软件质量体系）")])])])])])])])]),t._v(" "),a("p",[t._v("Kiss 原则"),a("br"),t._v("\n渐进式 vue")]),t._v(" "),a("h3",{attrs:{id:"设计模式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设计模式"}},[t._v("#")]),t._v(" 设计模式")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/technology/node/design.jpg")}}),t._v(" "),a("h3",{attrs:{id:"serverless"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#serverless"}},[t._v("#")]),t._v(" serverless")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/technology/node/serverless.jpg")}}),t._v(" "),a("p",[t._v("Serverless => 屏蔽细节")]),t._v(" "),a("p",[t._v("服务端框架")]),t._v(" "),a("p",[t._v("工具端代码")]),t._v(" "),a("p",[t._v("!!!\n事件循环\nhttps://www.taopoppy.cn/node/one_betterNode.html#%E6%9E%B6%E6%9E%84%E5%8D%87%E7%BA%A7")]),t._v(" "),a("h3",{attrs:{id:"xcode-调试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xcode-调试"}},[t._v("#")]),t._v(" xcode 调试")]),t._v(" "),a("p",[t._v("./configure -- -f xcode")]),t._v(" "),a("p",[t._v("设置协议")])])}),[],!1,null,null,null);s.default=v.exports}}]);