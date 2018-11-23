<template>
  <div class="wrapper">
    <detail-banner></detail-banner>
    <detail-header></detail-header>
    <div class="content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import DetailBanner from './components/DetailBanner'
import DetailHeader from './components/Header'

export default {
  name: 'Detail',
  components: {
    DetailBanner,
    DetailHeader
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    height: 50rem
</style>
