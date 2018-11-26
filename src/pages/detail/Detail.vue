<template>
  <div class="wrapper">
    <detail-banner
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImg="gallaryImg"
    ></detail-banner>
    <detail-header></detail-header>
    <detail-base-info :baseInfo="baseInfo"></detail-base-info>
    <Split></Split>
    <detail-recommend :recommend="recommend"></detail-recommend>
    <Split></Split>
    <div class="content"></div>
  </div>
</template>

<script type="text/ecmascript-6">
import Split from 'common/split/Split'
import axios from 'axios'
import DetailBanner from './components/Banner'
import DetailHeader from './components/Header'
import DetailBaseInfo from './components/BaseInfo'
import DetailRecommend from './components/Recommend'

export default {
  name: 'Detail',
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImg: [],
      baseInfo: {},
      recommend: []
    }
  },
  components: {
    Split,
    DetailBanner,
    DetailHeader,
    DetailBaseInfo,
    DetailRecommend
  },
  methods: {
    getDetailInfo() {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id
        }
      })
        .then(this.getDetailInfoSucc)
    },
    getDetailInfoSucc(res) {
      const response = res.data
      if (response.ret && response.data) {
        const data = response.data
        const detail = data[this.$route.params.id]
        this.sightName = detail.sightName
        this.bannerImg = detail.bannerImg
        this.gallaryImg = detail.gallaryImg
        this.baseInfo = detail.baseInfo
        this.recommend = detail.recommend
      }
    }
  },
  mounted() {
    this.getDetailInfo()
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .content
    height: 50rem
</style>
