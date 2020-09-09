import Vue from 'vue'

import VueRouter from 'vue-router'
import {store} from './store/store.js'
import {routes} from './routes.js'
import App from './App.vue'
// import BootstrapVue from 'bootstrap-vue'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap-vue/dist/bootstrap-vue.css'


// Vue.use(BootstrapVue)
import './assets/css/custom.scss'
import './assets/css/style.scss'

Vue.use(VueRouter)
Vue.use(require('vue-moment'));

// easyui
import 'vx-easyui/dist/themes/default/easyui.css';
import 'vx-easyui/dist/themes/icon.css';
import 'vx-easyui/dist/themes/vue.css';
import EasyUI from 'vx-easyui';
Vue.use(EasyUI);

// flash
require('vue-flash-message/dist/vue-flash-message.min.css');
import VueFlashMessage from 'vue-flash-message';
Vue.use(VueFlashMessage, {
    messageOptions: {
      timeout: 3000,
    },
  });


// Loading
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
Vue.use(Loading,{
    color: 'blue'
});

//Vue select
import vSelect from 'vue-select'
Vue.component('v-select', vSelect)
import "vue-select/src/scss/vue-select.scss";

const router = new VueRouter({
  mode: 'history',
  routes,
  scrollBehavior(to,from,savedPosition){
    if(savedPosition){
      return savedPosition
    }
    if(to.hash){
      return { selector: to.hash }
    }
    // return {x: 0, y: 700}
  }
})
new Vue({
  el: '#app',
  store,
  router,
  vSelect,
  render: h => h(App)
})
