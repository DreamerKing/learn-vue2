import Vue from "vue";
import VueRouter from "vue-router";
import App from "./app.vue";

Vue.use(VueRouter);

const routes = [
	{ path: "/", name: "app", component: App }
];

const router = new VueRouter({
	routes
});

new Vue({
	router
}).$mount("#root");