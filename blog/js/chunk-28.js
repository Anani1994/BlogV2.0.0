(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{321:function(t,e,n){"use strict";n.r(e);var o=n(421),s=n(390);for(var i in s)"default"!==i&&function(t){n.d(e,t,function(){return s[t]})}(i);var r=n(0),a=Object(r.a)(s.default,o.a,o.b,!1,null,null,null);a.options.__file="src\\views\\articles\\others\\notes\\note-02.vue",e.default=a.exports},389:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},390:function(t,e,n){"use strict";n.r(e);var o=n(389),s=n.n(o);for(var i in o)"default"!==i&&function(t){n.d(e,t,function(){return o[t]})}(i);e.default=s.a},421:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BoWen",[n("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"隐藏滚动条且保持滚动",content:"简单实现隐藏滚动条且保持滚动",status:"wait"},nativeOn:{click:function(e){t.toTop("#note-021",30)}}}),t._v(" "),n("Step",{attrs:{title:"error: pathspec 'field'' did not match any file(s) known to git.",content:"error: pathspec 'field'' did not match any file(s) known to git."},nativeOn:{click:function(e){t.toTop("#note-022",30)}}}),t._v(" "),n("Step",{attrs:{title:"检查是否登录后跳转，防止进入死循环",content:"Vue 项目中的路由问题",status:"wait"},nativeOn:{click:function(e){t.toTop("#note-023",30)}}}),t._v(" "),n("Step",{attrs:{title:"BrowserslistError: Unknown browser major",content:"BrowserslistError: Unknown browser major",status:"wait"},nativeOn:{click:function(e){t.toTop("#note-024",30)}}}),t._v(" "),n("Step",{attrs:{title:"webpack-vue 使用 font-awesome",content:"在 webpack-vue 如何使用 font-awesome",status:"wait"},nativeOn:{click:function(e){t.toTop("#note-025",30)}}}),t._v(" "),n("Step",{attrs:{title:"刷新后导航高亮失效",content:"iview导航栏组件，选中当前页面之后，点刷新或点击浏览器后退按钮后，导航栏选中的就消失了",status:"wait"},nativeOn:{click:function(e){t.toTop("#note-026",30)}}})],1)],1),t._v(" "),n("div",{staticClass:"pt-3 text-center"},[n("h1",[n("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" 问题收录集（1）")],1),t._v(" "),n("p",{staticClass:"pt-1"},[t._v("收集整理开发路上遇到的各种问题。")])]),t._v(" "),n("div",{staticClass:"markdown-content"},[n("h5",{attrs:{id:"note-021"}},[t._v("隐藏滚动条且保持滚动效果")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"CSS"},[t._v(".outer-container {\n    overflow: hidden;        // 隐藏滚动条\n    width: 240px;          // 内容宽度，同时配合子元素\n    height: 100%;\n}\n.inner-container {\n    overflow-x: hidden; // 隐藏水平滚动条\n    overflow-y: scroll;    // 产生垂直滚动\n    width: 257px;       // 比父元素宽出滚动条的宽度 17px\n    height: 100%;          // 设置产生滚动条\n}\n.inner-container::-webkit-scrollbar {\n    display: none;            //  webkit 内核的浏览器仅需设置此属性\n}\n\n// 另一种方法,在滚动的容器设置\n.inner-container {\n    margin-right: -17px;\n}\n")])]),t._v(" "),n("h5",{attrs:{id:"note-022"}},[t._v("error: pathspec 'field'' did not match any file(s) known to git.")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"js"},[t._v("// 需要在提交时将描述信息放在两重引号中，原因疑是 git 无法识别 文件名或路径\ngit add .\ngit commit -m \"'your message'\"\ngit pull origin master\ngit push origin master\n")])]),t._v(" "),n("h5",{attrs:{id:"note-023"}},[t._v("检查是否登录后跳转，防止进入死循环")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"js"},[t._v("router.beforeEach((to, from, next) => {\n    out //判断登录状态简单实例\n    var userInfo = window.localStorage.getItem('token');\n    if (userInfo) {\n        next();\n    } else {\n        next('/login');\n    }\n})\n\n// 以上会发现出现如下错误：出现 dead loop错误,解决方法如下所示\n// 解决思路：排除此时地址 = 转向的地址 的情况，避免dead loop\nrouter.beforeEach((to, from, next) => {\n    var userInfo = window.localStorage.getItem('token');//获取浏览器缓存的用户信息\n    if(userInfo){ //如果有就直接到首页咯\n        next();\n    } else {\n        if(to.path=='/login'){ //如果是登录页面路径，就直接next()\n            next();\n        } else { //不然就跳转到登录；\n            next('/login');\n        }\n\n    }\n})\n")])]),t._v(" "),n("h5",{attrs:{id:"note-024"}},[t._v("BrowserslistError: Unknown browser major")]),t._v(" "),n("p",[t._v("在 webpack 中引入使用 bootstrap\n                引用 bootstrap.min.js 正常\n                引用 bootstrap.min.css 报错")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"js"},[t._v("ERROR in ./node_modules/css-loader?minimize!./node_modules/autoprefixer-loader!./node_modules/bootstrap/dist/css/bootstrap.min.css\n    Module build failed: BrowserslistError: Unknown browser major\n        at error (E:\\project\\node_modules\\browserslist\\index.js:37:11)\n        at Function.browserslist.checkName (E:\\project\\node_modules\\browserslist\\index.js:320:18)\n        at Function.select (E:\\project\\node_modules\\browserslist\\index.js:438:37)\n        at E:\\project\\node_modules\\browserslist\\index.js:207:41\n        at Array.forEach (<anonymous>)\n        at browserslist (E:\\project\\node_modules\\browserslist\\index.js:196:13)\n        at Browsers.parse (E:\\project\\node_modules\\autoprefixer\\lib\\browsers.js:44:14)\n        at new Browsers (E:\\project\\node_modules\\autoprefixer\\lib\\browsers.js:39:28)\n        at loadPrefixes (E:\\project\\node_modules\\autoprefixer\\lib\\autoprefixer.js:56:18)\n        at plugin (E:\\project\\node_modules\\autoprefixer\\lib\\autoprefixer.js:62:18)\n        at LazyResult.run (E:\\project\\node_modules\\postcss\\lib\\lazy-result.js:274:20)\n        at LazyResult.sync (E:\\project\\node_modules\\postcss\\lib\\lazy-result.js:261:32)\n        at LazyResult.stringify (E:\\project\\node_modules\\postcss\\lib\\lazy-result.js:285:14)\n        at LazyResult.get (E:\\project\\node_modules\\postcss\\lib\\lazy-result.js:334:25)\n        at Object.module.exports (E:\\project\\node_modules\\autoprefixer-loader\\index.js:55:35)\n")])]),t._v(" "),n("p",[t._v("解决方法：")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"js"},[t._v('// Edit node_modules\\bootstrap\\package.json: Remove these lines:\n\n"last 1 major version",\n">= 1%",\n')])]),t._v(" "),n("h5",{attrs:{id:"note-025"}},[t._v("webpack-vue 使用font-awesome")]),t._v(" "),n("p",[t._v("npm 安装font-awesome 以及需要的所有依赖 ")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"js"},[t._v("npm install less less-loader css-loader style-loader file-loader font-awesome --save\n")])]),t._v(" "),n("p",[t._v("在入口文件中全局注册font-awesome")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"js"},[t._v("import 'font-awesome/css/font-awesome.min.css';\n")])]),t._v(" "),n("p",[t._v("配置解析")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"js"},[t._v("{\n    test: /\\.(gif|jpg|jpeg|png|woff|svg|eot|ttf)\\??.*$/,\n    loader: 'url-loader?limit=1024'\n},\n")])]),t._v(" "),n("h5",{attrs:{id:"note-026"}},[t._v("iview导航栏组件，选中当前页面之后，点刷新或点击浏览器后退按钮后，导航栏选中的就消失了")]),t._v(" "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[n("code",{staticClass:"js"},[t._v("在vuex的 state 存储 active-name，根据路由用 computed 取出 active-name\n")])])]),t._v(" "),n("FooterDivider")],1)},s=[];o._withStripped=!0,n.d(e,"a",function(){return o}),n.d(e,"b",function(){return s})}}]);