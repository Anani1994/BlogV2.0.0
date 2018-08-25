export default [
  // 在此文件下写文章的相关信息，并在对应路径下创建文章的组件
  // ..........................................................................................................................others/notes
  {
    id: 20180805,                  //时间做ID。  
    name: '全局注册组件和函数',   //field.vue中table的名称及网页title。。
    field: 'others',             //领域及路径-（所有类型：backend,frontend,others）
    category: 'notes',              //分类  - field.vue及路径-(所有类型：HTML,CSS,JS,mixed;beMixed;demo,notes,othMixed)
    tag: ['webpack','vue'],        //标签-暂未使用
    abstract: '如何让函数全局可用？ & 如何全局注册组件？',  // 概要
    postTime: '2018-08-05 18:41:35',       //发表时间
    path: '/articles/others/notes/note-00',  // articles + <field> + <category> + <englishName>
    pathName: 'note-00',                // 路径名称： englishName
    component: () => import('../views/articles/others/notes/note-00.vue')   // 文章组件位置，主要区别在于后两位: field + englishName
  },
  {
    id: 20180805,                  //时间做ID。  
    name: 'windows 搭建开发环境之安装使用 Cmder',   //field.vue中table的名称及网页title。。
    field: 'others',             //领域及路径-（所有类型：backend,frontend,others）
    category: 'notes',              //分类  - field.vue及路径-(所有类型：HTML,CSS,JS,mixed;beMixed;demo,notes,othMixed)
    tag: ['windows','Cmder'],        //标签-暂未使用
    abstract: 'Cmder可以说是 Windows 下一款非常好用的 cmd 替代品，它不仅好用，而且功能强大，界面美观，非常适合在 Windows 下进行开发时使用。',  // 概要
    postTime: '2018-08-25 20:11:47',       //发表时间
    path: '/articles/others/notes/note-01-cmder',  // articles + <field> + <category> + <englishName>
    pathName: 'note-01-cmder',                // 路径名称： englishName
    component: () => import('../views/articles/others/notes/note-01-cmder.vue')   // 文章组件位置，主要区别在于后两位: field + englishName
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
    category: 'mixed',
    tag: ['webpack','angular','JavaScript','jQuery'],
    abstract: '由于公司的项目主要使用 AngularJS，所以准备搭建一个基本的开发环境，以便更好的学习和调试组件等。',
    postTime: '2018-08-23 23:33:38',
    path: '/articles/frontend/mixed/angular-dev',
    pathName: 'angular-dev',
    component: () => import('../views/articles/frontend/mixed/angular-dev.vue')
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