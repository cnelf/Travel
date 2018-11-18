<template>
  <div class="wrapper">
    <ul class="listing border-topbottom">
      <li class="listing-left border-right"><span class="iconfont">&#xe62f;</span>定位失败</li>
      <li class="listing-right"><span class="iconfont">&#xe689;</span>必游榜单</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeListing'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~styles/variables.styl'
  .listing
    display: flex
    width: 100%
    height: .98rem
    line-height: .98rem
    font-size: .28rem
    text-align: center
    color: $textColor
    .listing-left
      flex: 1
      .iconfont
        margin-right: .05rem
        font-size: .32rem
        color: #616161
    .listing-right
      flex: 1
      .iconfont
        margin-right: .05rem
        font-size: .32rem
        color: #616161

</style>
