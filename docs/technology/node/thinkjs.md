# thinkjs

<a name="f7d58236"></a>
### 特性：
      基于koa 2.x 兼容middleware<br />支持 Extend、Adapter 等插件方式<br />内置自动编译<br />自动更新机制<br />async/await<br />内置pm2和nginx集成，部署方便

![image.png](https://cdn.nlark.com/yuque/0/2019/png/276031/1552535002336-efe9996b-afe7-4dc5-9eee-03feee0cce2d.png#align=left&display=inline&height=1498&name=image.png&originHeight=1498&originWidth=1928&size=2213095&status=done&width=1928)
<a name="f10a56cd"></a>
### 为什么说基于Koa?
think.app = new Koa();<br />将new Koa()赋值给think.app<br />这里有全局think<br />添加think到think.app上<br />think.app.think = think<br />封装一些方法将think.app 中的属性等挂到think上，think.env   think.service等的由来。
<a name="b9b47206"></a>
### thinkjs创建-启动
安装 npm install -g think-cli<br />创建 thinkjs new demo<br />安装依赖 npm install

```javascript
// 安装
$ npm install -g think-cli
// 创建-启动项目
$ thinkjs new <project-name>
$ npm install
$ npm start
```

```markdown

├── README.md

├── db

│   └── db.sql

├── development.js 入口

├── nginx.conf 

├── package-lock.json

├── package.json

├── pm2.json  Node.js 进程管理器

├── production.js

├── runtime

│   └── config

│       └── development.json

├── src

│   ├── bootstrap 启动自定义 启动加载 目录下文件 ，可以自定义一些操作

│   │   ├── common.js

│   │   ├── master.js

│   │   └── worker.js  think.app.on("appReady") appReady事件捕获

│   ├── config 配置 adapter、config 支持多环境模式

│   │   ├── adapter.js

│   │   ├── adapter.development.js

│   │   ├── config.js 

│   │   ├── config.development.js 

│   │   ├── config.production.js

│   │   ├── extend.js

│   │   ├── middleware.js

│   │   ├── model.js

│   │   └── router.js

│   ├── controller 

│   │   ├── base.js

│   │   └── index.js

│   ├── logic

│   │   └── index.js

│   └── model

│       └── index.js

├── test

│   └── index.js

├── view

│   └── index_index.html

└── www

   └── static

       ├── css

       ├── image

       └── js
```

---


npm start<br />"scripts": {<br />   "start": "node www/development.js",<br />   "compile": "babel src/ --out-dir app/",<br />   ..........."<br />---------------------  

- development 开发模式
- production 线上模式
- testing 测试模式

启动：<br />入口文件是 development.js，启动时直接和一般的node启动一样 node development.js即可。查看入口文件可知启动的时候，实际上是实例化 ThinkJS 里的 Application 类，<br />执行 run 方法--->

```javascript
const path = require('path');
const Application = require('thinkjs');
const watcher = require('think-watcher');

const instance = new Application({
  ROOT_PATH: __dirname,
  APP_PATH: path.join(__dirname, 'src'),//APP_PATH指的是寻找模块的路径，就是上面的app目录
  watcher: watcher,
  env: 'development'
});
instance.run();
```
先require，path略过，require('thinkjs')--application.js

```javascript
const path = require('path');
const cluster = require('cluster');
const helper = require('think-helper');
const thinkCluster = require('think-cluster');
const pm2 = require('think-pm2');
const http = require('http');
const assert = require('assert');
const mockHttp = require('think-mock-http');

const ThinkLoader = require('./loader.js');
```
然后在require  load.js中的模块

```javascript
const getConfigFn = require('think-config').getConfigFn;
const Logger = require('think-logger3');
const Loader = require('think-loader');
const path = require('path');
const helper = require('think-helper');
const Crontab = require('think-crontab');
const fs = require('fs');

require('./think.js');
```
此时获取export的Config 和 getConfigFn<br />然后think-loader中看到以下
```javascript
const helper = require('think-helper');
const path = require('path');
const fs = require('fs');
const Config = require('./loader/config.js');
const bootstrap = require('./loader/bootstrap.js');
const Middleware = require('./loader/middleware.js');
const router = require('./loader/router.js');
const extend = require('./loader/extend.js');
const common = require('./loader/common.js');
const crontab = require('./loader/crontab.js');
const extendMethod = require('./loader/util.js').extend;
const validator = require('./loader/validator.js');

```

这里最重要了，各种loadXXX方法备用；再回到think.js中

```javascript
const Koa = require('koa');
const helper = require('think-helper');
const pkg = require('../package.json');
const assert = require('assert');
const messenger = require('think-cluster').messenger;
```

 think.app = new Koa()出生了!!!   (^_^)<br />think上开始挂Controller、Logic、Service、version、message、。。。。<br />再来个Watcher。 new Wachter()  并执行watcher（）方法，略过，这里不详细说。<br />终于开始new Application() 了，APP_PATH 这个看一眼，对应的项目路径。开始run<br />实例化一个 ThinkLoadder把路径和环境塞进去。 

```javascript
const instance = new ThinkLoader(this.options);
```
instance.loadAll()
```javascript
const config = think.loader.loadConfig(think.app.env);
think.config = getConfigFn(config, think.loader.modules.length > 0);
think.logger = new Logger(helper.parseAdapterConfig(think.config('logger')), true);

if (type !== 'master') {
  this.writeConfig(config);
  this.loadExtend();
  this.loadData();
  this.loadMiddleware();
  if (!isCli) {
    this.loadCrontab();
  }
}
think.loader.loadBootstrap(type);
```
getConfigFn这个熟悉吧，其他的loadXXX方法都在load.js里。这里之后我里的的就是各种forEach，但是不都是在master下合并进去的。<br />判断环境  ---> 根据ThinkLoadder 中loadAll（）方法 ---> 根据不同环境在 runtime下生成对应环境的json 文件<br />loadBootstrap(type)--bootstrap  运行 runInMaster(argv)--> _getMasterInstance(argv) 端口、host、wokers--启动服务。。。。<br />启动自定义<br />系统启动时会加载 src/bootstrap/目录下的文件--- >master 开启--fork worker  - development.js

<a name="c9c4c301"></a>
### 静态资源

www 静态资源目录

- `config.js` 通用的一些配置
- `adapter.js` adapter配置 （数据库的配置）
- `router.js`自定义路由配置
- `middleware.js` middleware配置
- `validator.js` 数据校验配置
- `extend.js` extend 配置

使用配置<br />框架提供了在不同环境下不同的方式快速获取配置：

- 在ctx（上下文）中，可以通过`ctx.config(key)`来获取配置
- 在controller中，可以通过`controller.config(key)`来获取配置
- 其他情况下，可以通过`think.config(key)`来获取配置

实际上，`ctx.config`和`controller.config`是基于`think.config`包装的一种更方便的获取配置的方式。


<a name="ecff77a8"></a>
### 使用
创建控制器  thinksjs controller + 控制器文件名 ;也可以创建一同目录一起创建  <br />创建模型文件  thinkjs model +模型文件名

model 中 操作 this.model(‘b表名’) 如果创建的文件名和表名一致 ，可以直接操作不用实例化模型<br />controller、logic、service、middleware、extend、adapter等是使用的。


启动服务前执行 node 启动http 服务之前做一些特殊的逻辑处理。如，从数据库中读取配置并设置，从远程获取一些数据设置到缓存中<br />think.beforeStartServer(async () => {<br />const data = await get DataFromApi();<br />think.config(key,data);<br />})<br />可以通过 `think.beforeStartServer` 注册多个需要执行的逻辑，如果逻辑函数中有异步的操作，需要返回 Promise。<br />系统会等待注册的多个逻辑执行完成后才启动服务，当然也不会无限制的等待，会有个超时时间。超时时间可以通过配置 `startServerTimeout` 修改，默认为 3 秒<br />module.exports = {<br />startServerTimeout:5000<br />}


Context是Koa中处理用户请求中的一个对象，贯穿整个请求生命周期。一般在`middleware`、`controller`、`logic`中使用，简称ctx。<br />框架里继承了该对象，并通过 Extend 机制扩展了很多非常有用的属性和方法。<br />ctx.state<br />ctx.state.user = await User.find(id)


middleware 高阶函数 外部接收一个options   开启/关闭一些功能，执行后返回一个函数，这个函数接收ctx、next参数

配置项为项目中要使用的中间件列表，每一项支持`handle`，`enable`，`options`，`match`等属性。<br />`handle`<br />中间件的处理函数，可以使用系统内置的，也可以是外部导入的，也可以是项目里的中间件。<br />`enable`<br />是否开启当前的中间件。<br />`options`<br />传递给中间件的配置项，格式为一个对象，中间件里获取到这个配置。<br />`match`<br />匹配特定的规则后才执行该中间件，支持两种方式，一种是路径匹配，一种是自定义函数匹配。<br />框架内置的中间件<br />框架内置了几个中间件，可以通过字符串的方式直接引用。

- `meta` 显示一些meta信息。如：发送ThinkJS版本号，接口的处理时间等
- `resource` 处理静态资源，生产环境建议关闭，直接用webserver处理即可
- `trace` 处理报错，开发环境将详细的报错信息显示处理，也可以自定义显示错误页面
- `payload` 处理表单提交和文件上传，类似于`koa-bodyparser`等`middleware`
- `router` 路由解析，包含自定义路由解析
- `logic` logic调用，数据校验
- `controller` controller和action

项目中自定义的中间件---options 可以直接定义初始值/使用一个函数

controller 需要继承think.controller类，<br />action执行  通过中间件think-controller来完成的，通过`ctx.action`值在controller寻找xxxAction的方法名并调用，且调用相关的魔术方法


extend 扩展   框架内置的很多功能也是扩展来实现的：session、cache<br />支持扩展的类型think、application、context、request、response、controller、logic、service


数据库操作

```javascript
const user1 = think.model('user'); // 使用默认的数据库配置，默认的 type 为 mysql，那么就是使用 mysql 的配置
const user2 = think.model('user', 'mysql2'); // 使用 mysql2 的配置
const user3 = think.model('user', 'sqlite'); // 使用 sqlite 的配置
const user4 = think.model('user', 'postgresql'); // 使用 postgresql 的配置
think.model('user', { // 获取模型的实例，修改类型并添加其他的参数
  type: 'sqlite',
  aaa: 'bbb'
});
think.model('user', {}, 'admin'); // 获取模型的实例，指定为 admin 模块（多模块项目下有效）
```

find 、select、count、countSelect、max、avg、min、sum、getField 

条件、where、limit、field/fieldReverse 指定sql语句中的field<br />order、group、join、union 、having、cache

add thenAdd (where不存在时添加)、addMany 多条、selectAdd 、update updateMany thenUpdate 条件式更细  incrment decrement 、delete<br />query 手动查询  execute手写sql语句执行

关联表  relation <br />module.exports = class extends think.Model {<br />get relation(){<br />   return {<br /> info: think.Model.HAS_ONE<br />}<br /> }<br />}

一对一：think.Model.HAS_ONE<br />一对一（属于）：think.Model.BELONG_TO<br />一对多：think.Model.HAS_MANY<br />多对多：think.Model.MANY_TO_MANY

`Service` 都继承 `think.Service`基类，但该基类不提供任何方法，可以通过 `Extend` 进行扩展。<br />module.exports = class extends think.Service {<br /> find(id) {<br />return {username :'name',id:id}<br /> }<br />}<br />实例化Service类

调用远程接口 使用service<br />可以通过 `think.service` 方法实例化`Service` 类，在控制器、ctx 也有对应的 service 方法，如：`ctx.service`、`controller.service`，这些方法都是 `think.service` 的快捷方式。

有参数无参数实例化
<a name="97304a94"></a>
### 错误处理、timeout
try {<br />await getDataFromApi1();<br />await getDataFromApi2();<br />await getDataFromApi3();<br />} catch(e) { // capture error }<br />then/catch 将rejected promise转换成resolved promise

think.isError(err) ? err :new Error(err)   一个一个改是不是很low，当前有统一处理的<br />trace 中间件 

think.timeout  <br /> 框架提供了延迟处理的<br />return think.timeout(3000).then(() => {})

let result = await think.timeout(3000)

thinkjs3默认模板引擎是 nunjucks,如果在控制器action中这样写

```
this.assign('title',"测试网页之thinkjsplus!");
return this.display();
```


<a name="20b37561"></a>
### 多进程
master 和 worker  进程  -----   不同之处<br />系统启动时就需要执行的逻辑放在对应的文件里执行  执行的逻辑  包括哪些？用户请求<br />在config中不配置worker数量默认 0  （0或者不写--看电脑）<br />多进程模型下，master进程会根据workers大小fork对应数量的worker进程

进程间通信：worker之间不能通信，需要借助master进程<br />think.messager <br />think.message.broadcast 将消息广播到所有worker进程<br />//监听事件 src/bootstrap/worker.js<br />think.messenger.on('test', data => {<br />//所有进程都会捕获到该事件，包含当前的进程<br />});<br />// src/controller/xxx.js<br />//发送广播事件<br />think.messenger.broadcast('test', data);

consume 消费 map 所有进程下的任务
<a name="a9f94dcd"></a>
### 部署
使用pm2 进行部署 <br />pm2 startOrReload pm2.json<br />实例化一个Application ---- require('thinkjs')<br />const instance = new Application({<br />ROOT_PATH: __dirname,<br />APP_PATH: path.join(__dirname, 'src'),<br />watcher: watcher,<br />env: 'development'<br />})



