<template>
  <div ref="anchor" class="container">

    <!--,
        display, bor-red
        :style="{
        position: 'relative',
        left,
        zIndex: 99
        class="h150 w30 red"
      }" -->

    <!-- style="position:relative" -->
    <div
      ref="cell"
      class="yel h150"
      :style="{width, display:'inline-block'}"
    >
      <!-- @mousemove.self="handleMouseMoveWrapper"
      @mouseenter="handleMouseEnter" -->
      <div style="margin-top:-20px;height:20px; width:130px; background:blue;position:relative;float:left;" />
      <!-- :style="{position:'relative', height:'100px', width:'30px', background:'red', left:width,
                 display, cursor:'e-resize'}" -->
    </div>
    <div
      :style="{ display:'inline-block',height:'100px', width:'30px', background:'red', cursor:'e-resize'}"
      @mousedown="bar_mouseDown"
    />
    <!-- @mousemove="bar_mouseMove"
      @mouseup="bar_mouseUp" -->
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
      // leftOri: '500',
      display: 'block',
      moving: false,
      movSrt: 0,
      // widthOri: 150
      width: '150px',
      left: '500px'
    }
  },
  computed: {
    // left() {
    //   return this.leftOri + 'px'
    // }
    // width() {
    //   return this.widthOri + 'px'
    // }
  },
  created() {
    this.handleMouseMoveWrapper = throttle(this.handleMouseMove, 50)
  },
  methods: {
    bar_mouseDown(ev) {
      console.log('document: ', document)
      this.movSrt = ev.pageX - ev.srcElement.getBoundingClientRect().left
      window.document.addEventListener('mousemove', this.handleMousemove)
      window.document.addEventListener('mouseup', this.handleMouseup)
      this.moving = true
    },
    bar_mouseMove(ev) {
      console.log('aiai', )
      if (!this.moving) return false
      // const o = this.$refs.anchor.getBoundingClientRect()
      // console.log('o.left: ', o.left)
      this.width = `${ev.pageX - 59 - this.movSrt}px`
    },
    bar_mouseUp() {
      this.moving = false
    },

    showButton() {
      if (this.display === 'none') this.display = 'block'
      else this.display = 'none'
    },
    handleMouseMove(ev) {
      const srcDom = ev.srcElement
      const { clientHeight, clientWidth } = srcDom
      const o = { clientWidth, clientHeight }
      const keys = ['clientX', 'clientY', 'screenX', 'screenY', 'offsetX', 'offsetY']
      // const keys = ['pageX', 'pageY', 'clientX', 'clientY']
      for (const key of keys) {
        o[key] = ev[key]
      }
      console.log('o: ', o)
      const isNeighbour = (ori, now, margin = 20) => (now >= ori - margin) && (now <= ori + margin)

      if (isNeighbour(o.clientWidth, o.offsetX)) {
        console.log('o.clientX: ', o.clientX)
        console.log('o.offsetX: ', o.offsetX)
        console.log('o.clientWidth: ', o.clientWidth)
        // this.leftOri = o.clientWidth
        // this.leftOri = this.widthOri
        this.left = this.width
      } else {
        // this.leftOri = '500'
        this.left = '500px'
      }
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
