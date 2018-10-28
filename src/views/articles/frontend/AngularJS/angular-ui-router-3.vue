<template lang="pug">
    BoWen
        .p-1(slot="catalog")
            Steps(direction="vertical")
                Step(title="嵌套路由"
                    content="嵌套路由"
                    status="wait"
                    @click.native="toTop('#angular-ui-router-3-1', 30)")
        .px-1
            .py-3.text-center
                h1
                    Icon(type="ios-book-outline")
                    | &nbsp;UI-Router for AngularJS (四)
                p.pt-1 UI-Router is the defacto standard for routing in AngularJS
            h3#angular-ui-router-3-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;嵌套路由
            Divider
            p 嵌套路由共有四种方法，由 'dot notation'，parent property（其值可以为字符串和对象），第三方模块(stateHelper)，这里不对 stateHelper 进行介绍，需要的同学可点击
                a(href="https://github.com/marklagendijk/ui-router.stateHelper")  stateHelper
                |  查看。
            h4.mb-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;dot notation
            p 使用嵌套路由时，默认行为是子状态将其 url 附加到其每个父状态的 url，定义的方式很简单，就是状态名的格式设置格式为  
                pre.custom-pre &lt;parentName&gt;.&lt;sonName&gt;
            pre.ml-2(v-highlight)
                code.js $stateProvider
                    | 
                    |     .state('products', {
                    |         url: '/products',
                    |         ...
                    |     })
                    |     .state('products.list', {
                    |         url: '/list',
                    |         ...
                    |     });
            p 它们路径表现为：
                ul.ml-1
                    li 'products' state matches "/products"
                    li 'products.list' state matches "/products/list".
            p 当然我们也可以为其设置绝对路径，这样就不会受父路由的影响，而操作的方式就是在配置 url 是在前面添加 ^ 即可。
            pre.ml-2(v-highlight)
                code.js $stateProvider
                    | 
                    |     .state('products', {
                    |         url: '/products',
                    |         ...
                    |     })
                    |     .state('products.list', {
                    |         url: '^/list',
                    |         ...
                    |     });
            p 它们路径表现为：
                ul.ml-1
                    li 'products' state matches "/products"
                    li 'products.list' state matches "/list".
            h4.mb-1.ml-1
                Icon(type="logo-buffer")
                | &nbsp;parent property
            p 通过设置 parent 属性来指定它的父状态。
            pre.ml-2(v-highlight)
                code.js // parent 的值可以是父状态的名称
                    | 
                    | $stateProvider
                    |     .state('products', {
                    |         url: '/products',
                    |         ...
                    |     })
                    |     .state('list', {
                    |         url: '/list',
                    |         parent: 'products'
                    |         ...
                    |     });
                    |
                    | // parent 的值也可以是一个描述状态的对象
                    | var products = { 
                    |     name: 'products',
                    |     templateUrl: 'products.html'
                    | }
                    | var productsList = { 
                    |     name: 'list',
                    |     parent: products,
                    |     templateUrl: 'products.list.html'
                    | }
                    | 
                    | $stateProvider
                    |   .state(products)
                    |   .state(productsList)
            p.text-info 父子状态的定义顺序可以随意，因为创建它们时会自动为其排队，首先创建父级状态。
            p.text-warn 如果我们定义了子状态，那么其父级状态必须存在。
            p.text-warn 状态的名称不能重复，即使它们身处不同的父级状态下。
            p.text-info 当子状态被激活时，其父级状态也会被激活。
            p.text-info 当子状态被激活时，将会加载其 template 显示在父级的 ui-view 中，当没被指定父级状态时，显示在index.html 的 ui-view 中。
            h3#angular-ui-router-3-2.ml-1
                Icon(type="logo-buffer")
                | &nbsp;嵌套路由
            Divider
            p.text-right 还没有看够？请点击
                a(href="/#/articles/frontend/AngularJS/angular-ui-router-4")  UI-Router for AngularJS (五) 
                | 查看更多内容。
            p.text-right 参考资料：
                a(href="https://github.com/angular-ui/ui-router/wiki/URL-Routing") https://github.com/angular-ui/ui-router/wiki/URL-Routing
            <FooterDivider></FooterDivider>
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
