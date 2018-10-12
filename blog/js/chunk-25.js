(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{318:function(t,i,s){"use strict";s.r(i);var e=s(422),n=s(383);for(var a in n)"default"!==a&&function(t){s.d(i,t,function(){return n[t]})}(a);var o=s(0),c=Object(o.a)(n.default,e.a,e.b,!1,null,null,null);c.options.__file="src\\views\\articles\\others\\Git\\issue-01.vue",i.default=c.exports},382:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{toTop:this.$util.toTop}}}},383:function(t,i,s){"use strict";s.r(i);var e=s(382),n=s.n(e);for(var a in e)"default"!==a&&function(t){s.d(i,t,function(){return e[t]})}(a);i.default=n.a},422:function(t,i,s){"use strict";var e=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("BoWen",[s("div",{staticClass:"p-1",attrs:{slot:"catalog"},slot:"catalog"},[s("Steps",{attrs:{direction:"vertical"}},[s("Step",{attrs:{title:"引言",content:"情景概要",status:"wait"},nativeOn:{click:function(i){t.toTop("#git-issue-01",30)}}}),t._v(" "),s("Step",{attrs:{title:"原因",content:"可能产生该问题的原因",status:"wait"},nativeOn:{click:function(i){t.toTop("#git-issue-02",30)}}}),t._v(" "),s("Step",{attrs:{title:"解决方案",content:"解决方案",status:"wait"}},[s("steps",{attrs:{direction:"vertical"}},[s("Step",{attrs:{title:"方案一",content:"重新储存",status:"wait"},nativeOn:{click:function(i){i.stopPropagation(),t.toTop("#git-issue-031",30)}}}),t._v(" "),s("Step",{attrs:{title:"方案二",content:"删除已经存在的文件",status:"wait"},nativeOn:{click:function(i){i.stopPropagation(),t.toTop("#git-issue-032",30)}}})],1)],1),t._v(" "),s("Step",{attrs:{title:"总结",content:"概括本篇内容",status:"wait"},nativeOn:{click:function(i){t.toTop("#git-issue-04",30)}}})],1)],1),t._v(" "),s("div",{staticClass:"px-1"},[s("div",{staticClass:"py-3 text-center"},[s("h1",[s("Icon",{attrs:{type:"ios-book-outline"}}),t._v(' How to fix "Could not restore untracked files from stash" issue')],1),t._v(" "),s("p",{staticClass:"pt-1"},[t._v("分析解决如题所示问题的原因和解决方法")])]),t._v(" "),s("h3",{staticClass:"ml-1",attrs:{id:"git-issue-01"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 引言")],1),t._v(" "),s("Divider"),t._v(" "),s("p",[t._v("我们知道在一个分支上使用 "),s("code",[t._v("Git")]),t._v(" 储藏后的内容可以把它用在任意一个分支上，而并不仅仅只是在它产生的分支上使用，这使得我们使用分支进行开发变得更加有利。")]),t._v(" "),s("p",[t._v("在一个分支上保存一个储藏，切换到另一个分支，然后尝试重新应用这些修改。 当应用储藏时工作目录中也可以有修改与未提交的文件（如果有任何东西不能干净地应用，Git 会产生合并冲突）。")]),t._v(" "),s("p",[t._v("本次出现错误提示的情景正是在一个分支上工作后储存了未提交的修改，后面在新的分支上使用此次储存时报错："),s("code",[t._v("<something> already exists, no checkoutCould not restore untracked files from stash entry.")])]),t._v(" "),s("h3",{staticClass:"ml-1",attrs:{id:"git-issue-02"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 原因")],1),t._v(" "),s("Divider"),t._v(" "),s("ul",{staticClass:"ml-2"},[t._v("如果在将要使用提取储存的分支上的工作区已经存在了存储里携带的未被跟踪的文件时，就会报如题所示的错误。储存中包含未跟踪文件的方式有以下两种：\n                "),s("li",[t._v("错误的使用了命令："),s("code",[t._v("git stash -a")]),t._v("，其中的关键点就是 "),s("code",[t._v("-a")]),t._v(" 这个参数，添加这个参数后会将 .gitignore 忽略的文件放入此次储存中。")]),t._v(" "),s("li",[t._v("错误的使用了命令："),s("code",[t._v("git stash --include-untracked")]),t._v("，其中的关键点就是 "),s("code",[t._v("--include-untracked")]),t._v(" 这个参数，添加这个参数后会将未被跟踪的文件放到此次储存中。")])]),t._v(" "),s("h3",{staticClass:"ml-1 mt-1",attrs:{id:"git-issue-031"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 方案一")],1),t._v(" "),s("Divider"),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v("// 第一步 找到所有提交记录\ngit log --graph --all --decorate --oneline\n\n// 第二步 跳转到使用 git stash 的版本 <commit id>\ngit checkout <commit id>\n\n// 第三步 回到版本提交前\ngit reset HEAD~1\n\n// 第四步 重新使用正确的储存命令\ngit stash -u\n\n// 第五步 使用正确的储存\ngit stash apply")])]),t._v(" "),s("h3",{staticClass:"ml-1",attrs:{id:"git-issue-032"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 方案二")],1),t._v(" "),s("Divider"),t._v(" "),s("p",[t._v("因为将要删除的是未被跟踪的文件，所以此方式属于危险操作，从工作目录中移除未被追踪的文件，有可能将再也找不回来。")]),t._v(" "),s("p",[t._v("此方式的核心思想就是将报错里提示已经存在的文件从工作目录种删除，从而解决问题，删除的手法可以手动直接在文件目录里删除（推荐剪切相应的文件作为备份）。")]),t._v(" "),s("p",[t._v("另外更安全的做法是移除每一样东西并存放在栈中："),s("code",[t._v("git stash --all")]),t._v("，不过这样储存里又会存在未被跟踪的文件，好在我们只是用作备份。")]),t._v(" "),s("p",[t._v("当然，在 "),s("code",[t._v("Git")]),t._v(" 里也为我们提供了清除工作区的方法，它大概就像这样：")]),t._v(" "),s("pre",{directives:[{name:"highlight",rawName:"v-highlight"}],staticClass:"ml-2"},[s("code",{staticClass:"js"},[t._v("// 只移除没有忽略的未跟踪文件\ngit clean\n\n// 移除工作目录中所有未追踪的文件以及空的子目录。 -f 意味着 强制 或 确定移除\ngit clean -f -d\n\n// 任何与 .gitiignore 或其他忽略文件中的模式匹配的文件都不会被移除。\n// 如果你也想要移除那些文件，可以给 clean 命令增加一个 -x 选项\ngit clean -f -d -x")])]),t._v(" "),s("h3",{staticClass:"ml-1",attrs:{id:"git-issue-04"}},[s("Icon",{attrs:{type:"logo-buffer"}}),t._v(" 总结")],1),t._v(" "),s("Divider"),t._v(" "),s("p",[t._v("在已经存在未被跟踪文件（包括普通未跟踪和 .gitignore 种匹配的文件）的分支上使用再现储存，如果使用的此次储存中又包含了以上的文件，那么就会报错。")]),t._v(" "),s("p",[t._v("解决这个错误的主要思想就是让其中一方丢弃共用的未跟踪文件。")]),t._v(" "),s("FooterDivider")],1)])},n=[];e._withStripped=!0,s.d(i,"a",function(){return e}),s.d(i,"b",function(){return n})}}]);