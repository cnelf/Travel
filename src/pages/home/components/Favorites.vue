<template>
  <div class="wrapper">
    <div class="title">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
      <span class="title-text">猜你喜欢</span>
    </div>
    <ul class="list">
      <li class="item border-bottom" v-for="item in favoritesList" :key="item.id">
        <img class="item-img" :src="item.imgUrl">
        <div class="item-info">
          <h1 class="info-title">{{item.title}}</h1>
          <div class="info-desc">{{item.desc}}</div>
          <div class="info-price">
            <span class="price-tag">¥<em class="price-num">{{item.price}}</em></span>起
          </div>
          <button class="info-button">查看详情</button>
        </div>
      </li>
    </ul>
    <div class="search-all">查看所有产品</div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'HomeFavorites',
  props: {
    favoritesList: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixin.styl'
  .title
    box-sizing: border-box
    padding: .24rem 0 .26rem
    width: 100%
    height: .94rem
    font-size: 0
    .title-img
      display: inline-block
      width: .3rem
      height: .3rem
      margin-left: .2rem
      vertical-align: top
    .title-text
      margin-left: .08rem
      height: .44rem
      line-height: .44rem
      font-size: .32rem
      color: $textColor
  .list
    .item
      height: 2rem
      display: flex
      overflow: hidden
      padding: .2rem 0 .2rem .24rem
      .item-img
        width: 2rem
        height: 2rem
      .item-info
        flex: 1
        position: relative
        padding-left: .22rem
        width: 100%
        min-width: 0
        .info-title
          margin-top: .26rem
          height: .44rem
          line-height: .44rem
          font-size: .32rem
          color: $textColor
          ellipsis()
        .info-desc
          margin-top: .14rem
          line-height: .4rem
          font-size: .28rem
          color: $descColor
          ellipsis()
        .info-price
          margin-top: .22rem
          line-height: .4rem
          font-size: .24rem
          color: #616161
          .price-tag
            color: $priceColor
            .price-num
              font-size: .4rem
        .info-button
          position: absolute
          right: 25px
          bottom: 7px
          height: .44rem
          line-height: .44rem
          padding: 0 .2rem
          background: #ff9300
          border-radius: .06rem
          color: #fff
          font-size: .24rem
          font-weight: bold
  .search-all
    height: .8rem
    line-height: .8rem
    text-align: center
    font-size: .28rem
    color: #00afc7
</style>
