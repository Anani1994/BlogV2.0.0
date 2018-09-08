<template>
  <div class="index-container link-ball-container d-flex justify-content-center align-items-center">
    <div class="link-ball-container">
      <div class="link-ball">
        <a href="https://anani1994.github.io/blog/blog-others/2018/02/resume.html">关于我</a>
        <a href="http://www.cnblogs.com/anani/">博客园</a>
        <a href="https://github.com/Anani1994">Github</a>
        <a href="https://anani1994.github.io/blog/blog-others/2018/02/article-list.html">往期博文</a>
        <a href="https://anani1994.github.io/blog/blog-project/2017/09/cartoon-qixi.html">情人节动画</a>
        <a href="https://anani1994.github.io/blog/blog-project/2017/10/xingzhe.html">行者公司</a>
        <a href="https://anani1994.github.io/blog/blog-html/2017/10/html-dom.html">HTML DOM</a>
        <a href="https://anani1994.github.io/blog/blog-js/2018/03/js-question-0.html">前端面试题</a>
        <a href="https://anani1994.github.io/blog/blog-js/2017/10/closure.html">JS 闭包</a>
        <a href="https://anani1994.github.io/blog/blog-js/2018/01/inherit.html">JS 继承</a>
        <a href="https://anani1994.github.io/blog/blog-others/2018/03/mysql-study.html">学习MySQL</a>
        <a href="https://anani1994.github.io/blog/blog-others/2018/02/electron.html">Electron</a>
        <a href="https://anani1994.github.io/blog/blog-others/2017/10/shortcutKey-bowen.html">键盘快捷键</a>
        <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&email=zqqhoKm5pq2moI6oobajr6ei4K2how">联系我</a>
        <a href="https://weibo.com/dongwanhong?is_all=1">微博 @Anani</a>
        <a href="http://www.cnblogs.com/anani/p/8611859.html">CSS 居中</a>
        <a href="http://www.cnblogs.com/anani/p/8657204.html">事件流&事件委托</a>
        <a href="http://www.cnblogs.com/anani/p/8719576.html">Flex 属性</a>
        <a href="http://www.cnblogs.com/anani/p/8391712.html">Electron question</a>
        <a href="http://www.cnblogs.com/anani/p/8614392.html">CSS 伪类</a>
      </div>
    </div>
  </div>
</template>

<script>
  import linkBall from '../libs/linkBall.js';
  export default {
    data() {
      return {
        parmas: {
          radius: 249, // 焦距
          focalLength: 500, // 储存各链接的空间位置
        },
      }
    },
    methods: {
       //
    },
    mounted() {
      linkBall.setLinkBall(this.parmas);
    }
  }
</script>

<style lang="less">
.index-container {
  position: absolute;
  top: 60px;
  right: 0;
  bottom: 30px;
  left: 0;
  .link-ball {
    position: relative;
    width: 650px;
    height: 550px;  
  }
  .link-ball a {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    padding: 4px;
    color: #727273;
  }
  .link-ball a:hover {
    transform: scale(1.5);
    opacity: 1;
    font-size: 2rem;
  }
}
</style>