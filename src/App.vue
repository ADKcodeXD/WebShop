<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <!-- home 或者search 下 显示  登录或者注册是隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
  import Header from './components/Header'
  import Footer from './components/Footer';
  import router from '@/router'
  export default {
    name: 'App',
    components: {
      Header,
      Footer
    },mounted() {
      //这种用到一次就不需要再使用的数据 在appvue里面派发一次就不再派发
      this.$store.dispatch('categoryList');
      this.$store.dispatch("getUserInfo");
    },
    router,
  }
</script>

<style>

</style>