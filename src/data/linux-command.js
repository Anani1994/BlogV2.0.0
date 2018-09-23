export default [
    {
        id: 1,
        type: 'linux',
        title: '更改目录',
        command: 'cd',
        arguments: ['path'],
        detail: ['切换到指定的目录。'],
        pathName: 'l-cd',
        path: '/articles/others/command-line/linux/l-cd',
        component: () => import('../views/articles/others/command-line/linux/l-cd.vue')
    }
]