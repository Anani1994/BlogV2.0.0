let util = {

};

util.title = function (title, vm) {
  let newTitle = '董万宏的博客';
  if (title) {
    newTitle += ' - ' + (title.i18n ? vm.$t(title.i18n) : title);
  }
  window.document.title = newTitle;
};

export default util;
