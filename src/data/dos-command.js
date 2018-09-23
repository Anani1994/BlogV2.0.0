export default [
    {
        id: 1,
        type: 'windows',
        title: '更改目录',
        command: 'cd',
        arguments: ['path'],
        detail: ['切换到指定的目录。'],
        pathName: 'w-cd',
        path: '/articles/others/command-line/windows/w-cd',
        component: () => import('../views/articles/others/command-line/windows/w-cd.vue')
    }
]