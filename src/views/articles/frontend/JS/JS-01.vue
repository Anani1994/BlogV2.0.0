<template>
    <BoWen>
        <div class="p-1" slot="catalog">
            <Steps direction="vertical">
                <Step
                    title="组成"
                    content="JavaScript 组成"
                    status="wait"
                    @click.native="toTop('#JS-01', 30)">
                </Step>
                <Step
                    title="嵌入 HTML"
                    content="如何在 HTML 中使用"
                    @click.native="toTop('#JS-02', 30)">
                </Step>
            </Steps>
        </div>
        <div class="px-1">
            <div class="py-3 text-center">
                <h1><Icon type="ios-book-outline" /> JS-简介</h1>
                <p class="pt-1">介绍 JavaScript 的基本概念</p>
            </div>
            <h3 id="JS-01" class="ml-1"><Icon type="logo-buffer" /> 组成</h3>
            <Divider />
            <p class="text-info">JavaScript 和 ECMAScript 通常都被人们用来表达相同的含义，但是一个完整的 JavaScript 实现应该由下列三个不同的部分组成。</p>
            <ul class="ml-2">
                <li>文档对象模型（DOM）
                    <p class="text-info">文档对象模型（DOM，Document Object Model）是针对 XML 但经过扩展用于 HTML 的应用程序编程接口（API，Application Programming Interface）。</p>
                    <p>DOM 把整个页面映射为一个多层节点结构。借助 DOM 提供的 API，开发人员可以轻松自如地删除、添加、替换或修改任何节点。</p>
                </li>
                <li>浏览器对象模型（BOM）
                    <p><span class="text-info">浏览器对象模型（BOM）只处理浏览器窗口和框架，但习惯上还会包括所有针对浏览器的 JavaScript 扩展</span>，这些扩展大概包括：</p>
                    <ul>
                        <li>弹出新浏览器窗口的功能</li>
                        <li>移动、缩放和关闭浏览器窗口的功能</li>
                        <li>提供浏览器详细信息的 navigator 对象</li>
                        <li>提供浏览器所加载页面的详细信息的 location 对象</li>
                        <li>提供用户显示器分辨率详细信息的 screen 对象</li>
                        <li>对 cookies的支持</li>
                        <li>像 XMLHttpRequest 和 IE的 ActiveXObject 这样的自定义对象。</li>
                    </ul>
                </li>
                <li>核心（ECMAScript）</li>
            </ul>
            <h3 id="JS-02" class="ml-1 mt-1"><Icon type="logo-buffer" /> 嵌入 HTML</h3>
            <Divider />
            <p><span class="text-info">向 HTML 页面中插入 JavaScript 的主要方法，就是使用 &lt;script&gt; 元素</span>，该元素支持以下的属性：</p>
            <p>
                <ul class="ml-1">
                    <li>type： 可选。表示编写代码使用的脚本语言的内容类型 （也 称为 MIME 类型），其默认值仍为 text/javascript</li>
                    <li>src：可选。表示包含要执行代码的外部文件</li>
                    <li>async：可选。表示应该立即下载脚本，但不应妨碍页面中的其他操作（异步脚本一定会在页面的 load 事件前执行，但可能会在 DOMContentLoaded 事件触发之前或之后执行，建议异步脚本不要在加载期间修改 DOM。）</li>
                    <li>defer：可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。IE7 及更早版本对嵌入脚本也支持这个属性（立即下载，但延迟执行，在现实当中，延迟脚本并不一定会按照顺序执行，也不一定会在 DOMContentLoaded 事件触发前执行，因此最好只包含一个延迟脚本）</li>
                </ul>
            </p>
            <p><span class="text-warn">在使用 &lt;script&gt; 嵌入 JavaScript 代码时，记住不要在代码中的任何地方出现 "&lt;/script&gt;" 字符串，因为按照解析嵌入式代码的规则，当浏览器遇到字符串 "&lt;/script&gt;" 时，就会认为那是结束的 &lt;/script&gt; 标签。</span>而通过转义字符“/”可以解决这个问题。就像是这样：<pre class="custom-pre">console.log("<\/script>")</pre></p>
            <p>带有 src 属性的 &lt;script&gt; 元素中的代码会被忽略。</p>
            <p>无论如何包含代码，只要不存在 defer 和 async 属性，浏览器都会按照 &lt;script&gt; 元素在页面中出现的先后顺序对它们依次进行解析。</p>
            <p>与解析嵌入式 JavaScript 代码一样， 在解析外部 JavaScript文件（包括下载该文件）时，页面的处理也会暂时停止。</p>
            <p class="text-info">在文档的 &lt;head&gt; 元素中包含所有 JavaScript 文件，意味着必须等到全部 JavaScript 代码都被下载、 解析和执行完成以后，才能开始呈现页面的内容（浏览器在遇到&lt;body&gt;标签时才开始呈现内容） 。对于那些需要很多 JavaScript 代码的页面来说，这无疑会导致浏览器在呈现页面时出现明显的延迟，而延迟期间的浏览器窗口中将是一片空白，因此引用外部脚本应放在 &lt;body&gt; 元素中页面内容的后面。</p>
            <p>无论如何包含代码，只要不存在 defer 和 async 属性，浏览器都会按照<script>元素在页面中出现的先后顺序对它们依次进行解析。</p>
            <p>与解析嵌入式 JavaScript 代码一样， 在解析外部 JavaScript文件（包括下载该文件）时，页面的处理也会暂时停止。</p>
            <p>通过 &lt;script&gt; 元素的 src 属性可以包含来自外部域的 JavaScript 文件，利用这点可以实现 get 方法的跨域请求。</p>
            <p class="text-info">在 HTML 中最好的做法还是尽可能使用外部文件来包含 JavaScript 代码：可维护性、可缓存、适应未来。</p>
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
    li {
        p {
            text-indent: 1rem;
        }
        p:first-child {
            margin-top: 1rem;
        }
        ul {
            margin-left: 1rem;
            li:last-child {
                margin-bottom: 1rem;
            }
        }
    }
}
</style>
