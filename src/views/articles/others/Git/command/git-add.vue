<template lang="pug">
    .command-articles
        h1 GIT ADD
        p 开始跟踪新文件，或者把已跟踪的文件放到暂存区，还能用于合并时把有冲突的文件标记为已解决状态等
        Divider
        h3
            Icon(type="logo-buffer")
            | &nbsp;基本用途
        p 保存工作树内容的快照，并将此快照作为下一次提交的内容。
        p 默认情况下，该命令不会添加被忽略的文件。
        p 在解决合并时把有冲突的文件标记为已解决状态。
        h3
            Icon(type="logo-buffer")
            | &nbsp;常用参数
        ul
            li
                strong.text-success &lt;pathspec&gt;
                span.des-text
                span 添加所有匹配的文件，语法可以参考 
                a(href="file:///E:/tool/cmder/vendor/git-for-windows/mingw64/share/doc/git-doc/gitglossary.html") gitglossary 
                | 中的 pathspec 条目。
                ul
                    li 这里我们以 
                        pre.custom-pre git add &lt;pathspec&gt;
                        |为例。
                        p 1、最初的目录结构：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/dir-0.png", alt="文件目录")
                        p 2、初始的状态：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/step-0-0.png", alt="状态")
                        p 3、执行上述命令后的状态：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/step-0-1.png", alt="状态")
                    li 另外我们经常使用到的有 
                        pre.custom-pre git add .
                        |  添加所有文件(同样不包含被忽略的文件)。
                        p 基于上面第二步执行后的状态为：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/step-0-2.png", alt="状态")
                    li 为了说明默认情况下不会添加被忽略的文件，因此我们来创建一个
                        code .gitignore 文件。
                        p 2-1、新的文件目录如下：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/dir-1.png", alt="文件目录")
                        p 其中
                            code .gitnore 文件的内容为：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/gitignore-0.png", alt="文件目录", style="height: 50px;")
                        p 2-2、初始状态为：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/step-1-0.png", alt="文件目录")
                        p 2-3、执行上述命令后的状态：
                        img.d-block.mb-1(src="../../../../../assets/images/acticles/others/git/step-1-1.png", alt="文件目录")
                        p 可见在
                            code  .gitignore 文件中指定需要被忽略的 
                            code 1.md 
                            | 文件没有被添加到索引中。
            li
                strong.text-success --dry-run(-n)
                span.des-text
                span 使用此参数不会实际添加文件，只显示没有这个参数时，命令会产生的效果。
                ul
                    li 我们基于上面 2-2 步 执行命令：
                        pre.custom-pre git add --dry-run .
                        img.d-block.mt-1.mb-1(src="../../../../../assets/images/acticles/others/git/arg-n.png", alt="文件目录")
                        p 可见文件并没有添加到暂存区，自是显示了 
                            pre.custom-pre git add .
                            |  命令会产生的效果，括号中的内容是该参数的简写，产生的效果是完全一样的。
        h3
            Icon(type="logo-buffer")
            | &nbsp;参数汇总
        p 实例中的显示的效果是在上述 2-2 步的初始状态下进行的。
        Table(:columns="columns", :data="data")
        FooterDivider
</template>

<script>
import util from '../../../../../libs/util.js';
export default {
    data() {
        return {
            columns: [
                {
                    title: '参数',
                    key: 'arg',
                    maxWidth: 125,
                },
                {
                    title: '简写',
                    key: 'shortName',
                    maxWidth: 125,
                },
                {
                    title: '使用方式',
                    key: 'useStyle',
                },
                {
                    title: '说明',
                    key: 'des',
                },
                {
                    title: '实例',
                    key: 'example',
                    align: 'center',
                    maxWidth: 125,
                    render: (h, parmas) => {
                        return h('i-button', {
                            props: {
                                type: 'info'
                            },
                            nativeOn: {
                                click: () => {
                                    this.showExampleModal(parmas);
                                }
                            }
                        }, ['查看实例']);
                    }
                }
            ],
            data: [
                {
                    arg: '<pathspec>',
                    shortName: '无',
                    useStyle: 'git add <pathspec>',
                    des: '添加所有匹配的文件到暂存区',
                    detailDes: [
                        {
                            src: 'assets/images/acticles/others/git/step-1-1',
                            text: ''
                        }
                    ]
                },
                {
                    arg: '--dry-run',
                    shortName: '-n',
                    useStyle: 'git add -n <...ortherArgArr>',
                    des: '显示命令将会产生的效果，不会实际的添加文件。',
                    detailDes: [
                        {
                            src: 'assets/images/acticles/others/git/arg-n',
                            text: ''
                        }
                    ]
                },
                {
                    arg: '--verbose',
                    shortName: '-v',
                    useStyle: 'git add -v <...ortherArgArr>',
                    des: '显示此命令产生的效果，会实际的添加文件。',
                    detailDes: [
                        {
                            src: 'assets/images/acticles/others/git/arg-v',
                            text: ''
                        }
                    ]
                },
                {
                    arg: '--force',
                    shortName: '-f',
                    useStyle: 'git add -f <...ortherArgArr>',
                    des: '允许添加被忽略的文件。',
                    detailDes: [
                        {
                            src: 'assets/images/acticles/others/git/arg-f',
                            text: ''
                        }
                    ]
                },
                {
                    arg: '--interactive',
                    shortName: '-i',
                    useStyle: 'git add -i <...ortherArgArr>',
                    des: '将工作树中的修改内容以交互方式添加到索引中。',
                    detailDes: [
                        {
                            src: 'assets/images/acticles/others/git/arg-i',
                            text: ''
                        }
                    ]
                },
            ]
        }
    },
    methods: {
        showExampleModal (parmas) {
            let content = '暂无实例。';
            if (parmas.row.detailDes.length) {
                content = '';
                parmas.row.detailDes.forEach(item => {
                    let img = require('../../../../../' + item.src + '.png');
                    if (item !== '') {
                        content = content + `<p>${item.text}</p><img src="${img}"/>`;
                    } else {
                        content = content + `<img src="${img}"/>`;
                    }
                });
            }
            let config = {
                title: util.removeSymbol(parmas.row.arg, ['<', '>']),
                width: 768,
                content: content
            };
            this.$Modal.info(config);
        }
    }
}
</script>
