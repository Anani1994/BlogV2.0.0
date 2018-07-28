export const indexPage = {
  path: '/',
  name: 'index',
  component: () => import('@/views/index.vue'),
}

export const frontendPage = {
  path: '/articles/:field',
  name: 'field',
  meta: {
    title: '博文分类',
  },
  component: () => import('@/views/articles/field.vue'),
}

export const routers = [
  indexPage,
  frontendPage
];
