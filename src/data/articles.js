export default [
  // 在此文件下写文章的相关信息，并在对应路径下创建文章的组件
  {
    id: 20180805,                  //时间做ID。  
    name: '笔记(一) - 全局注册组件和函数',   //field.vue中table的名称及网页title。。
    field: 'others',             //领域及路径-（所有类型：backend,frontend,others）
    category: 'notes',              //分类  - field.vue及路径-(所有类型：HTML,CSS,JS,mixed;beMixed;demo,notes,othMixed)
    tag: ['webpack','vue'],        //标签-暂未使用
    abstract: '如何让函数全局可用？ & 如何全局注册组件？',  // 概要
    postTime: '2018-08-05 18:41:35',       //发表时间
    path: 'articles/others/notes/note-00',  // articles + <field> + <category> + <englishName>
    pathName: 'note-00',                // 路径名称： englishName
    component: () => import('../views/articles/others/notes/note-00.vue')   // 文章组件位置，主要区别在于后两位: field + englishName
  },
  // 以上为测试
]