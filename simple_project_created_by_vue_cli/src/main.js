import Vue from 'vue'
import App from './App.vue'

const axios = require('axios');

// TODO : put router in another file
import VueRouter from 'vue-router'

Vue.use(VueRouter);

import router from './router'

window.axios = axios;

Vue.config.productionTip = false;

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')
