<template>
  <div class="po-relative bor-red">

    <!-- bor-red -->
    <div
      class="h150 w30 red"
      :style="{
        position: 'relative',
        left,
        display,
        zIndex: 99
      }"
    />
    <div ref="cell" class="pos-rel yel hw150" @mousemove="handleMouseMoveWrapper" @mouseenter="handleMouseEnter" />
    <div class="h30"><button @click="showButton">showButton</button></div>
    <!-- bor-blu blk-inline-->
  </div>
</template>

<script>
console.log('document: ', document)
const oDiv = document.getElementById('cell')
console.log('oDiv: ', oDiv)
import throttle from '@/utils/throttle'
export default {

  components: {

  },

  data() {
    return {
      leftOri: '500',
      display: 'block'

    }
  },
  computed: {
    left() {
      return this.leftOri + 'px'
    }
  },
  created() {
    this.handleMouseMoveWrapper = throttle(this.handleMouseMove, 500)
  },
  methods: {
    showButton() {
      if (this.display === 'none') this.display = 'block'
      else this.display = 'none'
    },
    handleMouseMove(ev) {
      const o = {}
      const keys = ['clientX', 'clientY', 'screenX', 'screenY']
      // , 'offsetX', 'offsetY'
      for (const key of keys) {
        o[key] = ev[key]
      }

      console.log('o: ', o)
    },

    handleMouseEnter() {
      // const o = this.$refs.cell
      // o.innerHTML = 'areyouok'
      // const classList = ['h150', 'w30', 'bor-red']
      // const newDom = document.createElement('div')
      // newDom.classList.add(...classList)
      // newDom.innerText = 'i dont know'
      // const container = o.parentNode
      // container.appendChild(newDom)
    }

  }
}
</script>

<style>

</style>
