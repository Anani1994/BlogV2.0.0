<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="提示"
                    content="新发布文章的要点"
                    status="wait"
                    @click.native="toTop('#note-tips', 30)">
                </Step>
                <Step
                    title="尚存的 BUG"
                    content="现有的缺陷还未被解决"
                    @click.native="toTop('#note-buging', 30)">
                </Step>
                <Step
                    title="解决的 BUG"
                    content="已经解决的缺陷"
                    @click.native="toTop('#note-buged', 30)">
                </Step>
                <Step
                    title="操作日志"
                    content="记录一些重要的操作"
                    @click.native="toTop('#note-log', 30)">
                </Step>
            </Steps>
        </div>
        <div class="p-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> 博客开发记录</h1>
                <p class="pt-1">记录博客开发中遇到的问题和解决方法等</p>
            </div>
            <!-- 第一部分 -->
            <h3 id="note-tips"><Icon type="logo-buffer" /> 提示</h3>
            <Divider />
            <p>发布文章时需要在 <code>articles.js</code> 文件下根据第一条内容写下新建文章的相关信息，并在对应路径下创建文章的组件。</p>
            <p>程序会根据所填信息自动创建路由，所以定要确保相关信息与第一条规范相匹配。</p>
            <!-- 第二部分 -->
            <h3 id="note-buging"><Icon type="logo-buffer" /> 尚存的 BUG</h3>
            <Divider />
            <ul>
                <li>刷新子组件（文章）后导航栏高亮的元素不正确，会直接高亮首页。</li>
            </ul>
            <!-- 第三部分 -->
            <h3 id="note-buged"><Icon type="logo-buffer" /> 解决的 BUG</h3>
            <Divider />
            <ul>
                <li>
                    从父路由点进子组件(（frontend 及其同级）下的组件)正常渲染，刷新页面后子组件内的内容直接消失，页面地址没变。
                    <p>解决措施：修改子组件的路由中的 path 形如 articles/others/notes/note-00 => /articles/others/notes/note-00</p>
                </li>
            </ul>
            <h3 id="note-log"><Icon type="logo-buffer" /> 操作日志</h3>
            <Divider />
            <ul>
                <li>
                    配置 jQuery
                    <pre class="border-white" v-highlight><code class="js">// 安装
yarn add jquery
// 配置 webpack.base.config.js
const webpack = require('webpack');
module.exports = {
    ...
    plugins: [
        ...
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
        })
        ...
    ]
}</code></pre>
                </li>
            </ul>
            <FooterDivider></FooterDivider>
        </div>
    </BoWen>
</template>

<script>
export default {
    data() {
        return {
            toTop: this.$util.toTop
        }
    }
}
</script>

<style lang="less" scoped>
ul {
    list-style-position: inside;
    li {
        margin-left: 2rem;
    }
}
</style>

