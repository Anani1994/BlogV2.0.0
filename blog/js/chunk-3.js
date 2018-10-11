(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{296:function(t,i,o){"use strict";o.r(i);var n=o(395),e=o(331);for(var a in e)"default"!==a&&function(t){o.d(i,t,function(){return e[t]})}(a);var s=o(0),r=Object(s.a)(e.default,n.a,n.b,!1,null,null,null);r.options.__file="src\\views\\articles\\frontend\\CSS\\position-absolute.vue",i.default=r.exports},330:function(t,i,o){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{toTop:this.$util.toTop}}}},331:function(t,i,o){"use strict";o.r(i);var n=o(330),e=o.n(n);for(var a in n)"default"!==a&&function(t){o.d(i,t,function(){return n[t]})}(a);i.default=e.a},395:function(t,i,o){"use strict";var n=function(){var t=this,i=t.$createElement,o=t._self._c||i;return o("BoWen",[o("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[o("Steps",{attrs:{direction:"vertical"}},[o("Step",{attrs:{title:"基本定义和用法",content:"简单介绍绝对定位的定义和基础用法",status:"wait"},nativeOn:{click:function(i){t.toTop("#position-absolute-basis",30)}}}),t._v(" "),o("Step",{attrs:{title:"有无定位值的区别",content:"分析绝对定位元素有无定位值的区别",status:"wait"},nativeOn:{click:function(i){t.toTop("#position-absolute-0",30)}}}),t._v(" "),o("Step",{attrs:{title:"绝对定位元素的百分比定位",content:"分析绝对定位元素设置的定位值为百分比时的计算",status:"wait"},nativeOn:{click:function(i){t.toTop("#position-absolute-1",30)}}},[o("Steps",{attrs:{direction:"vertical"}},[o("Step",{attrs:{title:"父元素有内边界",content:"父元素有内边界时百分比定位值的计算",status:"wait"},nativeOn:{click:function(i){i.stopPropagation(),t.toTop("#position-absolute-1-0",30)}}}),t._v(" "),o("Step",{attrs:{title:"父元素有边框",content:"父元素有边框时百分比定位值的计算",status:"wait"},nativeOn:{click:function(i){i.stopPropagation(),t.toTop("#position-absolute-1-1",30)}}})],1)],1),t._v(" "),o("Step",{attrs:{title:"绝对定位元素的百分比宽高",content:"分析绝对定位元素设置的宽高为百分比时的计算",status:"wait"},nativeOn:{click:function(i){t.toTop("#position-absolute-2",30)}}})],1)],1),t._v(" "),o("div",{staticClass:"px-1"},[o("div",{staticClass:"py-3 text-center"},[o("h1",[o("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" 详解 CSS 绝对定位")],1),t._v(" "),o("p",{staticClass:"pt-1"},[t._v("进一步分析 CSS 绝对定位的相关问题")])]),t._v(" "),o("h3",{staticClass:"ml-1",attrs:{id:"position-absolute-basis"}},[o("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 基本定义和用法")],1),t._v(" "),o("Divider"),t._v(" "),o("p",[t._v("在 "),o("code",[t._v("CSS")]),t._v(" 中，"),o("code",[t._v("position")]),t._v(" 属性指定一个元素（静态的，相对的，绝对或固定，以及粘性定位）的定位方法的类型。")]),t._v(" "),o("p",[t._v("当设置 "),o("code",[t._v("position")]),t._v(" 属性的值为 "),o("code",[t._v("absolute")]),t._v(" 时，生成绝对定位的元素，将该元素从文档流中删除，原来的占位不再存在，并相对于 "),o("code",[t._v("static")]),t._v(' 定位以外的第一个父元素进行定位。元素的位置通过 "left", "top", "right" 以及 "bottom" 属性进行规定。')]),t._v(" "),o("ul",{staticClass:"ml-2 mb-1",staticStyle:{"list-style-position":"inside"}},[o("li",[t._v("如果这个父元素是块级元素，包含块则设置为该元素的 "),o("code",[t._v("border-box")]),t._v("。")]),t._v(" "),o("li",[t._v("如果这个父元素是行内元素，包含块则设置为该父元素元素的内容边界。")]),t._v(" "),o("li",[t._v("如果元素没有已定位的父元素，那么它的位置相对于 "),o("code",[t._v("<html>")]),t._v("。")])]),t._v(" "),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[o("code",{staticClass:"css"},[t._v(".box {\n    position: relative;\n    margin: 0 auto;\n    padding: 10px;\n    width: 300px;\n    height: 200px;\n    background: rgb(66, 98, 104);\n}\n.box-item {\n    position: absolute;\n    top: 50px;\n    left: 50px;\n    width: 100px;\n    height: 100px;\n    background: rgb(65, 116, 126);\n}")])]),t._v(" "),o("div",{staticStyle:{position:"relative",margin:"0 auto",padding:"10px",width:"300px",height:"200px",background:"rgb(66, 98, 104)",border:"10px solid rgb(117, 141, 145)"}},[t._v("\n                我是块级元素。\n                "),o("div",{staticStyle:{position:"absolute",top:"50px",left:"50px",width:"100px",height:"100px",background:"rgb(65, 116, 126)"}},[t._v("您可以打开开发者工具对我进行调试。比如取消父元素内边界，查看绝对定位元素的位置变化。")])]),t._v(" "),o("h3",{staticClass:"ml-1 mt-1",attrs:{id:"position-absolute-0"}},[o("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 有无定位值的区别")],1),t._v(" "),o("Divider"),t._v(" "),o("p",[o("code",[t._v("position")]),t._v(" 为 "),o("code",[t._v("absolute")]),t._v(" 的元素如果没有设置 "),o("code",[t._v("left")]),t._v(", "),o("code",[t._v("top")]),t._v(" 等值与 "),o("code",[t._v("left:0; top:0;")]),t._v(" 的的效果一样吗？")]),t._v(" "),o("p",[t._v("答案是不一样的，一个没有设置 "),o("code",[t._v("left")]),t._v(" 和 "),o("code",[t._v("right")]),t._v(" 值的绝对定位的元素就像是一个行内块元素，其表现得依旧在 "),o("code",[t._v("DOM tree")]),t._v(" 中，对 "),o("code",[t._v("margin")]),t._v(" 等属性敏感，但是其实际宽高已经丢失，如果没有设置高度，则其高度由其中的内容决定。")]),t._v(" "),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[o("code",{staticClass:"css"},[t._v(".box {\n    position: relative;\n    margin: 0 auto;\n    width: 200px;\n    height: 200px;\n    background: rgb(66, 98, 104);\n}\n.container {\n    margin: 0 auto;\n    width: 100px;\n    height: 100px;\n    background: rgb(68, 155, 172);\n}\n.box-item {\n    position: absolute;\n    width: 20%;\n    height:20%;\n    background: rgb(65, 116, 126);\n}")])]),t._v(" "),o("div",{staticStyle:{position:"relative",margin:"0 auto",width:"200px",height:"200px",background:"rgb(66, 98, 104)"}},[o("div",{staticStyle:{margin:"0 auto",width:"100px",height:"100px",background:"rgb(68, 155, 172)"}},[o("div",{staticStyle:{position:"absolute",width:"20%",height:"20%",background:"rgb(65, 116, 126)"}})])]),t._v(" "),o("p",{staticClass:"mt-1"},[t._v("对于设置了 "),o("code",[t._v("left:0; top:0;")]),t._v(" 的绝对定位的元素，这个元素将会从 DOM 树中脱离，独立于文档流，然后会根据相对于 "),o("code",[t._v("static")]),t._v(" 定位以外的第一个父元素进行定位。")]),t._v(" "),o("p",[t._v("所以没有定位值的 "),o("code",[t._v("absolute")]),t._v(" 元素可以说是个更加变态(没有实际宽度)的 "),o("code",[t._v("float")]),t._v(" 元素(实际占据高度为 0)，所以浮动元素干的某些事情绝对定位元素也能做到。")]),t._v(" "),o("h3",{staticClass:"ml-1",attrs:{id:"position-absolute-1"}},[o("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 绝对定位元素的百分比定位")],1),t._v(" "),o("Divider"),t._v(" "),o("p",[o("code",[t._v("CSS")]),t._v(" 设置绝对定位后 "),o("code",[t._v("top,bottom")]),t._v(" 设置百分比定位是按父元素的高度来计算的，同样 "),o("code",[t._v("left,right")]),t._v(" 设置百分比定位是按父元素的宽度度来计算的。")]),t._v(" "),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[o("code",{staticClass:"css"},[t._v(".box {\n    position: relative;\n    margin: 0 auto;\n    width: 300px;\n    height: 200px;\n    background: rgb(66, 98, 104);\n}\n.box-item {\n    position: absolute;\n    top: 10%;\n    left: 10%;\n    width: 100px;\n    height: 100px;\n    background: rgb(65, 116, 126);\n}")])]),t._v(" "),o("div",{staticStyle:{position:"relative",margin:"0 auto",width:"300px",height:"200px",background:"rgb(66, 98, 104)"}},[o("div",{staticStyle:{position:"absolute",top:"10%",left:"10%",width:"100px",height:"100px",background:"rgb(65, 116, 126)"}},[t._v("您可以打开开发者工具对我进行查看。")])]),t._v(" "),o("h3",{staticClass:"ml-1 mt-1",attrs:{id:"position-absolute-1-0"}},[o("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 父元素有内边界")],1),t._v(" "),o("Divider"),t._v(" "),o("p",[t._v("如果父元素设置有 padding 值，则子元素定位 "),o("code",[t._v("top,bottom")]),t._v(" 设置百分比定位是按父元素的高度 + 垂直内边界来计算的，同样 "),o("code",[t._v("left,right")]),t._v(" 设置百分比定位是按父元素的宽度 + 水平内边界来计算的。")]),t._v(" "),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[o("code",{staticClass:"css"},[t._v("/* box-sizing: content-box; */\n.box {\n    position: relative;\n    margin: 0 auto;\n    padding: 10px 20px;\n    width: 200px;\n    height: 200px;\n    background: rgb(66, 98, 104);\n}\n.box-item {\n    position: absolute;\n    top: 10%;\n    left: 10%;\n    width: 100px;\n    height: 100px;\n    background: rgb(65, 116, 126);\n}")])]),t._v(" "),o("div",{staticStyle:{position:"relative",margin:"0 auto",padding:"10px 20px",width:"200px",height:"200px",background:"rgb(66, 98, 104)"}},[o("div",{staticStyle:{position:"absolute",top:"10%",left:"10%",width:"100px",height:"100px",background:"rgb(65, 116, 126)"}},[t._v("您可以打开开发者工具对我进行查看。")])]),t._v(" "),o("p",{staticClass:"mt-1 text-warn"},[t._v("当 "),o("code",[t._v("box-sizing: border-box;")]),t._v(" 时，其计算与内边界无关。")]),t._v(" "),o("h3",{staticClass:"ml-1",attrs:{id:"position-absolute-1-1"}},[o("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 父元素有边框")],1),t._v(" "),o("Divider"),t._v(" "),o("p",[t._v("如果父元素设置有 border 值，则子元素定位设置的百分比定位值的计算与边框无关。")]),t._v(" "),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[o("code",{staticClass:"css"},[t._v("/* box-sizing: content-box; */\n.box {\n    position: relative;\n    margin: 0 auto;\n    width: 200px;\n    height: 200px;\n    background: rgb(66, 98, 104);\n    border: 10px solid rgb(117, 141, 145);\n}\n.box-item {\n    position: absolute;\n    top: 10%;\n    left: 10%;\n    width: 100px;\n    height: 100px;\n    background: rgb(65, 116, 126);\n}")])]),t._v(" "),o("div",{staticStyle:{position:"relative",margin:"0 auto",width:"200px",height:"200px",background:"rgb(66, 98, 104)",border:"10px solid rgb(117, 141, 145)"}},[o("div",{staticStyle:{position:"absolute",top:"10%",left:"10%",width:"100px",height:"100px",background:"rgb(65, 116, 126)"}},[t._v("您可以打开开发者工具对我进行查看。")])]),t._v(" "),o("p",{staticClass:"mt-1 text-warn"},[t._v("当 "),o("code",[t._v("box-sizing: border-box;")]),t._v(" 时，如果父元素设置有 border 值，则子元素定位 "),o("code",[t._v("top,bottom")]),t._v(" 设置百分比定位是按父元素的高度 - 垂直边框来计算的，同样 "),o("code",[t._v("left,right")]),t._v(" 设置百分比定位是按父元素的宽度 - 水平边框来计算的。")]),t._v(" "),o("h3",{attrs:{id:"position-absolute-2"}},[o("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 绝对定位元素的百分比宽高")],1),t._v(" "),o("Divider"),t._v(" "),o("p",[t._v("绝对定位元素的百分比宽高是相对于其最近的父级别定位元素的 "),o("code",[t._v("padding-box")]),t._v(" 的大小来计算的。")]),t._v(" "),o("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[o("code",{staticClass:"css"},[t._v("/* box-sizing: content-box; */\n.box {\n    position: relative;\n    margin: 0 auto;\n    padding: 20px;\n    width: 200px;\n    height: 200px;\n    background: rgb(66, 98, 104);\n    border: 10px solid rgb(117, 141, 145);\n}\n.container {\n    margin: 0 auto;\n    width: 100px;\n    height: 100px;\n    background: rgb(68, 155, 172);\n}\n.box-item {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 20%;\n    height:20%;\n    background: rgb(65, 116, 126);\n}")])]),t._v(" "),o("div",{staticStyle:{position:"relative",margin:"0 auto",padding:"20px",width:"200px",height:"200px",background:"rgb(66, 98, 104)",border:"10px solid rgb(117, 141, 145)"}},[o("div",{staticStyle:{margin:"0 auto",width:"100px",height:"100px",background:"rgb(68, 155, 172)"}},[o("div",{staticStyle:{position:"absolute",top:"0",left:"0",width:"20%",height:"20%",background:"rgb(65, 116, 126)"}})])]),t._v(" "),o("p",{staticClass:"mt-1 text-warn"},[t._v("当 box-sizing: border-box; 时，依然遵循上面的原则，所以计算绝对定位元素的百分比宽高时，应由 "),o("code",[t._v("height - border")]),t._v(" 作为基础。")]),t._v(" "),o("FooterDivider")],1)])},e=[];n._withStripped=!0,o.d(i,"a",function(){return n}),o.d(i,"b",function(){return e})}}]);