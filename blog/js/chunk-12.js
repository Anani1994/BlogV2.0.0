(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{305:function(t,v,l){"use strict";l.r(v);var _=l(404),i=l(352);for(var s in i)"default"!==s&&function(t){l.d(v,t,function(){return i[t]})}(s);l(429);var a=l(0),n=Object(a.a)(i.default,_.a,_.b,!1,null,"5aa1e293",null);n.options.__file="src\\views\\articles\\frontend\\JS\\JS-03.vue",v.default=n.exports},350:function(t,v,l){},351:function(t,v,l){"use strict";Object.defineProperty(v,"__esModule",{value:!0}),v.default={data:function(){return{toTop:this.$util.toTop}}}},352:function(t,v,l){"use strict";l.r(v);var _=l(351),i=l.n(_);for(var s in _)"default"!==s&&function(t){l.d(v,t,function(){return _[t]})}(s);v.default=i.a},404:function(t,v,l){"use strict";var _=function(){var t=this,v=t.$createElement,l=t._self._c||v;return l("BoWen",[l("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[l("Steps",{attrs:{direction:"vertical"}},[l("Step",{attrs:{title:"一元操作符",content:"只能操作一个值的操作符",status:"wait"},nativeOn:{click:function(v){t.toTop("#JS-03-1",30)}}}),t._v(" "),l("Step",{attrs:{title:"位操作符",content:"按内存中表示数值的位来操作数值"},nativeOn:{click:function(v){t.toTop("#JS-03-2",30)}}}),t._v(" "),l("Step",{attrs:{title:"Boolean 操作符",content:"Boolean 操作符"},nativeOn:{click:function(v){t.toTop("#JS-03-3",30)}}})],1)],1),t._v(" "),l("div",{staticClass:"px-1"},[l("div",{staticClass:"py-3 text-center"},[l("h1",[l("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" JS-操作符 (一)")],1),t._v(" "),l("p",{staticClass:"pt-1"},[t._v("介绍 JavaScript 的基本操作符")])]),t._v(" "),l("h3",{staticClass:"ml-1",attrs:{id:"JS-03-1"}},[l("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 一元操作符")],1),t._v(" "),l("Divider"),t._v(" "),l("p",[t._v("只能操作一个值的操作符叫做一元操作符。")]),t._v(" "),l("ul",{staticClass:"ml-2"},[l("li",[t._v("递增和递减操作符:\n                    "),l("p",[t._v("递增和递减操作符拥有前置型和后置型两个版本，前置型位于要操作变量之前，后置型位于要操作的变量之后。")]),t._v(" "),l("p",{staticClass:"text-success"},[t._v("执行前置递增和前置递减操作时，变量的值都是在语句被求值以前改变的。（在计算机科学领域，这种情况通常被叫做副效应。）")]),t._v(" "),l("p",[t._v("前置递增和前置递减与执行语句的优先级相等。所以整个语句会从左至右被求值。")]),t._v(" "),l("p",[t._v("后置型递增和后置型递减操作符是在包含它们的语句被求值之后才执行的。")]),t._v(" "),l("pre",{directives:[{name:"highlight",rawName:"v-highlight"}]},[l("code",{staticClass:"js"},[t._v("//前置\nvar num = 5;\nconsole.log(++num);\nconsole.log(num);\n\n// 后置\nvar num = 5;\nconsole.log(num++);\nconsole.log(num);")])])])]),t._v(" "),l("p",[t._v("递减和递增操作符对任何值都有效，在应用于不同的值时，递增和递减操作符遵循以下规则：\n                "),l("ul",{staticClass:"ml-1"},[l("li",[t._v("在应用于一个包含有效数字字符的字符串时，先将其转换为数字值，再执行加减 1 的操作。字符串变量变成数值变量。")]),t._v(" "),l("li",[t._v("在应用于浮点数值时，执行加减 1的操作。")]),t._v(" "),l("li",[t._v("在应用于一个不包含有效数字字符的字符串时，将变量的值设置为 NaN。字符串变量变成数值变量。")]),t._v(" "),l("li",[t._v("在应用于布尔值 false 时，先将其转换为 0再执行加减 1的操作。布尔值变量变成数值变量。")]),t._v(" "),l("li",[t._v("在应用于布尔值 true 时，先将其转换为 1再执行加减 1的操作。布尔值变量变成数值变量。")]),t._v(" "),l("li",[t._v("在应用于对象时，先调用对象的 valueOf() 方法以取得一个可供操作的值。然后对该值应用前述规则。如果结果是 NaN，则在调用 toString() 方法后再应用前述规则。对象变量变成数值变量。")])])]),t._v(" "),l("p",[t._v("在对非数值应用一元加操作符时，该操作符会像Number()转型函数一样对这个值执行转换。")]),t._v(" "),l("p",[t._v("在将一元减操作符应用于数值时，该值会变成负数，。而当应用于非数值时， 一元减操作符遵循与一元加操作符相同的规则，最后再将得到的数值转换为负数。")]),t._v(" "),l("h3",{staticClass:"ml-1",attrs:{id:"JS-03-2"}},[l("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 位操作符")],1),t._v(" "),l("Divider"),t._v(" "),l("P",[t._v("位操作符并不直接操作 64 位的值。而是先将 64 位的值转换成 32 位的整数，然后执行操作，最后再将结果转换回 64 位。")]),t._v(" "),l("p",[l("span",{staticClass:"text-info"},[t._v("对于有符号的整数，从右往左数，第 32 位用于表示数值的符号：0 表示正数，1 表示负数。")]),t._v("这个表示符号的位叫做符号位，符号位的值决定了其他位数值的格式。")]),t._v(" "),l("p",[t._v("正数以纯二进制格式存储，负数同样以二进制码存储，但使用的格式是二进制补码。")]),t._v(" "),l("p",{staticClass:"text-warn"},[t._v("值得注意的是：在处理有 符号整数时，是不能访问位 31的。")]),t._v(" "),l("p",{staticClass:"text-warn"},[t._v("在对特殊的 NaN 和 Infinity 值应用位操作时，这两个值都会被当成 0 来处理。")]),t._v(" "),l("p",{staticClass:"text-muted"},[t._v("对非数值应用位操作符，会先使用 Number() 函数将该值转换为一个数值（自动完成），然后再应用位操作。得到的结果将是一个数值。")]),t._v(" "),l("p",[t._v("位操作符包括以下几种：")]),t._v(" "),l("p",[l("ul",{staticClass:"ml-1"},[l("li",[t._v("按位非操作符\n                        "),l("ul",[l("li",[t._v("按位非操作符由一个波浪线（~）表示，执行按位非的结果就是返回数值的反码。")]),t._v(" "),l("li",[t._v("按位非操作的本质：操作数的负值减 1。")])])])])]),t._v(" "),l("p",[l("ul",{staticClass:"ml-1"},[l("li",[t._v("按位与操作符\n                        "),l("ul",[l("li",[t._v("按位与操作符由一个和号字符（&）表示，它有两个操作符数。")]),t._v(" "),l("li",[t._v("按位与操作只在两个数值的对应位都是 1 时才返回 1，任何一位是 0，结果都是 0。")])])])])]),t._v(" "),l("p",[l("ul",{staticClass:"ml-1"},[l("li",[t._v("按位或操作符\n                        "),l("ul",[l("li",[t._v("按位或操作符由一个竖线符号（|）表示，同样也有两个操作数。")]),t._v(" "),l("li",[t._v(" 按位或操作在有一个位是 1 的情况下就返回 1， 而只有在两个位都是 0 的情况下才返回 0。")])])])])]),t._v(" "),l("p",[l("ul",{staticClass:"ml-1"},[l("li",[t._v("按位异或操作符\n                        "),l("ul",[l("li",[t._v("按位异或操作符由一个插入符号（^）表示，也有两个操作数。")]),t._v(" "),l("li",[t._v("两个数值对应位上只有一个 1 时才返回 1。")])])])])]),t._v(" "),l("p",[l("ul",{staticClass:"ml-1"},[l("li",[t._v("左移操作符\n                        "),l("ul",[l("li",[t._v("左移操作符由两个小于号（<<）表示，这个操作符会将数值的所有位向左移动指定的位数。")]),t._v(" "),l("li",{staticClass:"text-warn"},[t._v("注意，左移不会影响操作数的符号位。")])])])])]),t._v(" "),l("p",[l("ul",{staticClass:"ml-1"},[l("li",[t._v("有符号的右移操作符\n                        "),l("ul",[l("li",[t._v("有符号的右移操作符由两个大于号（>>）表示，这个操作符会将数值向右移动，但保留符号位（即 正负号标记）。")])])])])]),t._v(" "),l("p",[l("ul",{staticClass:"ml-1"},[l("li",[t._v("无符号右移操作符\n                        "),l("ul",[l("li",[t._v("无符号右移操作符由3个大于号（>>>）表示，这个操作符会将数值的所有32位都向右移动。对正 数来说，无符号右移的结果与有符号右移相同。")])])])])]),t._v(" "),l("h3",{staticClass:"ml-1",attrs:{id:"JS-03-3"}},[l("Icon",{attrs:{type:"logo-buffer"}}),t._v(" Boolean 操作符")],1),t._v(" "),l("Divider"),t._v(" "),l("p",[t._v("Boolean 操作符一共有三个，分别是非、与、或。")]),t._v(" "),l("p",[t._v("在有一个操作数不是布尔值的情况 下，逻辑与和逻辑或操作就不一定返回布尔值")]),t._v(" "),l("p",[t._v("逻辑非操作符可用于 ECMAScript 中的任何值，无论这个值是什么数据类型，这个操作符都会返回一个布尔值。")]),t._v(" "),l("p",[l("strong",[t._v("逻辑非操作符")]),t._v("：由一个叹号（！）表示，可以应用于ECMAScript中的任何值")]),t._v(" "),l("p",[l("ul",{staticClass:"ml-1"},[l("li",[t._v("如果操作数是一个对象，返回 false；")]),t._v(" "),l("li",[t._v("如果操作数是一个对象，返回 false；")]),t._v(" "),l("li",[t._v("如果操作数是 null，返回 true；")]),t._v(" "),l("li",[t._v("如果操作数是 undefined，返回 true。")]),t._v(" "),l("li",[t._v("如果操作数是 NaN，返回 true；")]),t._v(" "),l("li",[t._v("如果操作数是任意非 0 数值（包括Infinity） ，返回 false；")]),t._v(" "),l("li",[t._v("如果操作数是数值 0，返回 true；")]),t._v(" "),l("li",[t._v("如果操作数是一个非空字符串，返回 false；")]),t._v(" "),l("li",[t._v(" 如果操作数是一个空字符串，返回 true；")])])]),t._v(" "),l("p",{staticClass:"text-info"},[t._v("同时使用两个逻辑非操作符，实际上就会模拟 Boolean() 转型函数的行为。")]),t._v(" "),l("p",[l("strong",[t._v("逻辑与")]),t._v("：逻辑与操作符由两个和号（&&）表示，有两个操作数。")]),t._v(" "),l("p",[t._v("逻辑与操作可以应用于任何类型的操作数，而不仅仅是布尔值。")]),t._v(" "),l("p",[l("ul",{staticClass:"ml-1"},[l("li",[t._v("如果第一个操作数是对象，则返回第二个操作数；")]),t._v(" "),l("li",[t._v("如果第二个操作数是对象，则只有在第一个操作数的求值结果为 true 的情况下才会返回该对象；")]),t._v(" "),l("li",[t._v("如果两个操作数都是对象，则返回第二个操作数；")]),t._v(" "),l("li",[t._v("如果有一个操作数是 null，则返回 null；")]),t._v(" "),l("li",[t._v("如果有一个操作数是 NaN，则返回 NaN；")]),t._v(" "),l("li",[t._v("如果有一个操作数是 undefined，则返回 undefined。")])])]),t._v(" "),l("p",{staticClass:"text-warn"},[t._v("注意不能在逻辑与操作中使用未定义的值，否则会发生错误。")]),t._v(" "),l("p",{staticClass:"text-success"},[t._v("在使用逻辑与操作符时要始终铭记它是一个短路操作符，所以当第一个值为 false 时，不会再对第二位求值，直接返回 false。")]),t._v(" "),l("p",[l("strong",[t._v("逻辑或操作符")]),t._v("：由两个竖线符号（||）表示，有两个操作数。")]),t._v(" "),l("p",[l("ul",{staticClass:"ml-1"},[l("li",[t._v("如果第一个操作数是对象，则返回第一个操作数；")]),t._v(" "),l("li",[t._v("如果第一个操作数的求值结果为 false，则返回第二个操作数；")]),t._v(" "),l("li",[t._v("如果两个操作数都是对象，则返回第一个操作数；")]),t._v(" "),l("li",[t._v("如果两个操作数都是 null，则返回 null；")]),t._v(" "),l("li",[t._v(" 如果两个操作数都是 NaN，则返回 NaN；")]),t._v(" "),l("li",[t._v("如果两个操作数都是 undefined，则返回 undefined。")])])]),t._v(" "),l("p",[t._v("与逻辑与操作符相似，逻辑或操作符也是短路操作符。如果第一个操作数的求值结果为 true，就不会对第二个操作数求值。")]),t._v(" "),l("p",{staticClass:"text-right"},[t._v("参考资料：JavaScript 高级程序设计（第三版）")]),t._v(" "),l("FooterDivider")],1)])},i=[];_._withStripped=!0,l.d(v,"a",function(){return _}),l.d(v,"b",function(){return i})},429:function(t,v,l){"use strict";var _=l(350);l.n(_).a}}]);