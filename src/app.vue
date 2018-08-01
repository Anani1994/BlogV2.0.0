<template>
  <div class="app-container">
    <Menu mode="horizontal" :active-name="this.activeName">
      <div class="float-left px-1 text-white">
        <Icon type="android-globe"></Icon>
        董万宏的博客
      </div>
      <MenuItem class="float-right" name="github" @click.native="window.location.href='https://github.com/Anani1994'">
          <Icon type="social-github-outline"></Icon>
          Github
      </MenuItem>
      <MenuItem class="float-right" name="cnblogs" @click.native="window.location.href='http://www.cnblogs.com/anani/'">
        <Icon type="android-bicycle"></Icon>
        博客园
      </MenuItem>
      <MenuItem class="float-right" name="articles" @click.native="toPage('field')">
        <Icon type="ios-book-outline"></Icon>
        博文
      </MenuItem>
      <MenuItem class="float-right" name="main" @click.native="toPage('index')">
        <Icon type="home"></Icon>
        首页
      </MenuItem>
    </Menu>
    <router-view></router-view>
    <div class="bottom">
      Created in 2018<span class="border-right">
      </span>网站开发者：<a class="text-white" href="">董万宏</a>
      <span class="border-right"></span>
      <span class="time"></span>
    </div>
  </div>
</template>

<script>
import util from './libs/util.js';
export default {
  data() {
    return {
      toPage: util.toPage,
      window
    }
  },
  computed: {
    activeName() {
      return this.$store.state.activeName;
    }
  },
  mounted() {
    setInterval(function formatDate () {
      let dateTime = new Date();
      let year = dateTime.getFullYear();
      let month = dateTime.getMonth() + 1;
      let day = dateTime.getDate();
      let hour = dateTime.getHours();
      let minute = dateTime.getMinutes();
      let second = dateTime.getSeconds();
      let result = year
      + '-' + (month  < 10 ? '0' + month :  month  )
      + '-' + (day    < 10 ? '0' + day : day       )
      + ' ' + (hour   < 10 ? '0' + hour : hour     )
      + ':' + (minute < 10 ? '0' + minute : minute )
      + ':' + (second < 10 ? '0' + second : second );
      document.querySelector('.time').innerHTML = result;
    })
  }
}
</script>

<style lang=less>
html,body {
  width: 100%;
  height: 100%;
}
.app-container {
  position: relative;
  width: 100%;
  height: 100%;
  color: #fff;
  background-image: url('./assets/images/app-bg-img.jpeg');
  background-size: 100% 100%;
  background-repeat: no-repeat;
  overflow: hidden;
  ul {
    background-color: transparent;
  }
  .bottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
  }
  .border-right {
    margin: 0 1rem;
    height: 2rem;
    border-right: 1px solid #fff;
  }
}
</style>
