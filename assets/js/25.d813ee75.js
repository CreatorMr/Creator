(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{544:function(e,t,n){"use strict";n.r(t);var i=n(4),s=Object(i.a)({},(function(){var e=this.$createElement,t=this._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":this.$parent.slotKey}},[t("p",[this._v("写 React / Vue 项目时为什么要在列表组件中写 key，其作用是什么？\nkey 作用？\nkey是给每一个vnode的唯一id,可以依靠key,更准确, 更快的拿到oldVnode中对应的vnode节点。")]),this._v(" "),t("ol",[t("li",[t("p",[this._v("更准确\n因为带key就不是就地复用了，在sameNode函数 a.key === b.key对比中可以避免就地复用的情况。所以会更加准确。")])]),this._v(" "),t("li",[t("p",[this._v("更快\n利用key的唯一性生成map对象来获取对应节点，比遍历方式更快。(这个观点，就是我最初的那个观点。从这个角度看，map会比遍历更快。)\n答：\nvue和react都是采用diff算法来对比新旧虚拟节点，从而更新节点。在vue的diff函数中（建议先了解一下diff算法过程）。\n在交叉对比中，当新节点跟旧节点头尾交叉对比没有结果时，会根据新节点的key去对比旧节点数组中的key，从而找到相应旧节点（这里对应的是一个key => index 的map映射）。如果没找到就认为是一个新增节点。而如果没有key，那么就会采用遍历查找的方式去找到对应的旧节点。一种一个map映射，另一种是遍历查找。相比而言。map映射的速度更快。")])])])])}),[],!1,null,null,null);t.default=s.exports}}]);