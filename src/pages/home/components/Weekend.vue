<template>
  <div class="weekend">
    <h2 class="title">周末去哪儿</h2>
    <div class="weekend-item" v-for="item in weekendList" :key="item.id">
      <div class="img-wrapper">
        <img class="item-img" :src="item.imgUrl">
      </div>
      <div class="weekend-info">
        <p class="info-name">{{item.name}}</p>
        <p class="info-desc">{{item.desc}}</p>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixin.styl'
  .title
    overflow: hidden
    width: 100%
    height: .8rem
    line-height: .8rem
    background: #f5f5f5
    text-indent: .2rem
  .weekend-item
    width: 100%
    height: 0
    overflow: hidden
    padding-bottom: 53.86%
    border-bottom: .12rem solid #f5f5f5
    &:last-child
      border-bottom: none
    .img-wrapper
      width: 100%
      height: 0
      overflow: hidden
      padding-bottom: 36.51%
      background: #eee
      .item-img
        width: 100%
    .weekend-info
      padding: .14rem .2rem .2rem .2rem
      .info-name
        padding-right: 1.4rem
        line-height: .48rem
        font-size: .28rem
        color: $textColor
        ellipsis()
      .info-desc
        padding-right: 1.4rem
        line-height: .42rem
        font-size: .24rem
        color: $descColor
        ellipsis()
</style>
