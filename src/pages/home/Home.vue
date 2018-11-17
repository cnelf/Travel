<template>
  <div class="wrapper">
    <home-header></home-header>
    <home-swiper></home-swiper>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
