<template>
  <div class="wrapper">
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :letter="letter" :cities="cities" :hotCities="hotCities"></city-list>
    <city-alphabet @change="handleLetterChange" :cities="cities"></city-alphabet>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios'
import CityHeader from './components/Header'
import CitySearch from './components/Search'
import CityList from './components/List'
import CityAlphabet from './components/Alphabet'

export default {
  name: 'City',
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: ''
    }
  },
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc)
    },
    getCityInfoSucc(res) {
      const response = res.data
      if (response.ret && response.data) {
        const data = response.data
        this.cities = data.cities
        this.hotCities = data.hotCities
      }
    },
    handleLetterChange(letter) {
      this.letter = letter
    }
  },
  mounted() {
    this.getCityInfo()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
