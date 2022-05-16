import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    { path: '/', component: '@/pages/index' },
    { path: '/ReactHooks', component: '@/pages/React/22' },
    { path: '/Project', component: '@/pages/Project/index' },
  ],
  fastRefresh: {},
  mfsu: {}
});
