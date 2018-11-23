<template>
  <div class="base-info">
    <div class="flex-card border-bottom">
      <div class="comment-card border-right">
        <div class="comment-first-line">
          <span class="comment-score">5.0</span>
          <span class="comment-text">分</span>
          <span class="comment-desc">超赞</span>
        </div>
        <div class="comment-second-line">
          <span class="total-comment-num">333318条评论</span>
          <span class="total-comment-num">90条攻略</span>
        </div>
        <span class="iconfont comment-arrow-right-icon">&#xe62d;</span>
      </div>
      <div class="sight-card">
        <div class="sight-first-line">
          <span class="sight-title">景点简介</span>
        </div>
        <div class="sight-second-line">
          <span class="sight-text">开放时间、贴士</span>
        </div>
        <span class="iconfont sight-arrow-right-icon">&#xe62d;</span>
      </div>
    </div>
    <div class="base-info-address">
      <p class="address-text">
        <span class="iconfont position-icon">&#xe62f;</span>
        北京市东城区景山前街4号
        <span class="iconfont arrow-right-icon">&#xe62d;</span>
      </p>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'DetailBaseInfo'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .base-info
    position: relative
    top: -.1rem
    padding: .1rem .2rem 0 .2rem
    border-radius: .1rem .1rem 0 0
    background: #fff
    .flex-card
      display: flex
      padding: .1rem 0 .2rem
      .comment-card
        position: relative
        flex: 1
        .comment-first-line
          font-size: 0
          color: #ff8300
          .comment-score
            line-height: .44rem
            font-size: .44rem
          .comment-text
            line-height: .48rem
            font-size: .28rem
          .comment-desc
            line-height: .48rem
            margin-left: .2rem
            font-size: .28rem
        .comment-second-line
          line-height: .32rem
          color: #9e9e9e
          font-size: 0
          .total-comment-num
            font-size: .24rem
            margin-right: .2rem
        .comment-arrow-right-icon
          position: absolute
          top: .3rem
          right: .2rem
          font-size: .24rem
          color: #9e9e9e
      .sight-card
        position: relative
        flex: 1
        .sight-first-line
          .sight-title
            line-height: .48rem
            font-size: .28rem
            padding-left: .3rem
        .sight-second-line
          .sight-text
            font-size: .24rem
            padding-left: .3rem
            color: #9e9e9e
        .sight-arrow-right-icon
          position: absolute
          top: .3rem
          right: 0
          font-size: .24rem
          color: #9e9e9e
    .base-info-address
      line-height: .36rem
      padding: .2rem 0
      .address-text
        position: relative
        padding-left: .56rem
        padding-right: .56rem
        .position-icon
          position: absolute
          left: 0
          top: 0
          color: #9e9e9e
          font-size: .36rem
        .arrow-right-icon
          position: absolute
          right: 0
          top: 0
          font-size: .24rem
          color: #9e9e9e
</style>
