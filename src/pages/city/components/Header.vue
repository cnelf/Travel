<template>
  <div class="wrapper">
    <div class="header">
      <h1 class="header-title">城市选择</h1>
      <router-link to="/">
        <span class="iconfont back-icon">&#xe624;</span>
      </router-link>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~styles/variables.styl'
  .header
    position: relative
    overflow: hidden
    hidden: .86rem
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
      font-weight: bold
      color: #fff
</style>
