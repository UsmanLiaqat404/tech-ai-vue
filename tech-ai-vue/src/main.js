import Vue from 'vue'
import WOW from 'wowjs';
import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay]);

import App from './App'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  mounted() {
    new WOW.WOW().init(); // Initialize WOW.js
  },
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
