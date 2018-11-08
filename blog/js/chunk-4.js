(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{295:function(t,i,s){"use strict";s.r(i);var r=s(472),a=s(343);for(var l in a)"default"!==l&&function(t){s.d(i,t,function(){return a[t]})}(l);var e=s(0),n=Object(e.a)(a.default,r.a,r.b,!1,null,null,null);n.options.__file="src\\views\\articles\\frontend\\CSS\\css3-grid.vue",i.default=n.exports},342:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{toTop:this.$util.toTop,gridContainerPorp:["display","grid-template-rows","grid-template-columns","grid-template-areas","grid-template","grid-column-gap","grid-row-gap","grid-gap","justify-items","align-items","justify-content","align-content","grid-auto-columns","grid-auto-rows","grid-auto-flow","grid"],gridItemsPorp:["grid-column-start","grid-column-end","grid-row-start","grid-row-end","grid-column","grid-row","grid-area","justify-self","align-self"]}}}},343:function(t,i,s){"use strict";s.r(i);var r=s(342),a=s.n(r);for(var l in r)"default"!==l&&function(t){s.d(i,t,function(){return r[t]})}(l);i.default=a.a},426:function(t,i,s){t.exports=s.p+"blog/images/img-css-grid-useable.png"},472:function(t,i,s){"use strict";var r=function(){var t=this,i=t.$createElement,r=t._self._c||i;return r("BoWen",[r("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[r("Steps",{attrs:{direction:"vertical"}},[r("Step",{attrs:{title:"前言",content:"前言",status:"wait"},nativeOn:{click:function(i){t.toTop("#css3-grid-1",30)}}}),r("Step",{attrs:{title:"基础与支持",content:"基础与支持",status:"wait"},nativeOn:{click:function(i){t.toTop("#css3-grid-2",30)}}}),r("Step",{attrs:{title:"重要术语",content:"重要术语",status:"wait"},nativeOn:{click:function(i){t.toTop("#css3-grid-3",30)}}}),r("Step",{attrs:{title:"Grid(网格) 属性目录",content:"Grid(网格) 属性目录",status:"wait"},nativeOn:{click:function(i){t.toTop("#css3-grid-4",30)}}}),r("Step",{attrs:{title:"网格项(Grid Items) 属性",content:"网格项(Grid Items) 属性",status:"wait"},nativeOn:{click:function(i){t.toTop("#css3-grid-5",30)}}}),r("Step",{attrs:{title:"详解网格容器属性",content:"详解网格容器属性",status:"wait"},nativeOn:{click:function(i){t.toTop("#css3-grid-6",30)}}}),r("Step",{attrs:{title:"详解网格项属性",content:"详解网格项属性",status:"wait"},nativeOn:{click:function(i){t.toTop("#css3-grid-7",30)}}})],1)],1),r("div",{staticClass:"px-1"},[r("div",{staticClass:"py-3 text-center"},[r("h1",[r("Icon",{attrs:{type:"ios-book-outline"}}),t._v(" CSS Grid(网格) 布局")],1),r("p",{staticClass:"pt-1"},[t._v(" CSS Grid(网格) 布局（又称为 “Grid(网格)” ）")])]),r("h3",{staticClass:"ml-1",attrs:{id:"css3-grid-1"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 前言")],1),r("Divider"),r("p",[t._v("起初我们用表格（table），然后是浮动（float），再是定位（postion）和 内嵌块（inline-block），但是所有这些方法本质上都是只是 hack 而已，并且遗漏了很多重要的功能（例如垂直居中）。")]),r("p",[t._v("很多人都认为 Flexbox 为我们解决了所有设计相关的问题。然而，Flexbox 并没有提供比浮动更好的网格系统，而 Grid(网格) 布局是第一个专门为解决布局问题而创建的 CSS 模块，我们可以不需要再 hack 页面布局样式。")]),r("p",[t._v("首先我们来看一个例子，下面通过弹性布局，并且允许 Flex 项目进行包裹（这样会创建新的行，每一行都是一个新的Flex容器）。")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e \n<div class="flex-container">\n    <div>item 1</div>\n    <div>item 2</div>\n    <div>item 3</div>\n    <div>item 4</div>\n    <div>item 5</div>\n    <div>item 6</div>\n    <div>item 7</div>\n</div>')])]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"css"},[t._v("/* css */ \n* {\n    box-sizing: border-box;\n}\n \nbody {\n    margin: 60px auto;\n    max-width: 662px;\n    color: #fff;\n    border: 1px solid #000;\n}\n \n.flex-container {\n    display: flex;\n    flex-wrap: wrap;\n}\n \n.flex-container > div {\n    margin: 10px;\n    padding: 10px;\n    /* width: 200px; */\n    height: 50px;\n    flex: 1 1 200px;\n    border: 5px solid rgb(187, 176, 177);\n    background-color: rgb(106, 205, 241);\n}")])]),r("p",[t._v("空间分布是在行中发生的，所以取决于最后一行多少项，它们有时不会与上面的Flex项对齐。例子中最后一项的宽度横跨了三列，也许再某些情况这样正好，然而往往这并不是我们所需要的，至少在我现在的项目中，这不是我想要的结果。")]),r("p",[t._v("通过网格布局，最后一行中的项目始终保持在它们的列中。")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"html"},[t._v('\x3c!-- html --\x3e \n<div class="grid-container">\n    <div>item 1</div>\n    <div>item 2</div>\n    <div>item 3</div>\n    <div>item 4</div>\n    <div>item 5</div>\n    <div>item 6</div>\n    <div>item 7</div>\n</div>')])]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"css"},[t._v("/* css */ \n* {\n    box-sizing: border-box;\n}\n \nbody {\n    margin: 60px auto;\n    max-width: 662px;\n    color: #fff;\n    border: 1px solid #000;\n}\n \n.grid-container {\n    display: grid;\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n}\n \n.grid-container > div {\n    margin: 10px;\n    padding: 10px;\n    /* width: 200px; */\n    height: 50px;\n    border: 5px solid rgb(187, 176, 177);\n    background-color: rgb(106, 205, 241);\n}")])]),r("p",[t._v("在使用弹性布局时，必须针对 Flex 项目来设置 flex-grow、flex-shrink 和 flex-basis 属性来进行布局。")]),r("p",[t._v("传统的网格布局都是通过设置宽度来实现网格，就像 bootstrap3 中的 12 列网格一样，我们必须计算每一列的百分比大小，加上每个列之间间距的百分比大小。要创建跨多个列的项，需要将所有项的宽度加上用于分隔它们的边界宽度。")]),r("p",[t._v("而使用网格布局，我们不需要像网格添加任何的内容。")]),r("h3",{staticClass:"ml-1",attrs:{id:"css3-grid-2"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 基础与支持")],1),r("Divider"),r("p",[t._v("就像上面例子中所看到的那样，使用网格布局非常简单，首先用 display: grid 将容器元素定义为一个 grid(网格) 布局，使用  grid-template-columns 和 grid-template-rows 设置列和行的尺寸大小，然后通过 grid-column 和 grid-row 将其子元素放入这个 grid(网格) 中。")]),r("p",[t._v("与 flexbox 类似，网格项（grid items）的源顺序无关紧要。你的 CSS 可以以任何顺序放置它们，这使得使用 媒体查询（media queries）重新排列网格变得非常容易。")]),r("p",[t._v("时至今日（2018/10/9），各大主流浏览器都已经实现了对网格布局的支持。")]),r("img",{staticClass:"d-block ml-2 mb-1",staticStyle:{height:"200px"},attrs:{src:s(426),alt:"grid 兼容性"}}),r("p",[t._v("图片来源于 "),r("a",{attrs:{scr:"https://caniuse.com/"}},[t._v("https://caniuse.com/")])]),r("h3",{staticClass:"ml-1",attrs:{id:"css3-grid-3"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 重要术语")],1),r("Divider"),r("p",[r("strong",[t._v("网格容器(Grid Container)")]),t._v("：应用 display: grid 的元素。这是所有网格项（Grid Items）的直接父级元素。")]),r("p",[r("strong",[t._v("网格项(Grid Item)")]),t._v("：网格容器（Grid Container）的直接子元素。")]),r("p",[r("strong",[t._v("网格线(Grid Line)")]),t._v("：构成网格结构的分界线（从始到终）。（图？）")]),r("p",[r("strong",[t._v("网格轨道(Grid Track)")]),t._v("：两条相邻网格线之间的空间（一列或是一行）。")]),r("p",[r("strong",[t._v("网格单元格(Grid Cell)")]),t._v("：两个相邻的行和两个相邻的列网格线之间的空间。")]),r("p",[r("strong",[t._v("网格区域(Grid Area)")]),t._v("：4 条网格线包围的总空间。")]),r("h3",{staticClass:"ml-1",attrs:{id:"css3-grid-4"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" Grid(网格) 属性目录")],1),r("Divider"),r("ul",{staticClass:"ml-2"},t._l(t.gridContainerPorp,function(i,s){return r("li",{key:s},[t._v(t._s(i))])})),r("h3",{staticClass:"ml-1 mt-1",attrs:{id:"css3-grid-5"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 网格项(Grid Items) 属性目录")],1),r("Divider"),r("ul",{staticClass:"ml-2"},t._l(t.gridItemsPorp,function(i,s){return r("li",{key:s},[t._v(t._s(i))])})),r("h3",{staticClass:"ml-1 mt-1",attrs:{id:"css3-grid-6"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 详解网格容器属性")],1),r("Divider"),r("h4",{staticClass:"ml-2 mb-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" display 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("将元素定义为网格容器，并为其内容建立新的 网格格式上下文。")]),r("ul",{staticClass:"ml-2"},[t._v("可能的值："),r("li",[t._v("grid ：生成一个块级网格。")]),r("li",[t._v("inline-grid ：生成一个内联网格。")]),r("li",[t._v("subgrid ：如果你的网格容器本身是另一个网格的网格项（即嵌套网格），你可以使用这个属性来表示，它的行/列的大小继承自它的父级网格容器，而不是自己指定的。")])]),r("p",{staticClass:"text-warn"},[t._v("注意：在网格容器上使用 column，float，clear， vertical-align 不会产生任何效果。")])]),r("h4",{staticClass:"ml-2 mb-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" grid-template-columns / grid-template-rows 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("使用空格分隔的值列表，用来定义网格的列和行。这些值表示 网格轨道(Grid Track) 大小，它们之间的空格表示网格线。")]),r("ul",{staticClass:"ml-2"},[t._v("可能的值："),r("li",[t._v("<track-size>： 可以是长度值，百分比，或者等份网格容器中可用空间（使用 fr 单位）。")]),r("li",[t._v("<line-name>：你可以选择的任意名称。")])]),r("p",{staticClass:"text-info"},[t._v("当你在网格轨道(Grid Track) 值之间留出空格时，网格线会自动分配数字名称。")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"css"},[t._v(".container{ \n    grid-template-columns: [first] 40px [line2] 50px [line3] auto [col4-start] 50px [five] 40px [end];\n    grid-template-rows: [row1-start] 25% [row1-end] 100px [third-line] auto [last-line];\n}")])]),r("p",[t._v("你也可以明确的指定网格线名称，即 <line-name> 值。请注意网格线名称的括号语法。")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"css"},[t._v(".container{ \n    grid-template-columns: 40px 50px auto 50px 40px;\n    grid-template-rows: 25% 100px auto;\n}")])]),r("p",{staticClass:"text-info"},[t._v("一条网格线(Grid Line)可以有多个名称，多个名称使用空格隔开。")]),r("p",[t._v("如果你的定义包含多个重复值，则可以使用 repeat() 表示法来简化定义。")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"css"},[t._v(".container{ \n    grid-template-columns: 20px [col-start] 20px [col-start] 20px [col-start] 5%;\n}")])]),r("p",{staticClass:"text-info"},[t._v("fr 单元允许你用等分网格容器剩余可用空间来设置网格轨道(Grid Track) 的大小。")]),r("p",[t._v("如可用空间总量减去 50px 后，再给 fr 单元的值 3 等分。")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"css"},[t._v(".container{ \n    grid-template-columns: 1fr 50px 1fr 1fr;\n}")])])]),r("h4",{staticClass:"ml-2 mb-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" grid-template-areas 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("通过引用 grid-area 属性指定的 网格区域(Grid Area) 名称来定义网格模板。重复网格区域的名称导致内容跨越这些单元格。")]),r("ul",{staticClass:"ml-2"},[t._v("可能的值："),r("li",[t._v("&t;grid-area-name>：由网格项的 grid-area 指定的网格区域名称")]),r("li",[t._v(" .（点号） ：代表一个空的网格单元")]),r("li",[t._v("none：不定义网格区域")])])]),r("h4",{staticClass:"ml-2 mb-1 mt-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" grid-template 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("用于定义 grid-template-rows ，grid-template-columns ，grid-template-areas 缩写 (shorthand) 属性。")]),r("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[r("code",{staticClass:"css"},[t._v(".container{ \n    grid-template: none | subgrid | <grid-template-rows> / <grid-template-columns>;\n}")])])]),r("h4",{staticClass:"ml-2 mb-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" grid-column-gap / grid-row-gap 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("指定网格线(grid lines)的大小。你可以把它想象为设置列/行之间间距的宽度。")]),r("p",[t._v("值为长度值。")])]),r("h4",{staticClass:"ml-2 mb-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" grid-gap 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("grid-column-gap 和 grid-row-gap 的缩写语法。")]),r("p",[t._v("值为空格隔开的两个长度值。")]),r("p",{staticClass:"text-info"},[t._v("如果 grid-row-gap 没有定义，那么就会被设置为等同于 grid-column-gap 的值。")])]),r("h4",{staticClass:"ml-2 mb-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" justify-items 属性")],1),r("div",{staticClass:"ml-1"},[r("ul",{staticClass:"ml-2"},[t._v("可能的值："),r("li",[r("strong",[t._v("start")]),t._v("：将内容对齐到网格区域(grid area)的左侧")]),r("li",[r("strong",[t._v("end")]),t._v("：将内容对齐到网格区域的右侧")]),r("li",[r("strong",[t._v("center")]),t._v("：将内容对齐到网格区域的中间（水平居中）（有点类似 space-around）")]),r("li",[r("strong",[t._v("stretch")]),t._v("：填满网格区域宽度（默认值）")])]),r("p",[t._v("沿着行轴线(row axis) 对齐网格项内的内容。该值适用于容器内的所有网格项。")])]),r("h4",{staticClass:"ml-2 mb-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" align-items 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("沿着 列轴线(column axis) 对齐 网格项(grid items) 内的内容（相反的属性是 justify-items 沿着行轴线对齐）。该值适用于容器内的所有网格项。")]),r("ul",{staticClass:"ml-2"},[t._v("可能的值："),r("li",[r("strong",[t._v("start")]),t._v("：将内容对齐到网格区域(grid area)的顶部")]),r("li",[r("strong",[t._v("end")]),t._v("：将内容对齐到网格区域的底部")]),r("li",[r("strong",[t._v("center")]),t._v("：将内容对齐到网格区域的中间（垂直居中）")]),r("li",[r("strong",[t._v("stretch")]),t._v("：填满网格区域高度（默认值）")])])]),r("h4",{staticClass:"ml-2 mb-1 mt-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" justify-content 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("网格合计大小可能小于其网格容器大小。 如果你的所有网格项都使用像 px 这样的非灵活单位设置大小，在这种情况下，您可以设置网格容器内的网格的对齐方式。 此属性沿着 行轴线(row axis) 对齐网格。")]),r("ul",{staticClass:"ml-2"},[t._v("可能的值："),r("li",[r("strong",[t._v("start")]),t._v("：将网格对齐到 网格容器(grid container) 的左边")]),r("li",[r("strong",[t._v("end")]),t._v("：将网格对齐到 网格容器 的右边")]),r("li",[r("strong",[t._v("center")]),t._v("：将网格对齐到 网格容器 的中间（水平居中）")]),r("li",[r("strong",[t._v("stretch")]),t._v("：调整 网格项(grid items) 的宽度，允许该网格填充满整个 网格容器 的宽度")]),r("li",[r("strong",[t._v("space-around")]),t._v("：在每个网格项之间放置一个均匀的空间，左右两端放置一半的空间(有点像bootstrap3中栅格系统的col的边距处理)")]),r("li",[r("strong",[t._v("space-between")]),t._v("：在每个网格项之间放置一个均匀的空间，左右两端没有空间")]),r("li",[r("strong",[t._v("space-evenly")]),t._v("：在每个栅格项目之间放置一个均匀的空间，左右两端放置一个均匀的空间")])])]),r("h4",{staticClass:"ml-2 mb-1 mt-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" align-content 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("网格合计大小可能小于其 网格容器(grid container) 大小。 如果你的所有 网格项(grid items) 都使用像 px 这样的非灵活单位设置大小，在这种情况下，您可以设置网格容器内的网格的对齐方式。 此属性沿着 列轴线(column axis) 对齐网格。")]),r("ul",{staticClass:"ml-2"},[t._v("可能的值："),r("li",[r("strong",[t._v("start")]),t._v("：将网格对齐到 网格容器(grid container) 的顶部")]),r("li",[r("strong",[t._v("end")]),t._v("：将网格对齐到 网格容器 的底部")]),r("li",[r("strong",[t._v("center")]),t._v("：将网格对齐到 网格容器 的中间（垂直居中）")]),r("li",[r("strong",[t._v("stretch")]),t._v("：调整 网格项(grid items) 的高度，允许该网格填充满整个 网格容器 的高度")]),r("li",[r("strong",[t._v("space-around")]),t._v("：在每个网格项之间放置一个均匀的空间，上下两端放置一半的空间")]),r("li",[r("strong",[t._v("space-between")]),t._v("：在每个网格项之间放置一个均匀的空间，上下两端没有空间")]),r("li",[r("strong",[t._v("space-evenly")]),t._v("：在每个栅格项目之间放置一个均匀的空间，上下两端放置一个均匀的空间")])])]),r("h4",{staticClass:"ml-2 mb-1 mt-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v("grid-auto-columns / grid-auto-rows 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("指定任何自动生成的网格轨道(grid tracks)（又名隐式网格轨道）的大小。")]),r("p",[t._v("在你明确定位的行或列（通过  grid-template-rows / grid-template-columns），超出定义的网格范围时，隐式网格轨道被创建。")]),r("p",[t._v("可以是长度值，百分比，或者等份网格容器中可用空间（使用 fr 单位）。")])]),r("h4",{staticClass:"ml-2 mb-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v("grid-auto-flow 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("如果你有一些没有明确放置在网格上的网格项(grid items)，自动放置算法 会自动放置这些网格项。该属性控制自动布局算法如何工作。")]),r("ul",{staticClass:"ml-2"},[t._v("可能的值："),r("li",[r("strong",[t._v("row")]),t._v("：告诉自动布局算法依次填充每行，根据需要添加新行")]),r("li",[r("strong",[t._v("column")]),t._v("：告诉自动布局算法依次填入每列，根据需要添加新列")]),r("li",[r("strong",[t._v("dense")]),t._v("：告诉自动布局算法在稍后出现较小的网格项时，尝试填充网格中较早的空缺")])])]),r("h4",{staticClass:"ml-2 mb-1 mt-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v("grid 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("在一个声明中设置所有以下属性的简写： grid-template-rows, grid-template-columns,  grid-template-areas, grid-auto-rows, grid-auto-columns, 和 grid-auto-flow 。它还将grid-column-gap 和 grid-column-gap设置为初始值，即使它们不可以通过grid属性显式地设置。")]),r("ul",{staticClass:"ml-2"},[t._v("可能的值："),r("li",[r("strong",[t._v("none")]),t._v("：将所有子属性设置为其初始值")]),r("li",[r("strong",[t._v("<grid-template-rows> / <grid-template-columns>")]),t._v("：将 grid-template-rows 和  grid-template-columns 分别设置为指定值，将所有其他子属性设置为其初始值")]),r("li",[r("strong",[t._v("<grid-auto-flow> [<grid-auto-rows> [ / <grid-auto-columns>] ] ")]),t._v("：分别接受所有与  grid-auto-flow ，grid-auto-rows 和 grid-auto-columns 相同的值。如果省略了  grid-auto-columns ，它被设置为由 grid-auto-rows 指定的值。如果两者都被省略，他们就会被设置为初始值")])])]),r("h3",{staticClass:"ml-1 mt-1",attrs:{id:"css3-grid-7"}},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 详解网格项属性")],1),r("Divider"),r("h4",{staticClass:"ml-2 mb-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v("grid-column-start / grid-column-end / grid-row-start / grid-row-end 属性")],1),r("div",{staticClass:"ml-1"},[r("ul",{staticClass:"ml-2"},[t._v("可能的值："),r("li",[r("strong",[t._v("<line> ")]),t._v("：可以是一个数字引用一个编号的网格线，或者一个名字来引用一个命名的网格线")]),r("li",[r("strong",[t._v("span <number> ")]),t._v("：该网格项将跨越所提供的网格轨道数量")]),r("li",[r("strong",[t._v("span <name> ")]),t._v("：该网格项将跨越到它与提供的名称位置")]),r("li",[r("strong",[t._v("auto ")]),t._v("：表示自动放置，自动跨度，默认会扩展一个网格轨道的宽度或者高度")])]),r("p",[t._v("如果没有声明指定 grid-column-end / grid-row-end，默认情况下，该网格项将占据1个轨道。")]),r("p",[t._v("项目可以相互重叠。您可以使用 z-index 来控制它们的重叠顺序。")])]),r("h4",{staticClass:"ml-2 mb-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v("grid-column / grid-row 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("分别为 grid-column-start + grid-column-end 和 grid-row-start + grid-row-end 的缩写形式。")]),r("p",[t._v("值为："),r("pre",{staticClass:"custom-pre"},[t._v("<start-line> / <end-line>")]),t._v(" ：每个网格项都接受所有相同的值，作为普通书写的版本，包括跨度。")])]),r("h4",{staticClass:"ml-2 mb-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v("grid-area 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("为网格项提供一个名称，以便可以 被使用网格容器 grid-template-areas 属性创建的模板进行引用。 另外，这个属性可以用作grid-row-start + grid-column-start + grid-row-end +  grid-column-end 的缩写。")]),r("ul",{staticClass:"ml-2"},[t._v("可能的值："),r("li",[t._v("&;t;name>：你所选的名称")]),r("li",[t._v("&;t;row-start> / &;t;column-start> / &;t;row-end> / &;t;column-end>：数字或分隔线名称")])])]),r("h4",{staticClass:"ml-2 mb-1 mt-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v("justify-self 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("沿着 行轴线(row axis) 对齐 网格项 内的内容。此值适用于单个网格项内的内容。")]),r("ul",{staticClass:"ml-2"},[t._v("可能的值："),r("li",[r("strong",[t._v("start")]),t._v("：将内容对齐到网格区域的左侧")]),r("li",[r("strong",[t._v("end")]),t._v("：将内容对齐到网格区域的右侧")]),r("li",[r("strong",[t._v("center")]),t._v("：将内容对齐到网格区域的中间（水平居中）")]),r("li",[r("strong",[t._v("stretch")]),t._v("：填充整个网格区域的宽度（这是默认值）")])])]),r("h4",{staticClass:"ml-2 mb-1 mt-1"},[r("Icon",{attrs:{type:"logo-buffer"}}),t._v("align-self 属性")],1),r("div",{staticClass:"ml-1"},[r("p",[t._v("沿着 列轴线(column axis) 对齐 网格项 内的内容。此值适用于单个网格项内的内容。")]),r("ul",{staticClass:"ml-2"},[t._v("可能的值："),r("li",[r("strong",[t._v("start")]),t._v("：将内容对齐到网格区域的顶部")]),r("li",[r("strong",[t._v("end")]),t._v("：将内容对齐到网格区域的底部")]),r("li",[r("strong",[t._v("center")]),t._v("：将内容对齐到网格区域的中间（垂直居中）")]),r("li",[r("strong",[t._v("stretch")]),t._v("：填充整个网格区域的高度（这是默认值）")])])]),r("p",{staticClass:"text-right"},[t._v("参考资料："),r("a",{attrs:{href:"http://www.css88.com/archives/8510/comment-page-1"}},[t._v("http://www.css88.com/archives/8510/comment-page-1")])]),r("p",{staticClass:"text-right"},[r("a",{attrs:{href:"https://www.w3cplus.com/css/css-grid-gotchas-stumbling-blocks.html"}},[t._v("https://www.w3cplus.com/css/css-grid-gotchas-stumbling-blocks.html")])]),r("FooterDivider")],1)])},a=[];r._withStripped=!0,s.d(i,"a",function(){return r}),s.d(i,"b",function(){return a})}}]);