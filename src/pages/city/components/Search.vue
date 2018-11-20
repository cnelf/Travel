<template>
  <div class="wrapper">
    <div class="search">
      <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
    <div class="search-content" ref="search" v-show="keyword">
      <ul class="search-list">
        <li class="search-item border-bottom" v-for="item in searchResult" :key="item.id">
          {{item.name}}
        </li>
        <li class="search-empty" v-show="hasNoData">没有找到匹配的城市</li>
      </ul>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  data() {
    return {
      keyword: '',
      timer: null,
      searchResult: []
    }
  },
  props: {
    cities: {
      type: Object
    }
  },
  computed: {
    hasNoData() {
      return !this.searchResult.length
    }
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer)
      }
      if (!this.keyword) {
        this.searchResult = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        for (const key in this.cities) {
          if ({}.hasOwnProperty.call(this.cities, key)) {
            this.cities[key].forEach((value) => {
              if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                result.push(value)
              }
            })
          }
        }
        this.searchResult = result
      }, 100)
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~styles/variables.styl'
  .search
    height: .72rem
    padding: 0 .1rem
    background: $bgColor
    .search-input
      box-sizing: border-box
      padding: 0 .1rem
      width: 100%
      height: .62rem
      line-height: .62rem
      text-align: center
      border-radius: .06rem
      color: #666
  .search-content
    position: absolute
    top: 1.58rem
    left: 0
    right: 0
    bottom: 0
    overflow: hidden
    background: #ccc
    z-index: 1
    .search-list
      line-height: .9rem
      text-indent: .2rem
      background: #fff
</style>
