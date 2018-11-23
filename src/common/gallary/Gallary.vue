<template>
  <div class="wrapper">
    <div class="container" @click="handleClickGallary">
        <div class="gallary-wrapper">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item, index) in gallaryImg" :key="index">
              <img class="gallary-img" :src="item">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
        </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CommonGallary',
  props: {
    gallaryImg: {
      type: Array,
      default() {
        return []
      }
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        paginationType: 'fraction',
        observer: true,
        observeParents: true
      }
    }
  },
  methods: {
    handleClickGallary() {
      this.$emit('close')
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .container >>> .swiper-container
    overflow: inherit
  .container
    z-index: 99
    display: flex
    flex-direction: column
    justify-content: center
    position: fixed
    top: 0
    left: 0
    right: 0
    bottom: 0
    background: #000
    .gallary-wrapper
      width: 100%
      height: 0
      padding-bottom: 66.5%
      .gallary-img
        width: 100%
      .swiper-pagination
        color: #fff
        font-size: .24rem
      .swiper-pagination-fraction
        bottom: -3rem
</style>
