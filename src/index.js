import Vue from 'vue';
import VueRouter from 'vue-router';

import App from './App';
import Style from './Style';
import For from './For.vue';
import Condition from './Condition.vue';

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'app', component: App },
  { path: '/condition', component: Condition },
  { path: '/for', component: For },
  { path: '/style', name: 'learn-style', component: Style }
];

const router = new VueRouter({
  mode: "history",			
  routes
});

const vm = new Vue({
  router
}).$mount('#root');

window.vm = vm;