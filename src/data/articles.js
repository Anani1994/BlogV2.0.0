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
  // 以上为测试
]