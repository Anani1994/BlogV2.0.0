<template>
  <div class="index-container link-ball-container d-flex justify-content-center align-items-center">
    <div class="link-ball-container">
      <div class="link-ball">
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