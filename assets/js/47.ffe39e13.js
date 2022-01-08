(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{605:function(t,s,a){"use strict";a.r(s);var n=a(4),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"javascript模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#javascript模块化"}},[t._v("#")]),t._v(" JavaScript模块化")]),t._v(" "),a("h2",{attrs:{id:"阮一峰es6入门-22章module语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#阮一峰es6入门-22章module语法"}},[t._v("#")]),t._v(" 阮一峰ES6入门 22章Module语法")]),t._v(" "),a("p",[t._v("在ES6之前，一些模块的加载方案就 CommonJS 和 AMD 两种；")]),t._v(" "),a("ul",[a("li",[t._v("CommonJS 用于服务器")]),t._v(" "),a("li",[t._v("AMD  用于浏览器")])]),t._v(" "),a("p",[t._v("ES6 模块设计的思想就是尽量静态化，使得编译时就能确定依赖， 以及输入和输出的变量\n而CommonJS只能在运行时确定这些东西。")]),t._v(" "),a("p",[t._v("比如CommonJS模块就是对象，输入的时候查找的必须也是对象")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("stat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" readFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 等价于")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" _fs "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" stat "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("stat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" exists "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" readFile "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" _fs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("readFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("上面实质是整体加载fs 模块(即所有的方法)， 生成一个_fs对象，然后从对象上获取三个方法。这种称为“运行时加载”。只有运行时才能得到这个对象，导致在编译的时候没办法做“静态优化”。")]),t._v(" "),a("p",[t._v("ES6模块不是对象， 而是通过export命令显示的输出的代码，再通过import命令输入。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("stat"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exists"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" readFile"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'fs'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("只加载了三个方法，不加载其它的方法。\n称为： “编译时加载”或“静态加载”")]),t._v(" "),a("p",[t._v("编译时就完成模块的加载，效率比CommonJS高。\n"),a("font",{attrs:{color:"red"}},[t._v("这也导致了ES6模块无法被引用，因为不是对象。")])],1),t._v(" "),a("p",[a("strong",[t._v("ES6 && CommonJS")])]),t._v(" "),a("p",[t._v("CommonJS与ES6 Module最本质的区别在于CommonJS对模块依赖的解决是“动态的”而ES6 Module是“静态的”")]),t._v(" "),a("p",[t._v("ES6 {")]),t._v(" "),a("ul",[a("li",[t._v("export: 可以输出多个，输出方式 {},")]),t._v(" "),a("li",[t._v("export default: 只能输出一个，可以与export同时输出， 但是不建议这么做")]),t._v(" "),a("li",[t._v("解析阶段确定对外输出的方法，解析阶段生成方法。")]),t._v(" "),a("li",[t._v("模块不是对象，加载的不是对象。")]),t._v(" "),a("li",[t._v("可以单独加载其中的某个方法")]),t._v(" "),a("li",[t._v("静态分析，动态引用，输出的是值的引用，值改变，引用也改变，即原来模块中的值改变则改加载的值也改变， this指向undefined")]),t._v(" "),a("li",[t._v("对于只读来说，即不允许修改引入变量的值，import的变量是只读的，不论是基本数据类型还是复杂数据类型。当模块遇到import命令时，就会生成一个只读引用。等到脚本真正执行时，再根据这个只读引用，到被加载的那个模块里面去取值。")]),t._v(" "),a("li",[t._v("循环加载时，ES6模块是动态引用。只要两个模块之间存在某个引用，代码就能够执行\n}")])]),t._v(" "),a("p",[t._v("CommonJS {")]),t._v(" "),a("ul",[a("li",[t._v("module.exports =... : 只输出一个， 且后面会覆上面的")]),t._v(" "),a("li",[t._v("exports....: 可以输出多个")]),t._v(" "),a("li",[t._v("运行时确定方法，运行时才会加载模块")]),t._v(" "),a("li",[t._v("模块是对象，加载的是该对象")]),t._v(" "),a("li",[t._v("加载的是整个模块，即将所有的方法全部加载进来，当使用require命令加载某个模块时，就会运行整个模块的代码。")]),t._v(" "),a("li",[t._v("输出的值是拷贝， 即原来模块中的值改变不会影响已经加载的该值，this指向当前模块")]),t._v(" "),a("li",[t._v("对于基本数据类型，属于复制。即会被模块缓存。同时，在另一个模块可以对该模块输出的变量重新赋值")]),t._v(" "),a("li",[t._v("对于复杂的数据类型，数据浅拷贝，由于两个模块引用的对象指向同一个内存空间，因此对该模块的值做修改时会影响另一个模块。")]),t._v(" "),a("li",[t._v("当使用require命令加载同一个模块时，不会再执行该模块，而是取到缓存之中的值。也就是说，CommonJS模块无论加载多少次，都只会在第一次加载时运行一次，以后再加载，就返回第一次运行的结果，除非手动清除系统缓存。")]),t._v(" "),a("li",[t._v('循环加载时，属于加载时执行。即脚本代码在require的时候，就会全部执行。一旦出现某个模块被"循环加载"，就只输出已经执行的部分，还未执行的部分不会输出。')])]),t._v(" "),a("p",[t._v("}")]),t._v(" "),a("p",[t._v("即commonjs是运行时加载模块，ES6是在静态编译期间就确定模块的依赖；")]),t._v(" "),a("p",[t._v("ES6在编译期间会将所有import提升到顶部，commonjs不会提升require；")]),t._v(" "),a("p",[t._v("两者的模块导入导出语法不同，commonjs是module.exports，exports导出，require导入；ES6则是export导出，import导入；")]),t._v(" "),a("p",[t._v("commonjs导出的是一个值拷贝，会对加载结果进行缓存，一旦内部再修改这个值，则不会同步到外部。ES6是导出的一个引用，内部修改可以同步到外部")]),t._v(" "),a("h2",{attrs:{id:"模块化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#模块化"}},[t._v("#")]),t._v(" 模块化")]),t._v(" "),a("p",[t._v("IE6 之前是没有JS 引擎的\n渲染引擎")]),t._v(" "),a("p",[t._v("最早就是在script标签中写代码")]),t._v(" "),a("p",[t._v("模块化的发展\n一个js 文件太大\nindex.js  index2.js  防止一个文件太大  最早的模块化 ---  出现公共的怎么办？ ---\x3e common.js 提到公共的js 文件中")]),t._v(" "),a("p",[t._v("CommonJS 的模块主要由原生的module来实现。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("Module "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  id"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 如果是mainModule id 固定为 '.', 如果不是则为模块的绝对路径")]),t._v("\n  exports"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  filename"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/absolute/path/to/entry.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前模块的绝对路径")]),t._v("\n  loaded"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块是否已加载完毕")]),t._v("\n  children"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 被该模块引用的模块")]),t._v("\n  parent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" 第一个引用该模块的模块\n  paths"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 模块的搜索路径")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/absolute/path/to/node_modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/absolute/path/node_modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/absolute/node_modules'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'/node_modules'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("为什么可以直接使用require方法加载模块？\n在CommonJS编写模块的时候，会使用require来加载模块，使用exports来做模块的输出，还有module,_filename, __dirname 这些变量，为什么他们不需要引用就能使用？\n答： Node在解析JS模块的时候，会先按文本读取内容，然后将模块内容进行包裹，在外层裹一个function， 传入变量。再通过vm.runInThisContext将字符串 转成 Function 形成作用域，避免全局污染，")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("wrap")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("script")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" Module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" script "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" Module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wrapper"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n \n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" wrapper "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'(function (exports, require, module, __filename, __dirname) { '")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'\\n});'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("参数中的 module 是当前模块的的 module 实例（尽管这个时候模块代码还没编译执行），exports 是 module.exports 的别名，最终被 require 的时候是输出 module.exports 的值。require 最终调用的也是 Module._load 方法。__filename，__dirname 则分别是当前模块在系统中的绝对路径和当前文件夹路径。")]),t._v(" "),a("p",[t._v("CommonJS -> require  同步")]),t._v(" "),a("p",[t._v("引用  创建一个模块实例  实例化\n缓存机制")]),t._v(" "),a("p",[t._v("require 引用进来会模块会变成一个立即执行函数\n(function(exports, require, module, _filename, __dirname) {")]),t._v(" "),a("p",[t._v("})()")]),t._v(" "),a("p",[a("strong",[t._v("AMD")]),t._v("\nAMD  就是 CommonJS 来的  CommonJS node上运行，浏览器运行不了\nAMD  Asynchronous module definition 异步模块定义")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moduleName"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" factory"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//定义模块")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("requie")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("module"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" callback"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//引入模块")]),t._v("\n")])])]),a("p",[t._v("RequireJS 需要配置路径")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("config")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  path"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    moduleA"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'js/module_a.js'")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moduleA'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moduleB'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'moduleC'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("moduleA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("moduleB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("moduleC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("moduleA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("moduleB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("moduleC"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("moduleA,moduleB,moduleC 都加载完成 才执行回调函数， 三个module 是异步加载。但是执行回调函数需要等待都加载完成 "),a("strong",[t._v("前置依赖")])]),t._v(" "),a("p",[a("strong",[t._v("CMD")]),t._v("\n阿里 模块化的标准 通用模块定义")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("define")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" exports"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" module")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义模块")]),t._v("\nseajs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("module路径"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("moduleA"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moduleB"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" moduleC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用模块 ")]),t._v("\n")])])]),a("p",[t._v("靠require加载 define定义\nexports导出 module 操作模块")]),t._v(" "),a("p",[t._v("依赖就近 按需加载")]),t._v(" "),a("p",[t._v("跟CommonJS和AMD 本质上的不同")]),t._v(" "),a("p",[t._v("AMD 依赖前置 模块都加载完成才执行回调")]),t._v(" "),a("p",[t._v("CMD 依赖就近，需要A 再去引用模块A  而不是在模块都加载完成再执行，而是在某个地方需要的时候 再加载， 产生依赖就近的原则。")]),t._v(" "),a("h2",{attrs:{id:"module-exports与exports-export与export-default之间的关系和区别"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#module-exports与exports-export与export-default之间的关系和区别"}},[t._v("#")]),t._v(" module.exports与exports，export与export default之间的关系和区别")]),t._v(" "),a("p",[t._v("优先使用 module.exports\n为了方便，Node为每个模块提供一个exports变量，指向module.exports。这等同在每个模块头部，有一行这样的命令。\nvar exports = module.exports;")]),t._v(" "),a("p",[t._v("注意，因为 Node 模块是通过 module.exports 导出的，如果直接将exports变量指向一个值，就切断了exports与module.exports的联系，导致意外发生：")]),t._v(" "),a("div",{staticClass:"language-JavaScript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("exports")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("a")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// b.js")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'./a.js'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// a 是一个空对象")]),t._v("\n\n")])])]),a("h3",{attrs:{id:"总结"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#总结"}},[t._v("#")]),t._v(" 总结：")]),t._v(" "),a("p",[t._v("1、CommonJS 模块输出的是一个值的拷贝\nES6 模块输出的是值的引用\n2、CommonJS模块是在运行时加载\nES6 模块是在编译时加载，本身就是模块")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("1、加载类型： CommonJS 运行时加载  / esmodule 编译时加载或者静态加载\n2、加载范围： CommonJS 整个对象，  esmodule 只加载引入的方法。\n3、效率：  es-module 效率比 CommonJS 高 。  编译时就完成模块的加载。\n4、动静态特点： CommonJS ”动态的“  esmodule ”静态的“\n5、this指向： CommonJS的this指向当前模块     esmodule的this指向 undefined\n6、值：CommonJS 值拷贝模块中值变 已经加载进来的值不受影响(分基本类型和复杂类型)  /esmodule静态分析，动态引用，值变，引用就变，原来模块中的值改变则改加载的值也改变， (只读)\n7、循环加载： CommonJS 加载时执行，require的时候全部执行，出现循环加载，只输出已经执行的部分，未执行的不会输出/es6模块是动态引用，只要两个模块之间存在引用，代码就能执行。\n8、是否提升： import会提升到顶部，CommonJS不会提升require\n9、使用：CommonJS 是module.exports / exports 导出，require导入    esmodule export导出 import导入")]),t._v(" "),a("hr"),t._v(" "),a("p",[t._v("YUI 模块化 JavaScript 函数库")]),t._v(" "),a("p",[t._v("模块化的发展：")]),t._v(" "),a("p",[t._v("IE6之前 没有JS引擎的，使用渲染引擎\nCommonJS使用原生的module来实现")]),t._v(" "),a("p",[t._v("CommonJS --- 使用 原生module来实现")]),t._v(" "),a("p",[t._v("Module {\nid: '',// 如果是mainModule id 固定为 '.', 如果不是则为模块的绝对路径\nexports: {},\nfilename: '/absolute/path/to/entry.js', // 当前模块的绝对路径\nloaded: false, // 模块是否已加载完毕\nchildren: [], // 被该模块引用的模块\nparent: '', 第一个引用该模块的模块\npaths: [// 模块的搜索路径\n'/absolute/path/to/node_modules',\n'/absolute/path/node_modules',\n'/absolute/node_modules',\n'/node_modules'\n]\n}")]),t._v(" "),a("p",[t._v("require 最终调用的也是Module._load 方法\nrequire 引用进来的模块会变成一个立即执行函数 (function(exports, require, module, _filename, __dirname) {\n...\n})()")]),t._v(" "),a("p",[t._v("AMD  asynchronous module definition 异步模块定义  依赖前置")]),t._v(" "),a("p",[t._v("define(moduleName, [module], factory)\nrequire([module], callback)")]),t._v(" "),a("p",[t._v("RequireJS 配置路径\nrequire.config({\nmoduleA: './js/....a.js'\n})")]),t._v(" "),a("p",[t._v("CMD 通用模块定义 阿里   依赖就近 按需加载  用的时候再引入\nseajs")]),t._v(" "),a("p",[t._v("define(function(require, exports, module) {}) // 定义模块\nseajs.use([module路径], function() {})")]),t._v(" "),a("p",[t._v("参考：")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://blog.csdn.net/xgangzai/article/details/106935104",target:"_blank",rel:"noopener noreferrer"}},[t._v("CommonJS 和 ES6 Module 究竟有什么区别？"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/unclekeith/archive/2017/10/17/7679503.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("CommonJS模块与ES6模块的区别"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://segmentfault.com/a/1190000010426778",target:"_blank",rel:"noopener noreferrer"}},[t._v("exports,module.exports,  export,export default "),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://www.cnblogs.com/unclekeith/p/7137047.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("ES6 Module"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=e.exports}}]);