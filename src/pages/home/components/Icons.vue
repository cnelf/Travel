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
      },
      swiperList: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        imgDesc: '景点门票'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        imgDesc: '北京必游'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        imgDesc: '一日游'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        imgDesc: '文化古迹'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
        imgDesc: '动植物园'
      }, {
        id: '0006',
        imgUrl: 'https://img1.qunarzz.com/piao/fusion/1803/20/831d62d2e1c7be02.png',
        imgDesc: '打卡圣地'
      }, {
        id: '0007',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
        imgDesc: '野生动物园'
      }, {
        id: '0008',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
        imgDesc: '泡温泉'
      }, {
        id: '0009',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/6c/9e54a8540fee0102.png',
        imgDesc: '故宫'
      }, {
        id: '0010',
        imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
        imgDesc: '全部玩乐'
      }]
    }
  },
  computed: {
    pages() {
      const pages = []
      this.swiperList.forEach((item, index) => {
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
