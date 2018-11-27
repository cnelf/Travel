<template>
  <transition>
    <slot></slot>
  </transition>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'FadeAnimation'
}
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .v-enter, .v-leave-to
    opacity: 0
  .v-enter-active, .v-leave-active
    transition: all .5s
</style>
