export default [
  // 在此文件下写文章的相关信息，并在对应路径下创建文章的组件
  {
    id: 20180701,                  //时间做ID。。。               //  1
    name: '错误日志(一)',           //field.vue中table的名称及网页title。。。        //  1
    field: 'frontend',             //领域及路径                       //   1
    category: 'mixed',              //分类  - field.vue及路径                //   1
    tag: ['webpack','vue'],        //标签
    abstract: 'CSS 引用图片后找不到文件资源的问题',  // 概要           //    1
    postTime: '2018-07-07 21:45:55',       //发表时间                          //    1
    path: 'articles/frontend/mixed/question-00',  // articles + <field> + <category> + <englishName>       //  1
    pathName: 'question-00',                // 路径名称： englishName
    component: () => import('../views/articles/frontend/mixed/question-00.vue')   // 文章组件位置，主要区别在于后两位: field + englishName
  },
  {
    id: 20180705,
    name: '错误日志(二)',
    field: 'frontend',
    category: 'mixed',
    tag: ['webpack','vue'],
    abstract: '博客项目的创建是在项目 webpack-iview-vue 上的改进，从而产生需要的博客开发环境，如要查看最初的环境配置，请点击按钮 webpack-iview-vue 进行查看。',
    postTime: '2018-07-15 20:22:57',
    path: 'articles/frontend/mixed/question-01',
    pathName: 'question-01',
    component: () => import('../views/articles/frontend/mixed/question-01.vue')
  },
  // 以上为测试
  {
    id: 20180731,
    name: '全屏滚动',
    field: 'others',
    category: 'demo',
    tag: ['JavaScript','vue'],
    abstract: '运用 JavaScript 获取设备屏幕的高度，以此来设置每一屏幕(一个 div.page）的高度，针对不同的浏览器设置监听 mousewheel 事件，并判断滚轮的方向，然后向上或向下滚动一屏。',
    postTime: '2018-07-31 22:24:20',
    path: 'articles/others/demo/fullpage',
    pathName: 'fullpage',
    component: () => import('../views/articles/others/demo/fullpage.vue')
  },
]