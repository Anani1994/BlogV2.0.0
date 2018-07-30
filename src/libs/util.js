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

export default util;
