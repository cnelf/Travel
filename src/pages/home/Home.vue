<template>
  <div class="wrapper">
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconsList="iconsList"></home-icons>
    <home-listing></home-listing>
    <split></split>
    <home-favorites :favoritesList="favoritesList"></home-favorites>
    <home-weekend :weekendList="weekendList"></home-weekend>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import { mapState } from 'vuex'
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeListing from './components/Listing'
import HomeFavorites from './components/Favorites'
import HomeWeekend from './components/Weekend'
import Split from './components/Split'

export default {
  name: 'Home',
  data() {
    return {
      lastCity: '',
      swiperList: [],
      iconsList: [],
      favoritesList: [],
      weekendList: []
    }
  },
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeListing,
    Split,
    HomeFavorites,
    HomeWeekend
  },
  computed: {
    ...mapState({
      city: 'city'
    })
  },
  methods: {
    getHomeInfo() {
      axios.get(`/api/index.json?city=${this.lastCity}`)
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res) {
      const response = res.data
      if (response.ret && response.data) {
        const data = response.data
        this.swiperList = data.swiperList
        this.iconsList = data.iconsList
        this.favoritesList = data.favoritesList
        this.weekendList = data.weekendList
      }
    }
  },
  mounted() {
    this.lastCity = this.city
    this.getHomeInfo()
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
</style>
