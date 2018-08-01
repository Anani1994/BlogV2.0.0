<style lang="less">
.page-container {
  overflow: hidden;
  height: 200px; // 测试
  &>.container {
    position: relative;
    top: 0;
    &>.page {
      height: 200px; // 测试
    }
  }
}
</style>

<template>
  <div class="page-container">
    <div class="container">
      <div class="page" style="background: #5cadff;"></div>
      <div class="page" style="background: #2d8cf0;"></div>
      <div class="page" style="background: #2db7f5;"></div>
      <div class="page" style="background: #2d85e4;"></div>
    </div>
  </div>
</template>
