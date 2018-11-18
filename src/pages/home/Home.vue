<template>
  <div class="wrapper">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-listing></home-listing>
    <split></split>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeListing from './components/Listing'
import Split from './components/Split'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeListing,
    Split
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
