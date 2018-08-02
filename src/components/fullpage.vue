<style lang="less">
.page-container {
  overflow: hidden;
  &>.container {
    position: relative;
    top: 0;
    transition: top 1000ms ease;
    .side-nav {
      display: flex;
      flex-direction: column;
      position: fixed;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      list-style-type: none;
      li {
        margin: .5rem 0;
        padding: .3rem;
        background: red;
        border-radius: 50%;
        cursor: pointer;
      }
      .active {
        background: #fff
      }
    }
  }
  .test-nav {
    position: fixed;
    top: 70px;
    right: 50px;
    .active {
      color: #ff0000;
    }
  }
}
</style>

<template>
  <div class="page-container">
    <div class="container">
      <div class="page" style="background: #5cadff;">1
        <div class="test-nav">
          <div class="test">1</div>
          <div class="test">2</div>
          <div class="test">3</div>
          <div class="test">4</div>
        </div>
      </div>
      <div class="page" style="background: #2d8cf0;">2</div>
      <div class="page" style="background: #2db7f5;">3</div>
      <div class="page" style="background: #2d85e4;">4</div>
    </div>
  </div>
</template>

<script>
import fullPage from '../libs/fullPage.js'
export default {
  name: 'FullPage',
  data() {
    return {
      fullPage: null
    }
  },
  mounted() {
    this.fullPage = new fullPage({
      height: document.body.clientHeight - 90,
      delay: 1000,
      showSideNav: true,
      showAppointedNode: '.test'
    });
    this.fullPage.init();
  }
}
</script>
