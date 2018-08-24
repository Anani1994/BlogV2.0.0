(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{286:function(e,t,n){"use strict";n.r(t);var i=n(323),l=n(302);for(var o in l)"default"!==o&&function(e){n.d(t,e,function(){return l[e]})}(o);var r=n(0),c=Object(r.a)(l.default,i.a,i.b,!1,null,null,null);c.options.__file="src\\views\\articles\\frontend\\JS\\new-trigger-event.vue",t.default=c.exports},301:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{toTop:this.$util.toTop,toPage:this.$util.toPage}}}},302:function(e,t,n){"use strict";n.r(t);var i=n(301),l=n.n(i);for(var o in i)"default"!==o&&function(e){n.d(t,e,function(){return i[e]})}(o);t.default=l.a},323:function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("BoWen",[n("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"Event 构造函数",content:"新式的事件创建和分发",status:"wait"},nativeOn:{click:function(t){e.toTop("#trigger-event-event",30)}}}),e._v(" "),n("Step",{attrs:{title:"CustomEvent",content:"通过 CustomEvent 向事件对象添加更多数据",status:"wait"},nativeOn:{click:function(t){e.toTop("#trigger-event-cusEve",30)}}})],1)],1),e._v(" "),n("div",{staticClass:"px-1"},[n("div",{staticClass:"py-3 text-center"},[n("h1",[n("Icon",{attrs:{type:"ios-book-outline"}}),e._v(" 手动触发事件（新）")],1),e._v(" "),n("p",{staticClass:"pt-1"},[e._v("简要介绍手动触发 JavaScript 事件的新方法")])]),e._v(" "),n("h3",{attrs:{id:"trigger-event-event"}},[n("Icon",{attrs:{type:"logo-buffer"}}),e._v(" Event 构造函数")],1),e._v(" "),n("Divider"),e._v(" "),n("div",{staticClass:"ml-2"},[e._v("绝大多数现代浏览器中都会支持这个构造函数（Internet Explorer 例外）。想要了解 "),n("Tag",{nativeOn:{click:function(t){e.toPage("trigger-event")}}},[e._v("过时的方法")]),e._v(" 请参考上面的描述。")],1),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2 border-white"},[n("code",{staticClass:"js"},[e._v("function trigger (selector, eveType, setting) { // eveType：所创事件的名称，setting：详见下面的实例\n    let ele = document.querySelector(selector);\n    let eve = new Event(eveType, setting);\n    // 添加对该事件的监听\n    ele.addEventListener(eveType, function() {\n        //do something\n    })\n    ele.dispatchEvent(eve);\n}")])]),e._v(" "),n("p",[e._v("测试代码如下所示。")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2 border-white"},[n("code",{staticClass:"js"},[e._v('<!DOCTYPE html>\n<html lang="zh-CN">\n<head>\n    <title>测试</title>\n</head>\n<body>\n<div id="parent">\n\t<div id="target">我是目标元素。</div>\n</div>\n<button>测试</button>\n</body>\n<script>\nfunction trigger (selector, eveType, setting) {\n    let ele = document.querySelector(selector);\n    let eve = new Event(eveType, setting);\n    ele.addEventListener(eveType, function() {\n        console.log(1);\n    })\n    ele.dispatchEvent(eve);\n}\ndocument.querySelector(\'#parent\').onclick = function () {\n    console.log(0);\n}\ndocument.querySelector(\'button\').onclick = function () {\n    // setting 中：\n    // bubbles(boolean): 是否冒泡\n    // cancelable(boolean): 事件能否被取消\n    // composed(boolean): 事件是否会在影子DOM根节点之外触发侦听器\n    trigger (\'#target\', \'click\', {"bubbles":true, "cancelable":true, "composed":false});\n}\n<\/script>\n</html>\n')])]),e._v(" "),n("p",[e._v("我们也可以触发某个元素上已经监听的事件，测试代码如下所示。")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2 border-white"},[n("code",{staticClass:"html"},[e._v("<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n    <title>测试</title>\n</head>\n<body>\n<div id=\"target\">我是目标元素。</div>\n<button>测试</button>\n</body>\n<script>\nfunction trigger (selector, eveType) {\n    let ele = document.querySelector(selector);\n    let eve = new Event(eveType);\n    ele.dispatchEvent(eve);\n}\ndocument.querySelector('#target').onclick = function sayHello () {\n    alert('Hello');\n}\ndocument.querySelector('button').onclick = function () {\n    trigger ('#target', 'click');\n}\n<\/script>\n</html>\n")])]),e._v(" "),n("h3",{attrs:{id:"trigger-event-cusEve"}},[n("Icon",{attrs:{type:"logo-buffer"}}),e._v(" CustomEvent")],1),e._v(" "),n("Divider"),e._v(" "),n("P",[e._v("要向事件对象添加更多数据，可以使用 "),n("code",[e._v("CustomEvent")]),e._v("，"),n("code",[e._v("detail")]),e._v(" 属性可用于传递自定义数据 "),n("code",[e._v("CustomEvent")]),e._v(" 接口可以为 "),n("code",[e._v("event")]),e._v(" 对象添加更多的数据。")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2 border-white"},[n("code",{staticClass:"js"},[e._v("function trigger (selector, eveType) {\n    let ele = document.querySelector(selector);\n    let eve = new CustomEvent('click', { 'sayHello': 'Hello' });\n    ele.addEventListener(eveType, function(event) {\n        alert(event.sayHello);\n    });\n    ele.dispatchEvent(eve);\n}")])]),e._v(" "),n("p",[e._v("测试代码如下所示。")]),e._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2 border-white"},[n("code",{staticClass:"html"},[e._v("<!DOCTYPE html>\n<html lang=\"zh-CN\">\n<head>\n    <title>测试</title>\n</head>\n<body>\n<div id=\"target\">我是目标元素。</div>\n<button>测试</button>\n</body>\n<script>\nfunction trigger (selector, eveType) {\n    let ele = document.querySelector(selector);\n    let eve = new CustomEvent('click', { detail: 'Hello' });\n    ele.addEventListener(eveType, function(event) {\n        alert(event.detail);\n    });\n    ele.dispatchEvent(eve);\n}\ndocument.querySelector('button').onclick = function () {\n    trigger ('#target', 'click');\n}\n<\/script>\n</html>")])]),e._v(" "),n("p",[e._v("总结 CustomEvent 的用法：")]),e._v(" "),n("pre",{staticClass:"ml-2"},[n("code",[e._v("event = new CustomEvent(typeArg, customEventInit);")])]),e._v(" "),n("p",[n("code",[e._v("customEventInit")]),e._v(' 是可选的，包括"detail"，可选的默认值是 '),n("code",[e._v("null")]),e._v(" 的任意类型数据，是一个与 "),n("code",[e._v("event")]),e._v(" 相关的值；"),n("code",[e._v("bubbles")]),e._v(" 一个布尔值，表示该事件能否冒泡；"),n("code",[e._v("cancelable")]),e._v(" 一个布尔值，表示该事件是否可以取消。")]),e._v(" "),n("p",{staticClass:"text-right"},[e._v("参考资料："),n("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/"}},[e._v("MDN")])]),e._v(" "),n("FooterDivider")],1)])},l=[];i._withStripped=!0,n.d(t,"a",function(){return i}),n.d(t,"b",function(){return l})}}]);