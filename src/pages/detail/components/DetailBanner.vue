<template>
  <div class="wrapper">
    <div class="banner" @click="handleOpenGallary">
      <img
        class="banner-img"
        :src="bannerImg"
      >
      <div class="banner-info">
        <h2 class="info-title">故宫(AAAAA景区)</h2>
      </div>
      <div class="img-swiper-icon">
        <span class="iconfont img-icon">&#xe674;</span><em class="img-num">10</em>
      </div>
    </div>
    <common-gallary
      @close="handleCloseGallary"
      :gallary-img="gallaryImg"
      v-show="showGallary"
    ></common-gallary>
  </div>
</template>

<script type="text/ecmascript-6">
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  data() {
    return {
      showGallary: false,
      bannerImg: '//img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg',
      gallaryImg: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg', 'http://img1.qunarzz.com/sight/p55/201211/04/fbcab3e5d6479ce893835fbb.jpg_r_800x800_6360f514.jpg', 'http://img1.qunarzz.com/wugc/p180/201306/16/7f08e81624346b1693835fbb.jpg_r_800x800_5f03ad73.jpg']
    }
  },
  components: {
    CommonGallary
  },
  methods: {
    handleOpenGallary() {
      this.showGallary = true
    },
    handleCloseGallary() {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 55%
    .banner-img
      width: 100%
    .banner-info
      position: absolute
      left: .2rem
      right: .2rem
      bottom: .36rem
      line-height: .4rem
      color: #fff
      font-size: .36rem
    .img-swiper-icon
      position: absolute
      left: .2rem
      bottom: .86rem
      width: 1.2rem
      height: .4rem
      line-height: .4rem
      background: rgba(0, 0, 0, 0.5)
      border-radius: .2rem
      text-align: center
      font-size: .24rem
      color: #fff
      .img-icon
        font-size: .23rem
      .img-num
        margin-left: .1rem
</style>
