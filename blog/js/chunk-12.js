(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{305:function(t,e,n){"use strict";n.r(e);var o=n(442),i=n(360);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);var s=n(0),c=Object(s.a)(i.default,o.a,o.b,!1,null,null,null);c.options.__file="src\\views\\articles\\frontend\\JS\\throttle-debounce.vue",e.default=c.exports},359:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},360:function(t,e,n){"use strict";n.r(e);var o=n(359),i=n.n(o);for(var a in o)"default"!==a&&function(t){n.d(e,t,function(){return o[t]})}(a);e.default=i.a},442:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BoWen",[n("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"背景",content:"介绍节流函数的主要应用场景",status:"wait"},nativeOn:{click:function(e){t.toTop("#throttle-debounce-bg",30)}}}),t._v(" "),n("Step",{attrs:{title:"函数节流",content:"函数节流的定义和实现",status:"wait"},nativeOn:{click:function(e){t.toTop("#throttle-debounce-throttle",30)}}}),t._v(" "),n("Step",{attrs:{title:"函数去抖",content:"函数去抖的定义和实现",status:"wait"},nativeOn:{click:function(e){t.toTop("#throttle-debounce-debounce",30)}}})],1)],1),t._v(" "),n("div",{staticClass:"px-1"},[n("div",{staticClass:"py-3 text-center"},[n("h1",[n("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" JavaScript 函数节流和函数防抖")],1),t._v(" "),n("p",{staticClass:"pt-1"},[t._v("通过限制函数的执行来提高应用程序的性能")])]),t._v(" "),n("h3",{staticClass:"ml-1",attrs:{id:"throttle-debounce-bg"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 背景")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("我们知道 "),n("code",[t._v("DOM")]),t._v(" 操作时很消耗性能的，如果你为这些事件绑定一些操作DOM节点的操作的话，那就会引发大量的计算，比如以下几种场景。")]),t._v(" "),n("ul",{staticClass:"ml-2 mb-1",staticStyle:{"list-style-position":"inside"}},[n("li",[t._v("通过监听 "),n("code",[t._v("keyup")]),t._v(" 事件，监听输入进行模糊匹配。")]),t._v(" "),n("li",[t._v("通过监听 "),n("code",[t._v("scroll")]),t._v(" 事件，检测滚动位置，根据滚动位置显示返回顶部按钮、改变导航栏背景色等等。")]),t._v(" "),n("li",[t._v("通过监听 "),n("code",[t._v("resize")]),t._v(" 事件，对某些自适应页面调整DOM的渲染：全屏滚动项目中，窗口大小改变时重新获取视口高度。")]),t._v(" "),n("li",[t._v("拖拽时的 "),n("code",[t._v("mousemove")]),t._v(" 事件。")])]),t._v(" "),n("p",[t._v("在用户看来，页面可能就一时间没有响应，这样页面一下子变卡了。在IE下，如果你绑定的 "),n("code",[t._v("resize")]),t._v(" 事件进行较多 "),n("code",[t._v("DOM")]),t._v(" 操作，其高频率甚至可能直接就使得浏览器崩溃。")]),t._v(" "),n("h3",{staticClass:"ml-1",attrs:{id:"throttle-debounce-throttle"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 函数节流")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("触发函数事件后，规定时间间隔内无法连续调用，只有上一次函数执行后，过了规定的时间间隔，才能进行下一次的函数调用。")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"js"},[t._v("// method 回调函数\n// context 执行环境\n// delay 间隔时间\nconst throttle = function (method, context, delay) {\n    let wait = false;\n    return function() {\n        if (!wait) {\n            method.apply(context);\n            wait = true;\n            setTimeout(() => {\n                wait = false;\n            }, delay);\n        }\n    };\n}")])]),t._v(" "),n("h3",{staticClass:"ml-1",attrs:{id:"throttle-debounce-debounce"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 函数去抖")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("多次触发事件后，事件处理函数只在触发操作结束时执行一次。")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[n("code",{staticClass:"js"},[t._v("// method 回调函数\n// context 执行环境\n// delay 时间间隔\nconst debounce = function (method, context, delay) {\n    clearTimeout(method.tId);\n    method.tId = setTimeout(() => {\n        method.call(context);\n    },delay)\n}")])]),t._v(" "),n("p",{staticClass:"text-right"},[t._v("参考资料："),n("a",{attrs:{href:"http://www.alloyteam.com/2012/11/javascript-throttle/"}},[t._v("浅谈javascript的函数节流 | AlloyTeam")]),t._v(" "),n("span",[t._v("|")]),t._v(" "),n("a",{attrs:{href:"https://codeburst.io/throttling-and-debouncing-in-javascript-b01cad5c8edf"}},[t._v("throttling-and-debouncing-in-javascript-codeburst")])]),t._v(" "),n("FooterDivider")],1)])},i=[];o._withStripped=!0,n.d(e,"a",function(){return o}),n.d(e,"b",function(){return i})}}]);