export default [
    {
        id: 1,
        type: 'git',
        title: '添加文件到暂存区',
        command: 'git add',
        arguments: ['file'],
        detail: ['将指定的文件加入暂存区。'],
        pathName: 'git-add',
        path: '/articles/others/Git/git-add',
        component: () => import('../views/articles/others/Git/git-add.vue')
    },
    {
        id: 2,
        type: 'git',
        title: '添加文件到本地仓库',
        command: 'git commit',
        arguments: ['m'],
        detail: ['将文件加入本地仓库。'],
        pathName: 'git-commit',
        path: '/articles/others/Git/git-commit',
        component: () => import('../views/articles/others/Git/git-commit.vue')
    }
]