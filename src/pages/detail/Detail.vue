<template>
  <div class="wrapper">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <detail-base-info></detail-base-info>
    <Split></Split>
    <detail-recommend></detail-recommend>
    <Split></Split>
    <div class="content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Split from 'common/split/Split'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailBaseInfo from './components/BaseInfo'
import DetailRecommend from './components/Recommend'

export default {
  name: 'Detail',
  components: {
    Split,
    DetailBanner,
    DetailHeader,
    DetailBaseInfo,
    DetailRecommend
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    height: 50rem
</style>
