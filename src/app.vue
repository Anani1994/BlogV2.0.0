<template>
  <div class="app-container" :style="{background: allBgColor}">
    <Menu mode="horizontal" :active-name="this.activeName">
      <div class="float-left px-1 text-white">
        <Icon type="android-globe"></Icon>
        董万宏的博客
      </div>
      <MenuItem class="float-right" name="github" @click.native="window.location.href='https://github.com/Anani1994'">
          <Icon type="logo-github" />
          Github
      </MenuItem>
      <MenuItem class="float-right" name="cnblogs" @click.native="window.location.href='http://www.cnblogs.com/anani/'">
        <Icon type="ios-planet-outline" />
        博客园
      </MenuItem>
      <Submenu class="float-right" name="projects">
        <template slot="title">
          <Icon type="ios-folder-outline" />
          项目演示
        </template>
        <MenuItem name="vue-market" @click.native="window.location.href='https://anani1994.github.io/anani1994.github.io/blog/projects/vue-market/index.html'">
          <Icon type="md-appstore" />
          购物商城
        </MenuItem>
        <MenuItem name="vue-market" @click.native="window.location.href='https://anani1994.github.io/blog/blog-project/2017/09/cartoon-qixi.html'">
          <Icon type="md-people" />
          情人节动画(仿制)
        </MenuItem>
      </Submenu>
      <MenuItem class="float-right" name="articles" @click.native="toPage('field')">
        <Icon type="ios-book-outline"></Icon>
        博文
      </MenuItem>
      <MenuItem class="float-right" name="main" @click.native="toPage('index')">
        <Icon type="ios-home-outline" />
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
    },
    allBgColor() {
      return this.$store.state.allBgColor;
    }
  },
  mounted() {
    setInterval(() => { let result = this.$util.formatDate();document.querySelector('.time').innerHTML = result; },1000);
    if (localStorage.defaultAllBgColor) {
      this.$store.commit('setAllBgColor',localStorage.defaultAllBgColor);
    }
    if (localStorage.defaultBowenBgColor) {
      this.$store.commit('setBowenBgColor',localStorage.defaultBowenBgColor);
    }
    if (localStorage.defaultBgColor) {
      this.$store.commit('setBgColor',localStorage.defaultBgColor);
    } else {
      if (localStorage.defaultBgColor !== '') {
        this.$store.commit('setBgColor','rgba(35,36,31,.8)');
      }
    }
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
  background-image: url('./assets/images/app-bg-img.jpg');
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
