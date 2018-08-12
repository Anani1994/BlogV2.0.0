(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{287:function(t,e,n){"use strict";n.r(e);var i=n(317),o=n(303);for(var r in o)"default"!==r&&function(t){n.d(e,t,function(){return o[t]})}(r);n(326);var s=n(0),a=Object(s.a)(o.default,i.a,i.b,!1,null,"6914d227",null);a.options.__file="src\\views\\articles\\others\\othMixed\\blog-dev-log.vue",e.default=a.exports},301:function(t,e,n){},302:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{toTop:this.$util.toTop}}}},303:function(t,e,n){"use strict";n.r(e);var i=n(302),o=n.n(i);for(var r in i)"default"!==r&&function(t){n.d(e,t,function(){return i[t]})}(r);e.default=o.a},317:function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("BoWen",[n("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[n("Steps",{attrs:{direction:"vertical"}},[n("Step",{attrs:{title:"提示",content:"新发布文章的要点",status:"wait"},nativeOn:{click:function(e){t.toTop("#note-tips",30)}}}),t._v(" "),n("Step",{attrs:{title:"尚存的 BUG",content:"现有的缺陷还未被解决"},nativeOn:{click:function(e){t.toTop("#note-buging",30)}}}),t._v(" "),n("Step",{attrs:{title:"解决的 BUG",content:"已经解决的缺陷"},nativeOn:{click:function(e){t.toTop("#note-buged",30)}}}),t._v(" "),n("Step",{attrs:{title:"操作日志",content:"记录一些重要的操作"},nativeOn:{click:function(e){t.toTop("#note-log",30)}}})],1)],1),t._v(" "),n("div",{staticClass:"p-1"},[n("div",{staticClass:"py-3 text-center"},[n("h1",[n("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" 博客开发记录")],1),t._v(" "),n("p",{staticClass:"pt-1"},[t._v("记录博客开发中遇到的问题和解决方法等")])]),t._v(" "),n("h3",{attrs:{id:"note-tips"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 提示")],1),t._v(" "),n("Divider"),t._v(" "),n("p",[t._v("发布文章时需要在 "),n("code",[t._v("articles.js")]),t._v(" 文件下根据第一条内容写下新建文章的相关信息，并在对应路径下创建文章的组件。")]),t._v(" "),n("p",[t._v("程序会根据所填信息自动创建路由，所以定要确保相关信息与第一条规范相匹配。")]),t._v(" "),n("h3",{attrs:{id:"note-buging"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 尚存的 BUG")],1),t._v(" "),n("Divider"),t._v(" "),n("ul",[n("li",[t._v("刷新子组件（文章）后导航栏高亮的元素不正确，会直接高亮首页。")])]),t._v(" "),n("h3",{attrs:{id:"note-buged"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 解决的 BUG")],1),t._v(" "),n("Divider"),t._v(" "),n("ul",[n("li",[t._v("\n                    从父路由点进子组件(（frontend 及其同级）下的组件)正常渲染，刷新页面后子组件内的内容直接消失，页面地址没变。\n                    "),n("p",[t._v("解决措施：修改子组件的路由中的 path 形如 articles/others/notes/note-00 => /articles/others/notes/note-00")])])]),t._v(" "),n("h3",{attrs:{id:"note-log"}},[n("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 操作日志")],1),t._v(" "),n("Divider"),t._v(" "),n("ul",[n("li",[t._v("\n                    配置 jQuery\n                    "),n("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"border-white"},[n("code",{staticClass:"js"},[t._v("// 安装\nyarn add jquery\n// 配置 webpack.base.config.js\nconst webpack = require('webpack');\nmodule.exports = {\n    ...\n    plugins: [\n        ...\n        new webpack.ProvidePlugin({\n            $: 'jquery',\n            jQuery: 'jquery',\n            'window.jQuery': 'jquery',\n        })\n        ...\n    ]\n}")])])])]),t._v(" "),n("FooterDivider")],1)])},o=[];i._withStripped=!0,n.d(e,"a",function(){return i}),n.d(e,"b",function(){return o})},326:function(t,e,n){"use strict";var i=n(301);n.n(i).a}}]);