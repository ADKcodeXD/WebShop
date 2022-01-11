import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import store from '@/store'
import {Button,MessageBox} from 'element-ui'
import VueLazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
Vue.component(Button.name,Button)

import "@/mock/mockServe";
import "swiper/css/swiper.css"
import * as API from '@/api';
import "@/plugins/validate.js"
Vue.prototype.$msgbox=MessageBox;

new Vue({
  beforeCreate(){
    Vue.prototype.$bus=this;
    Vue.prototype.$API=API
  },
  render: h => h(App),
  store
}).$mount('#app')