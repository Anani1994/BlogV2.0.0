import articlesInfo from '../data/articles';

export const indexPage = {
  path: '/',
  name: 'index',
  component: () => import('@/views/index.vue'),
};

export const fieldPage = {
  path: '/articles/field',
  name: 'field',
  meta: {
    title: '博文分类',
  },
  component: () => import('@/views/articles/field.vue'),
};

// 用于测试
export const testRouter = {
  path: '/components/fullpage',
  name: 'compo',
  meta: {
    title: '通用组件测试'
  },
  component: () => import('@/components/fullpage.vue')
}

let articlesPage = [];
articlesInfo.forEach((cur) => {
  let pathObj = {
    path: cur.path,
    name: cur.pathName,
    meta: {
      title: cur.name
    },
    component: cur.component,
  };
  articlesPage.push(pathObj);
});

export const routers = [
  indexPage,
  fieldPage,
  testRouter,
  ...articlesPage
];
