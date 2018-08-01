import util from './util';

// 类接受一个对象 option 作为参数配置
// option.height 容器及每一屏的高度
// option.delay 延迟
class fullPage {
  constructor (Options) {
    this.visibleWindowHeight = innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    this.pageContainer = document.querySelector('.page-container');
    this.container = document.querySelector('.container');
    this.pages = document.querySelectorAll('.page');
    this.pageAccount = this.pages.length;
    this.currentPosition = 0;
    // 单独使用方法会丢失 this，以此来绑定 this
    this.slideToPage = this.slideToPage.bind(this);
    // 默认配置
    let defaultOptions = {
      height: this.visibleWindowHeight,
      delay: 1000,
    }
    // 合并自定义配置
    this.Options = Object.assign(defaultOptions, Options);
  }

  init () {
    this.setHeight(this.Options.height);
    this.addMouseWheel();
  }

  // 设置容器及页面高度
  setHeight (height) {
    this.pageContainer.style.height = `${height}px`;
    for (let i = 0; i < this.pageAccount; i++) {
      this.pages[i].style.height = `${height}px`;
    }
  }

  // 事件处理
  addMouseWheel () {
    // 设置节流函数
    let handleMouseWheel = util.throttle(this.slideToPage, this, this.Options.delay);
    // 添加滚动监听
    if ((navigator.userAgent.toLowerCase().indexOf("firefox") != -1)){
      document.addEventListener("DOMMouseScroll",handleMouseWheel,false);
    }
    else if (document.addEventListener) {
      document.addEventListener("mousewheel",handleMouseWheel,false);
    }
    else if (document.attachEvent) {
      document.attachEvent("onmousewheel",handleMouseWheel);
    }
    else{
      document.onmousewheel = handleMouseWheel;
    }
    // 窗口尺寸变化时重置位置
    // window.addEventListener('resize', this.handleWindowResize.bind(this));
  }

  // 是否支持 event.wheelDelta 浏览器只需在第一次加载时检测
  getWheelDelta (event) {
    if (event.wheelDelta) {
      // 第一次调用之后惰性载入，无需再做检测
      this.getWheelDelta = event => event.wheelDelta;
      return event.wheelDelta;
    } else {
      // 兼容火狐
      this.getWheelDelta = event => -event.detail;
      return -event.detail;
    }
  }

  // 滚动处理
  slideToPage (event) {
    //mousewheel事件中的 “event.wheelDelta” 属性值：返回的如果是正值说明滚轮是向上滚动
    //DOMMouseScroll事件中的 “event.detail” 属性值：返回的如果是负值说明滚轮是向上滚动
    let delta = this.getWheelDelta(event);
    if (delta > 0) {
      this.upGlide(this.Options.height);
    } else {
      this.downGlide(this.Options.height);
    }
  }

  // 上滑
  upGlide (height) {
    if (this.container.offsetTop < 0) {
      this.currentPosition += height;
      this.toPage(this.currentPosition); 
    }
  }

  // 下滑
  downGlide (height) {
    if (this.container.offsetTop >= - this.visibleWindowHeight * (this.pageAccount - 2)) {
      this.currentPosition -= height;
      this.toPage(this.currentPosition); 
    }
  }

  // 滑动至指定位置
  toPage (top) {
    this.container.style.top = `${top}px`;
  }

  // 设置防抖动函数
  handleWindowResize(event) {
    // util.debounce(this.getNewPosition, this, event, this.Options.delay);
  }
  // 重新获取高度便设置
  getNewPosition () {
    // set activeNavLi
    // get currentPosition & to the page
  }
}

export default fullPage;
