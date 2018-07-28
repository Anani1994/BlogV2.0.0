<template>
  <div class="app-container">
    <Menu mode="horizontal" active-name="main">
      <div class="float-left px-1 text-white">
        <Icon type="android-globe"></Icon>
        董万宏的博客
      </div>
      <MenuItem class="float-right" name="github">
        <a class="text-white" href="https://github.com/Anani1994">
          <Icon type="social-github-outline"></Icon>
          Github
        </a>
      </MenuItem>
      <MenuItem class="float-right" name="cnblogs">
        <a class="text-white" href="http://www.cnblogs.com/anani/">
          <Icon type="android-bicycle"></Icon>
          博客园
        </a>
      </MenuItem>
      <Submenu class="float-right text-white" name="articles">
        <template slot="title">
          <Icon type="ios-book-outline"></Icon>
          博文
        </template>
        <MenuGroup title="前端">
          <MenuItem name="FE-0">
            <Icon type="social-html5-outline"></Icon>
            HTML
          </MenuItem>
          <MenuItem name="FE-1">
            <Icon type="social-css3-outline"></Icon>
            CSS
          </MenuItem>
          <MenuItem name="FE-2">
            <Icon type="social-javascript-outline"></Icon>
            JavaScript
          </MenuItem>
          <MenuItem name="FE-3" @click.native="toPage('field',{ field: 'all'})">
            <Icon type="social-javascript-outline"></Icon>
            All
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="后端">
          <MenuItem name="BE-0">
            <Icon type="android-cloud-outline"></Icon>
            数据库
          </MenuItem>
        </MenuGroup>
        <MenuGroup title="其它">
          <MenuItem name="OT-0">
            <Icon type="ios-person-outline"></Icon>
            搭建博客
          </MenuItem>
        </MenuGroup>
      </Submenu>
      <MenuItem class="float-right" name="main">
        <a class="text-white" href="./">
          <Icon type="home"></Icon>
          首页
        </a>
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
export default {
  data() {
    return {
    }
  },
  methods: {
    toPage(nameStr,dataObj) {
      let obj = {
        name: nameStr,
        params: dataObj,
      };
      this.$router.push(obj);
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
    color: #fff;
  }
  .border-right {
    margin: 0 1rem;
    height: 2rem;
    border-right: 1px solid #fff;
  }
}
</style>
