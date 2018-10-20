export default [
    {
        // 唯一 id
        id: 1,
        // 固定类型
        type: 'git',
        // 拼接网页 titlt
        title: '撤销修改',
        // 用于查询和显示
        command: 'git reset',
        detail: '撤销修改',
        // 暂不明
        arguments: ['file'],
        // 路由
        pathName: 'git-reset',
        path: '/articles/others/Git/command/git-reset',
        component: () => import('../views/articles/others/Git/command/git-reset.vue')
    },
    {
        id: 2,
        type: 'git',
        title: '版本记录',
        command: 'git log',
        detail: '撤销修改',
        arguments: ['file'],
        pathName: 'git-log',
        path: '/articles/others/Git/command/git-log',
        component: () => import('../views/articles/others/Git/command/git-log.vue')
    }
]