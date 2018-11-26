<template>
  <div class="recommend">
    <h2 class="promote border-bottom">
      <img class="promote-icon" src="http://img1.qunarzz.com/piao/fusion/1711/16/bfbb9874e8f11402.png">
      <span class="promote-text">去哪儿推荐</span>
    </h2>
    <div class="content border-bottom" v-for="item in recommend" :key="item.id">
      <div class="ticket">
        <h5 class="title">{{item.title}}</h5>
        <div class="desc">
          <img class="desc-icon" src="https://img1.qunarzz.com/piao/fusion/1804/25/792e9929973a9902.png">{{item.desc}}
        </div>
        <ul class="tags">
          <li
            class="tag-item border"
            v-for="(tag, index) in item.tags"
            :key="index"><img v-if="tag == '自营'"
            class="item-icon"
            src="https://img1.qunarzz.com/piao/fusion/1804/b0/c3cf2897c74ecc02.png"
          >{{tag}}</li>
        </ul>
      </div>
      <div class="pay">
        <div class="pay-price">
          ¥<em class="price-num">{{item.price}}</em>
        </div>
        <div class="pay-button">预订</div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'DetailRecommend',
  props: {
    recommend: {
      type: Array
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .recommend
    padding-left: .2rem
    .promote
      position: relative
      padding: 0 .2rem
      height: .88rem
      line-height: .88rem
      font-size: 0
      text-indent: .36rem
      .promote-icon
        position: absolute
        left: 0
        top: .26rem
        width: .36rem
        height: .36rem
      .promote-text
        font-size: .32rem
        color: #333
    .content
      display: flex
      padding: .2rem .2rem .24rem 0
      &:last-child::before
        border-bottom: none
      .ticket
        flex: 2.92
        .title
          margin-right: .1rem
          line-height: .52rem
          font-size: .3rem
        .desc
          height: .32rem
          line-height: .32rem
          font-size: .24rem
          color: #616161
          .desc-icon
            display: inline-block
            width: .2rem
            max-height: .32rem
            vertical-align: 0
            margin-right: .04rem
        .tags
          font-size: 0
          .tag-item
            display: inline-block
            margin-top: .08rem
            margin-right: .1rem
            height: .32rem
            line-height: .32rem
            padding: 0 .04rem
            font-size: .2rem
            color: #00afc7
            .item-icon
              display: inline-block
              width: .2rem
              max-height: .32rem
              margin-right: .04rem
      .pay
        display: flex
        width: 88px
        flex-direction: column
        justify-content: center
        padding-left: .2rem
        .pay-price
          height: .4rem
          line-height: .4rem
          font-size: .24rem
          color: #ff9800
          text-align: center
          .price-num
            margin-left: .04rem
            font-size: .4rem
        .pay-button
          height: .6rem
          line-height: .6rem
          font-size: .28rem
          color: #fff
          background-image: linear-gradient(130deg,#ffab1e 37%,#ff8c12 100%)
          border-radius: .08rem
          text-align: center
</style>
