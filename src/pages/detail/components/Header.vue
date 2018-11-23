<template>
  <div class="wrapper">
    <div class="header" v-show="showHeader" :style="opacityStyle">
      <h1 class="header-title">景点详情</h1>
      <router-link to="/">
        <span class="iconfont back-icon">&#xe624;</span>
      </router-link>
    </div>
    <router-link
      tag="div"
      class="circle-back-icon-wrapper"
      v-show="!showHeader"
      to="/"
    >
      <span class="iconfont circle-back-icon">&#xe624;</span>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'DetailHeader',
  data() {
    return {
      showHeader: false,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll() {
      const heightTop = document.documentElement.scrollTop || document.body.scrollTop
      let opacity = 1
      if (heightTop > 0) {
        this.showHeader = true
        opacity = heightTop < 200 ? (heightTop / 200) : 1
      } else {
        this.showHeader = false
      }
      this.opacityStyle.opacity = opacity
    }
  },
  activated() {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~styles/variables.styl'
  .header
    position: fixed
    top: 0
    left: 0
    right: 0
    height: .86rem
    line-height: .86rem
    text-align: center
    background: $bgColor
    color: #fff
    font-size: .32rem
    .back-icon
      position: absolute
      top: 0
      left: 0
      display: block
      width: .8rem
      font-size: .4rem
      font-weight: bold
      color: #fff
  .circle-back-icon-wrapper
    position: absolute
    left: .1rem
    top: .1rem
    width: .72rem
    height: .72rem
    border-radius: 50%
    line-height: .72rem
    text-align: center
    background: #000
    opacity: .5
    .circle-back-icon
      color: #fff
      font-size: .36rem
      font-weight: bold
</style>
