export default [
  // 在此文件下写文章的相关信息，并在对应路径下创建文章的组件
  // ..........................................................................................................................others/notes
  {
    //时间做ID。 
    id: 20180805, 
    //field.vue中table的名称及网页title。。
    name: 'Vue 注册全局组件和函数',
    //领域及路径-（所有类型：backend,frontend,others）
    field: 'frontend',
    //分类  - field.vue及路径-(所有类型：HTML,CSS,JS,VueJS,AngularJS,mixed;beMixed;demo,notes,othMixed)
    category: 'VueJS',
    //标签-暂未使用: 后期可做全局搜索
    tag: ['webpack','vue'],
    // 概要
    abstract: '如何让函数全局可用？ & 如何全局注册组件？',
    //发表时间
    postTime: '2018-08-05 18:41:35',
    // articles + <field> + <category> + <englishName>
    path: '/articles/frontend/VueJS/note-00',
    // 路径名称： englishName
    pathName: 'note-00',
    // 文章组件位置，主要区别在于后两位: field + englishName
    component: () => import('../views/articles/frontend/VueJS/note-00.vue')
  },
  // {
  //   id: 20180826,
  //   name: '浅析 angular 指令的作用域',
  //   field: 'frontend',
  //   category: 'AngularJS',
  //   tag: ['JavaScript','angular','scope'],
  //   abstract: '简单介绍 AngularJS 指令的使用。',
  //   postTime: '2018-08-26 20:05:45',
  //   path: '/articles/frontend/AngularJS/angular-directive',
  //   pathName: 'angular-directive',
  //   component: () => import('../views/articles/frontend/AngularJS/angular-directive.vue')
  // },
  {
    //时间做ID。 
    id: 20180915, 
    name: '问题收录集（1）',
    field: 'others',
    category: 'notes',
    tag: ['webpack','vue', 'JavaScript'],
    abstract: '收集整理开发路上遇到的各种问题。',
    //发表时间
    postTime: '2018-09-15 01:23:38',
    // articles + <field> + <category> + <englishName>
    path: '/articles/others/notes/note-02',
    // 路径名称： englishName
    pathName: 'note-02',
    // 文章组件位置，主要区别在于后两位: field + englishName
    component: () => import('../views/articles/others/notes/note-02.vue')
  },
  {
    id: 20180909,
    name: '伪元素 ::before 和 ::after',
    field: 'frontend',
    category: 'CSS',
    tag: ['CSS','伪类'],
    abstract: 'CSS伪元素是用来添加一些选择器的特殊效果。',
    postTime: '2018-09-09 12:34:33',
    path: '/articles/frontend/CSS/pseudo-before-after',
    pathName: 'pseudo-before-after',
    component: () => import('../views/articles/frontend/CSS/pseudo-before-after.vue')
  },
  {
    id: 20180805,
    name: 'windows 搭建开发环境之安装使用 Cmder',
    field: 'frontend',
    category: 'mixed',
    tag: ['windows','Cmder'],
    abstract: 'Cmder可以说是 Windows 下一款非常好用的 cmd 替代品，它不仅好用，而且功能强大，界面美观，非常适合在 Windows 下进行开发时使用。',
    postTime: '2018-08-25 20:11:47',
    path: '/articles/frontend/mixed/note-01-cmder',
    pathName: 'note-01-cmder',
    component: () => import('../views/articles/frontend/mixed/note-01-cmder.vue')
  },
  {
    id: 20180806,
    name: '详解 offsetTop、scrollTop 等DOM属性',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript','jQuery'],
    abstract: '详细分析 offsetTop、offsetLeft、offsetWidth、offsetHeight、scrollTop... 以及 clientTop...等 DOM 属性的值。',
    postTime: '2018-08-06 20:21:15',
    path: '/articles/frontend/JS/top-left-width-height',
    pathName: 'top-left-width-height',
    component: () => import('../views/articles/frontend/JS/top-left-width-height.vue')
  },
  {
    id: 20180807,
    name: '博客开发记录',
    field: 'others',
    category: 'othMixed',
    tag: ['webpack','vue','iview','JavaScript','jQuery'],
    abstract: '记录博客开发过程中遇到的主要问题和解决方法，以及博客诞生至今已经解决或者尚且遗留的一些疑难杂症。',
    postTime: '2018-08-07 17:38:05',
    path: '/articles/others/othMixed/blog-dev-log',
    pathName: 'blog-dev-log',
    component: () => import('../views/articles/others/othMixed/blog-dev-log.vue')
  },
  {
    id: 20180823,
    name: '搭建 webpack-angular 基础开发环境',
    field: 'frontend',
    category: 'AngularJS',
    tag: ['webpack','angular','JavaScript','jQuery'],
    abstract: '由于公司的项目主要使用 AngularJS，所以准备搭建一个基本的开发环境，以便更好的学习和调试组件等。',
    postTime: '2018-08-23 23:33:38',
    path: '/articles/frontend/AngularJS/angular-dev',
    pathName: 'angular-dev',
    component: () => import('../views/articles/frontend/AngularJS/angular-dev.vue')
  },
  // ...........................................................................................................................frontend/JS
  {
    id: 20180809,
    name: 'JavaScript 手动触发事件',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript','jQuery'],
    abstract: '简要介绍手动触发 JavaScript 事件的方法。',
    postTime: '2018-08-09 01:55:28',
    path: '/articles/frontend/JS/trigger-event',
    pathName: 'trigger-event',
    component: () => import('../views/articles/frontend/JS/trigger-event.vue')
  },
  {
    id: 20180809,
    name: 'JavaScript 手动触发事件（新）',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript','jQuery'],
    abstract: '简要介绍手动触发 JavaScript 事件的新方法，应用 W3C 最新的规范。',
    postTime: '2018-08-09 15:39:39',
    path: '/articles/frontend/JS/new-trigger-event',
    pathName: 'new-trigger-event',
    component: () => import('../views/articles/frontend/JS/new-trigger-event.vue')
  },
  {
    id: 20180811,
    name: 'JavaScript 函数节流和函数防抖',
    field: 'frontend',
    category: 'JS',
    tag: ['JavaScript'],
    abstract: '通过限制函数的执行，从而提高 JavaScript 应用程序的性能。',
    postTime: '2018-08-11 20:37:25',
    path: '/articles/frontend/JS/throttle-debounce',
    pathName: 'throttle-debounce',
    component: () => import('../views/articles/frontend/JS/throttle-debounce.vue')
  },
  // ..........................................................................................................................frontend/CSS
  {
    id: 20180811,
    name: '详解 CSS 绝对定位',
    field: 'frontend',
    category: 'CSS',
    tag: ['CSS','绝对定位'],
    abstract: '简单介绍绝对定位的定义和用法，主要分析设置绝对定位后的影响。',
    postTime: '2018-08-11 21:54:46',
    path: '/articles/frontend/CSS/position-absolute',
    pathName: 'position-absolute',
    component: () => import('../views/articles/frontend/CSS/position-absolute.vue')
  },
  {
    id: 20180812,
    name: '外边距合并',
    field: 'frontend',
    category: 'CSS',
    tag: ['CSS','外边距'],
    abstract: '块级元素的上外边距和下外边距有时会合并（或折叠）为一个外边距，其大小取其中的最大者，这种行为称为外边距折叠。',
    postTime: '2018-08-12 16:09:58',
    path: '/articles/frontend/CSS/margin-collapsing',
    pathName: 'margin-collapsing',
    component: () => import('../views/articles/frontend/CSS/margin-collapsing.vue')
  },
]