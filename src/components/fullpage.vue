<style lang="less">
.page-container {
  overflow: hidden;
  &>.container {
    position: relative;
    top: 0;
    transition: top 1000ms ease;
  }
}
</style>

<template>
  <div class="page-container">
    <div class="container">
      <div class="page" style="background: #5cadff;">1</div>
      <div class="page" style="background: #2d8cf0;">2</div>
      <div class="page" style="background: #2db7f5;">3</div>
      <div class="page" style="background: #2d85e4;">4</div>
    </div>
  </div>
</template>

<script>
import fullPage from '../libs/fullpage.js'
export default {
  mounted() {
    new fullPage({
      height: document.body.clientHeight - 90,
      delay: 2000
    }).init();
  }
}
</script>

