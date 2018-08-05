import FullPage from './fullpage/fullpage.vue';
import PageItem from './fullpage/components/page.vue';

const defineSubassemblies = {
    install:function (Vue) {
        Vue.component('FullPage',FullPage);
        Vue.component('PageItem',PageItem);
    }
};

export default defineSubassemblies;
