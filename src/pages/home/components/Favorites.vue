<template>
  <div class="wrapper">
    <div class="title">
      <img class="title-img" src="http://img1.qunarzz.com/piao/fusion/1711/89/ebc329f16c55bb02.png" alt="猜你喜欢">
      <span class="title-text">猜你喜欢</span>
    </div>
    <ul class="list">
      <li class="item border-bottom" v-for="item in favorites" :key="item.id">
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
  data() {
    return {
      favorites: [{
        id: '0001',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
        title: '故宫',
        desc: '世界五大宫之首，穿越与您近在咫尺',
        price: '20'
      }, {
        id: '0002',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1708/2b/2b3b94de99c0a425a3.img.jpg_200x200_2458ffb2.jpg',
        title: '八达岭长城',
        desc: '不到长城非好汉',
        price: '157.5'
      }, {
        id: '0003',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1709/e4/e48857f2ce5e53a7a3.img.jpg_200x200_8ee069fe.jpg',
        title: '远去的恐龙',
        desc: '一部不可思议的巨制演艺作品',
        price: '150'
      }, {
        id: '0004',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_200x200_99ae30ee.jpg',
        title: '北京欢乐谷',
        desc: '亚洲唯一飞行式过山车等你来挑战',
        price: '29.1'
      }, {
        id: '0005',
        imgUrl: 'http://img1.qunarzz.com/sight/p0/1505/d2/d274c92de14c93da.water.jpg_200x200_2cce447f.jpg',
        title: '颐和园',
        desc: '中国现存最大的皇家园林',
        price: '36'
      }]
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
