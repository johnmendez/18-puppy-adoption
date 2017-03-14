import 'whatwg-fetch';
import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './routes/application.vue';
import Index from './routes/index.vue';
// Register the new route with the Vue router in index.js
// so that the URL is /new when the new page shows up
import New from './routes/new.vue';
// Register the detail route with the Vue router in index.js
// so that the URL is /:id when the new page shows up
import Detail from './routes/detail.vue';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index,
  },
  {
    path: '/new',
    name: 'new',
    component: New,
  },
  {
    path: '/:id',
    name: 'detail',
    component: Detail,
  },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

const app = new Vue({ ...App, router }).$mount('.app');
