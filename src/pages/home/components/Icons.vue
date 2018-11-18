<template>
  <div class="swiper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) in pages" :key="index">
        <div class="wrapper">
            <div class="icons">
              <div class="icon-wrapper" v-for="item in page" :key="item.id">
                <img class="icon-img" :src="item.imgUrl">
                <p class="icon-desc">{{item.imgDesc}}</p>
              </div>
            </div>
        </div>
      </swiper-slide>
      <div v-if="pages.length>1" class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeIcons',
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination'
      }
    }
  },
  props: {
    iconsList: {
      type: Array
    }
  },
  computed: {
    pages() {
      const pages = []
      this.iconsList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixin.styl'
  .swiper >>> .swiper-pagination-bullets
    bottom: 6px
  .swiper >>> .swiper-pagination-bullet
    width: 6px
    height: 6px
    background: rgba(0,175,190,.8)
  .wrapper
    position: relative
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 50%
    background: #fff
    .icons
      position: absolute
      top: .1rem
      left: 0
      right: 0
      bottom: 0
      .icon-wrapper
        position: relative
        float: left
        width: 25%
        height: 0
        padding-bottom: 21.5%
        overflow: hidden
        .icon-img
          display: block
          width: 58.66%
          margin: 0 auto
          margin-top: .1rem
        .icon-desc
          margin-top: .1rem
          text-align: center
          color: $textColor
          ellipsis()
</style>
