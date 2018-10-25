(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{312:function(t,s,a){"use strict";a.r(s);var e=a(435),i=a(375);for(var n in i)"default"!==n&&function(t){a.d(s,t,function(){return i[t]})}(n);var c=a(0),o=Object(c.a)(i.default,e.a,e.b,!1,null,null,null);o.options.__file="src\\views\\articles\\frontend\\JS\\JS-07.vue",s.default=o.exports},374:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0}),s.default={data:function(){return{toTop:this.$util.toTop}}}},375:function(t,s,a){"use strict";a.r(s);var e=a(374),i=a.n(e);for(var n in e)"default"!==n&&function(t){a.d(s,t,function(){return e[t]})}(n);s.default=i.a},435:function(t,s,a){"use strict";var e=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("BoWen",[e("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[e("Steps",{attrs:{direction:"vertical"}},[e("Step",{attrs:{title:"基本概念",content:"数据类型的基本概念",status:"wait"},nativeOn:{click:function(s){t.toTop("#JS-07-1",30)}}}),e("Step",{attrs:{title:"动态的属性",content:"动态的属性",status:"wait"},nativeOn:{click:function(s){t.toTop("#JS-07-2",30)}}}),e("Step",{attrs:{title:"赋值变量值",content:"赋值变量值",status:"wait"},nativeOn:{click:function(s){t.toTop("#JS-07-3",30)}}}),e("Step",{attrs:{title:"传递参数",content:"传递参数",status:"wait"},nativeOn:{click:function(s){t.toTop("#JS-07-4",30)}}}),e("Step",{attrs:{title:"检测类型",content:"检测类型",status:"wait"},nativeOn:{click:function(s){t.toTop("#JS-07-5",30)}}})],1)],1),e("div",{staticClass:"px-1"},[e("div",{staticClass:"py-3 text-center"},[e("h1",[e("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" JS-基本类型和引用类型的值")],1),e("p",{staticClass:"pt-1"},[t._v("ECMAScript变量可能包含两种不同数据类型的值：基本类型值和引用类型值")])]),e("h3",{staticClass:"ml-1",attrs:{id:"JS-07-1"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 基本概念")],1),e("Divider"),e("p",[t._v("ECMAScript 变量可能包含两种不同数据类型的值：基本类型值和引用类型值。")]),e("p",[t._v("基本数据类型：Undefined、Null、Boolean、Number 和 String。这 5 种基本数据类型是按值访问的，因为可以操作保存在变量中的实际的值。")]),e("p",[t._v("引用类型的值是保存在内存中的对象，JavaScript 不允许直接访问内存中的位置，也就是说不能直接操作对象的内存空间。")]),e("p",{staticClass:"text-success"},[t._v("在操作对象时，实际上是在操作对象的引用而不是实际的对象，引用类型的值是按引用访问的。"),e("span",{staticClass:"text-muted"},[t._v("这种说法不严谨，因为当复制保存着对象的某个变量时，操作的是对象的引用。但在为对象添加属性时，操作的是实际的对象。")])]),e("h3",{staticClass:"ml-1",attrs:{id:"JS-07-2"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 动态的属性")],1),e("Divider"),e("p",[t._v("定义基本类型值和引用类型值得方式是类似的：创建一个变量并为该变量赋值。")]),e("p",{staticClass:"text-warn"},[t._v("我们可以给引用类型的值添加属性和方法，但是不能给基本类型的值添加属性，尽管这样做不会导致任何错误。")]),e("h3",{staticClass:"ml-1",attrs:{id:"JS-07-3"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 赋值变量值")],1),e("Divider"),e("p",[t._v("如果从一个变量向另一个变量复制基本类型的值，会在变量对象上创建一个新值，然后把该值复制到为新变量分配的位置上。")]),e("p",[t._v("当从一个变量向另一个变量复制引用类型的值时，同样也会将存储在变量对象中的值复制一份放到为新变量分配的空间中。"),e("span",{staticClass:"text-success"},[t._v("不同的是，这个值的副本实际上是一个指针，而这个指针指向存储在堆中的一个对象。复制操作结束后，两个变量实际上将引用同一个对象。因此，改变其中一个变量，就会影响另一个变量。")])]),e("img",{staticClass:"d-block ml-2 mb-1",staticStyle:{height:"200px"},attrs:{src:a(464),alt:"引用类型的复制"}}),e("h3",{staticClass:"ml-1",attrs:{id:"JS-07-4"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 传递参数")],1),e("Divider"),e("p",[e("span",{staticClass:"text-success"},[t._v("ECMAScript 中所有函数的参数都是按值传递的。")]),e("span",[t._v("也就是说，把函数外部的值复制给函数内部的参数，就和把值从一个变量复制到另一个变量一样。")])]),e("p",[t._v("基本类型值的传递如同基本类型变量的复制一样，而 引用类型值的传递，则如同引用类型变量的复制一样。")]),e("p",[t._v("在向参数传递基本类型的值时，被传递的值会被复制给一个局部变量（即命名参数，或者用 ECMAScript 的概念来说，就是 arguments 对象中的一个元素）。")]),e("p",{staticClass:"text-info"},[t._v("在向参数传递引用类型的值时，会把这个值在内存中的地址复制给一个局部变量，因此这个局部变量的变化会反映在函数的外部。")]),e("p",{staticClass:"text-success"},[t._v("参数实际上是函数的局部变量。")]),e("h3",{staticClass:"ml-1",attrs:{id:"JS-07-5"}},[e("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 检测类型")],1),e("Divider"),e("p",[t._v("要检测一个变量是不是基本数据类型？那么 typeof 操作符是最佳的选择。")]),e("p",[t._v("要想知道一个变量是什么类型的对象？ECMAScript 提供了 instanceof 操作符，其语法如右所示 "),e("pre",{staticClass:"custom-pre"},[t._v("result = variable instanceof constructor")]),t._v("。")]),e("p",[t._v("如果变量是给定引用类型（根据它的原型链来识别）的实例，那么 instanceof 操作符就会返回 true。")]),e("p",[t._v("所有引用类型的值都是 Object 的实例，因此，在检测一个引用类型值和 Object 构造 函数时，instanceof 操作符始终会返回 true。")]),e("p",{staticClass:"text-warn"},[t._v('对正则表达式应用 typeof 会返回 "function"。在 IE 和 Firefox 中，对正则表达式应用 typeof 会返回 "object"。')]),e("p",{staticClass:"text-right"},[t._v("参考资料：JavaScript 高级程序设计（第三版）")]),e("FooterDivider")],1)])},i=[];e._withStripped=!0,a.d(s,"a",function(){return e}),a.d(s,"b",function(){return i})},464:function(t,s,a){t.exports=a.p+"blog/images/img-JS-07-0.jpg"}}]);