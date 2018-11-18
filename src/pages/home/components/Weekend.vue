<template>
  <div class="weekend">
    <h2 class="title">周末去哪儿</h2>
    <div class="weekend-item" v-for="item in weekend" :key="item.id">
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
  data() {
    return {
      weekend: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/f3/86173f863bef61.jpg_r_640x214_52b003ac.jpg',
        name: '京城人的周末撒欢地',
        desc: '在帝都过周末，不仅仅是城中游！'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1811/7e/476589267ebb41.jpg_r_640x214_bf599709.jpg',
        name: '京城欢乐亲子游',
        desc: '德智体美劳全面发展的亲子日，这些地方该去看看…'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/source/1510/6e/1ea71e2f04e.jpg_r_640x214_aa6f091d.jpg',
        name: '京城有好泉',
        desc: '细数北京温泉，温暖你的冬天'
      }]
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
