---
tags: 
- vue
date: 2020-04-13
categories: 
- "前端"
---
# vue

1、谈一下你对MVVM的原理的理解
* 传统的 MVC 指的是,用户操作会请求服务端路由，路由会调用对应的控制器来处理,控制器会获取数 据。将结果返回给前端,页面重新渲染
* MVVM :传统的前端会将数据手动渲染到页面上, MVVM 模式不需要用户收到操作 dom 元素,将数据绑 定到 viewModel 层上，会自动将数据渲染到页面中，视图变化会通知 viewModel层 更新数据。
ViewModel 就是我们 MVVM 模式中的桥梁.

2.请说一下响应式数据的原理?
* 理解:
  * 1.核心点: Object.defineProperty
  * 2.默认 Vue 在初始化数据时，会给 data 中的属性使用 Object.defineProperty 重新定义所有属 性,当页面取到对应属性时。会进行依赖收集(收集当前组件的watcher) 如果属性发生变化会通 知相关依赖进行更新操作。