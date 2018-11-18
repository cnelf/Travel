<template>
  <div class="wrapper">
    <home-header></home-header>
    <home-swiper></home-swiper>
    <home-icons></home-icons>
    <home-listing></home-listing>
    <split></split>
    <home-favorites></home-favorites>
    <home-weekend></home-weekend>
  </div>
</template>

<script type="text/ecmascript-6">
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeListing from './components/Listing'
import HomeFavorites from './components/Favorites'
import HomeWeekend from './components/Weekend'
import Split from './components/Split'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeListing,
    Split,
    HomeFavorites,
    HomeWeekend
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
