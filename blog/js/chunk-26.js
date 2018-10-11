(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{319:function(t,e,n){"use strict";n.r(e);var i=n(392),s=n(383);for(var a in s)"default"!==a&&function(t){n.d(e,t,function(){return s[t]})}(a);var o=n(0),l=Object(o.a)(s.default,i.a,i.b,!1,null,null,null);l.options.__file="src\\views\\articles\\frontend\\VueJS\\note-00.vue",e.default=l.exports},382:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},383:function(t,e,n){"use strict";n.r(e);var i=n(382),s=n.n(i);for(var a in i)"default"!==a&&function(t){n.d(e,t,function(){return i[t]})}(a);e.default=s.a},392:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BoWen",[n("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"注册全局可用的函数",content:"注册全局函数后，可以在各个组件中使用。",status:"wait"},nativeOn:{click:function(e){t.toTop("#note-00-fun",30)}}}),t._v(" "),n("Step",{attrs:{title:"注册全局组件",content:"注册全局组件，减少引入组件等沉余代码。"},nativeOn:{click:function(e){t.toTop("#note-00-block",30)}}})],1)],1),t._v(" "),n("div",{staticClass:"px-1"},[n("div",{staticClass:"py-3 text-center"},[n("h1",[n("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" 全局注册组件和函数")],1),t._v(" "),n("p",{staticClass:"pt-1"},[t._v("在 "),n("code",[t._v("webpack-vue")]),t._v(" 项目中注册全局可用组件和函数")])]),t._v(" "),n("h3",{staticClass:"ml-1",attrs:{id:"note-00-fun"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 注册全局可用的函数")],1),t._v(" "),n("Divider"),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("                "),n("code",{staticClass:"js"},[t._v("// main.js\nimport util from './util.js';\nVue.prototype.$util = util;")]),t._v("\n            ")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("                "),n("code",{staticClass:"js"},[t._v("// 在组件中使用\nmethod:{\n    helloWorld() {\n        // sayHello 为 util 上的方法\n        this.$util.sayHello();\n    }\n}")]),t._v("\n            ")]),t._v(" "),n("h3",{staticClass:"ml-1",attrs:{id:"note-00-block"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 注册全局组件")],1),t._v(" "),n("Divider"),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("                "),n("code",{staticClass:"js"},[t._v("// main.js\n// 自定义全局组件\nimport defineSubassemblies from './components/defineSubassembly.js';\nVue.use(defineSubassemblies);")]),t._v("\n            ")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[t._v("                "),n("code",{staticClass:"js"},[t._v("// defineSubassembly.js\nimport FullPage from './fullpage/fullpage.vue';\nimport PageItem from './fullpage/components/page.vue';\n\nconst defineSubassemblies = {\n    install:function (Vue) {\n        Vue.component('FullPage',FullPage);\n        Vue.component('PageItem',PageItem);\n    }\n};\n\nexport default defineSubassemblies;\n")]),t._v("\n            ")]),t._v(" "),n("FooterDivider")],1)])},s=[];i._withStripped=!0,n.d(e,"a",function(){return i}),n.d(e,"b",function(){return s})}}]);