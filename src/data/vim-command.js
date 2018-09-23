export default [
    {
        id: 1,
        type: 'vim',
        title: '退出',
        command: 'q',
        arguments: [],
        detail: ['退出 vim 编辑器。'],
        pathName: 'vim-q',
        path: '/articles/others/linux/vim-q',
        component: () => import('../views/articles/others//vim/vim-q.vue')
    }
]