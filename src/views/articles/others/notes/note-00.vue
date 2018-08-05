<template>
    <Row class="bo-wen">
        <Col span="4">目录</Col>
        <Col class="pt-3 h-100 outContainer" span="17">
            <div class="h-100 innerContainer">
                <h3>注册全局可用的函数</h3>
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
                <h3>注册全局组件</h3>
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
                <div class="text-center text-error">到底了，我可是有底线的。</div>
            </div>
        </Col>
        <Col span="3">额外的内容</Col>
    </Row>
</template>

<script>
export default {
    name: 'BoWen'
}
</script>

<style lang="less" scoped>
    .bo-wen {
        height: calc(100% - 90px);
        .outContainer {
            overflow: hidden;
        }
        .innerContainer {
            overflow-x: hidden;
            overflow-y: scroll;
            width: calc(100% + 17px);
        }
    }
</style>

