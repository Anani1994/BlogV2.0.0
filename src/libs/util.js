let util = {

};

util.title = function (title, vm) {
  let newTitle = '董万宏的博客';
  if (title) {
    newTitle += ' - ' + (title.i18n ? vm.$t(title.i18n) : title);
  }
  window.document.title = newTitle;
};

util.toPage = function (nameStr,dataObj) {
  let obj = {
    name: nameStr,
    params: dataObj,
  };
  this.$router.push(obj);
}

// 节流函数，method 回调函数，context 上下文，delay 延迟
util.throttle = function (method, context, delay) {
  let wait = false;
  return function() {
    if (!wait) {
      method.apply(context, arguments);
      wait = true;
      setTimeout(() => {
        wait = false;
      }, delay);
    }
  }
};

// 防抖动函数，method 回调函数，context 上下文，event 传入的时间，delay 延迟
util.debounce = function (method, context, event, delay) {
  clearTimeout(method.tId);
  method.tId = setTimeout(() => {
    method.call(context, event);
  }, delay);
}

// this fun is created for a block named BoWen
util.toTop = function (eleId, n = 0) {
  let target = document.querySelector(eleId);
  let parent = document.querySelector('.innerContainer');
  // parent.scrollTop = target.offsetTop - n;
  $(parent).animate({scrollTop: target.offsetTop - n},"slow");
}

export default util;
