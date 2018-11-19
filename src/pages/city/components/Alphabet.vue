<template>
  <div class="wrapper">
    <ul class="list">
      <li class="ltem">A</li>
      <li class="ltem">B</li>
      <li class="ltem">C</li>
      <li class="ltem">D</li>
      <li class="ltem">E</li>
      <li class="ltem">F</li>
      <li class="ltem">G</li>
      <li class="ltem">H</li>
      <li class="ltem">I</li>
      <li class="ltem">J</li>
      <li class="ltem">K</li>
      <li class="ltem">L</li>
      <li class="ltem">M</li>
      <li class="ltem">N</li>
      <li class="ltem">O</li>
      <li class="ltem">P</li>
      <li class="ltem">Q</li>
      <li class="ltem">R</li>
      <li class="ltem">S</li>
      <li class="ltem">T</li>
      <li class="ltem">U</li>
      <li class="ltem">V</li>
      <li class="ltem">W</li>
      <li class="ltem">X</li>
      <li class="ltem">Y</li>
      <li class="ltem">Z</li>
    </ul>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'CityAlphabet'
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
