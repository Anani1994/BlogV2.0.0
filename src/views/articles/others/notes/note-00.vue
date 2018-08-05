<template>
    <BoWen>
        <div style="background: rgb(35, 36, 31)">
            <div class="py-3 text-center">
                <Button type="primary"><h1>笔记(一) - 全局注册组件和函数</h1></Button>
            </div>
            <Tag class="ml-1 font-weight-bold" type="dot" color="primary">注册全局可用的函数</Tag>
            <Divider />
            <pre v-highlight>
                <code class="js">// main.js
    import util from './util.js'
    Vue.prototype.$util = util;</code>
            </pre>
            <pre v-highlight>
                <code class="js">// 在组件中使用
    method:{
    helloWorld() {
        // sayHello 为 util 上的方法
        this.$util.sayHello();
    }
    }</code>
            </pre>
            <Tag class="ml-1 font-weight-bold" type="dot" color="primary">注册全局组件</Tag>
            <Divider />
            <pre v-highlight>
                <code class="js">// main.js
    // 自定义全局组件
    import defineSubassemblies from './components/defineSubassembly.js';
    Vue.use(defineSubassemblies);</code>
            </pre>
            <pre v-highlight>
                <code class="js">// defineSubassembly.js
    import FullPage from './fullpage/fullpage.vue';
    import PageItem from './fullpage/components/page.vue';

    const defineSubassemblies = {
    install:function (Vue) {
        Vue.component('FullPage',FullPage);
        Vue.component('PageItem',PageItem);
    }
    };

    export default defineSubassemblies;
    </code>
            </pre>
            <FooterDivider></FooterDivider>
        </div>
    </BoWen>
</template>

<script>
export default {
    name: 'NoteOne'
}
</script>

