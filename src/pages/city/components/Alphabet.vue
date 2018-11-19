<template>
  <div class="wrapper">
    <ul class="list">
      <li
        class="ltem"
        v-for="item in letters"
        :key="item"
        :ref="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
      >
        {{item}}
      </li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CityAlphabet',
  data() {
    return {
      touchStatus: false,
      startY: 0,
      timer: null
    }
  },
  props: {
    cities: {
      type: Object
    }
  },
  updated() {
    this.startY = this.$refs.A[0].offsetTop
  },
  methods: {
    handleLetterClick(e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart() {
      this.touchStatus = true
    },
    handleTouchMove(e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          const touchY = e.touches[0].clientY - 73.4
          const index = Math.floor((touchY - this.startY) / 20)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        }, 16)
      }
    },
    handleTouchEnd() {
      this.touchStatus = false
    }
  },
  computed: {
    letters() {
      const letters = []
      for (const i in this.cities) {
        if ({}.hasOwnProperty.call(this.cities, i)) {
          letters.push(i)
        }
      }
      return letters
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @import '~styles/variables.styl'
  .list
    position: absolute
    top: 1.58rem
    right: 0
    bottom: 0
    display: flex
    flex-direction: column
    justify-content: center
    width: .4rem
    .ltem
      line-height: .4rem
      text-align: center
      color: $bgColor
</style>
