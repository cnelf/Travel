<template>
  <div class="wrapper">
    <div class="search">
      <input class="search-input" type="text" placeholder="输入城市名或拼音">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CitySearch'
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
</style>
