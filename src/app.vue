<template>
  <div class="app-container" :style="{background: allBgColor}">
    <Menu mode="horizontal" :active-name="this.activeName">
      <div class="float-left px-1 text-white">
        <Icon type="android-globe"></Icon>
        码良的博客
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
        <MenuItem name="vue-market" @click.native="window.location.href='http://anani.coding.me/blog/blog/projects/vue-market/index.html#/login'">
          <Icon type="md-appstore" />
          购物商城
        </MenuItem>
        <MenuItem name="vue-market" @click.native="window.location.href='https://anani1994.github.io/anani1994.github.io/blog/projects/old-blog/index.html'">
          <Icon type="md-alert" />
          前往旧博客
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
    <template v-if="showSearch">
      <div class="search-container">
        <div class="search-content">
          <Input
            size="large"
            clearable
            search
            v-model="searchValue">
            <Select v-model="searchType" slot="prepend" style="width: 100px">
              <Option value="git">Git 命令</Option>
              <Option value="dos">终端命令</Option>
            </Select>
          </Input>
          <ul class="mt-1">
            <li v-for="item in filteredGitCommandsInfo" :key="item.id">
              <pre class="custom-pre" @click="searchToPage(item.pathName)">{{item.command}}</pre> {{item.title}}
            </li>
          </ul>
        </div>
      </div>
    </template>
    <div class="bottom">
      Created in 2018<span class="border-right">
      </span>网站开发者：<a class="text-white" href="">码良</a>
      <span class="border-right"></span>
      <span class="time"></span>
    </div>
  </div>
</template>

<script>
import gitCommandsInfo from './data/git-command.js';
import util from './libs/util.js';
export default {
  data() {
    return {
      toPage: util.toPage,
      window,
      showSearch: false,
      searchValue: '',
      searchType: 'git'
    }
  },
  methods: {
    searchToPage(arg) {
      this.toPage(arg);
      this.showSearch = false;
    }
  },
  computed: {
    activeName() {
      return this.$store.state.activeName;
    },
    allBgColor() {
      return this.$store.state.allBgColor;
    },
    filteredGitCommandsInfo() {
      return gitCommandsInfo;
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
  },
  created() {
    document.onkeyup = (event) => {
      if (event.ctrlKey && 32 === event.keyCode) {
        if (!this.showSearch) {
          this.showSearch = !this.showSearch;
        }
      }
      if (27 === event.keyCode) {
        if (this.showSearch) {
          this.showSearch = !this.showSearch;
        }
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
  background:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.5)),url('./assets/images/app-bg-img.jpeg');
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
  .search-container {
    z-index: 9999;
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100%;
    background-color: rgba(0,0,0,.5);
  }
  .search-content {
    width: 50%;
    margin: 60px auto 10px;
    li {
      margin-bottom: 5px;
      list-style-type: none;
      &:hover {
        background-color: #606060;
      }
      pre:hover {
        cursor: pointer;
      }
    }
  }
}
</style>
