import Vue from 'vue'
import App from './App.vue'
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
import store from '@/store'

Vue.config.productionTip = false
Vue.component(TypeNav.name,TypeNav)
Vue.component(Carousel.name,Carousel)
Vue.component(Pagination.name,Pagination)
import "@/mock/mockServe";
import "swiper/css/swiper.css"




new Vue({
  beforeCreate(){
    Vue.prototype.$bus=this
  },
  render: h => h(App),
  store
}).$mount('#app')