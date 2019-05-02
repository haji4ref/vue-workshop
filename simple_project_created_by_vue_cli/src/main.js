import Vue from 'vue'
import App from './App.vue'

const axios = require('axios');

// TODO : put router in another file
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import Order from './components/Order.vue'

const routes = [
    {path: '/order', component: Order},
]

const router = new VueRouter({
    routes
})

window.axios = axios;

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
