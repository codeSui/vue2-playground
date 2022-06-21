<style lang="scss" scoped>
.anchor {
  // background: #90CAF9;
  position: relative;
  border: 2px solid red;}
.bar{
  background: pink;
  user-select: none;
  position: absolute;
  right: -12px;
  top:0;
  height: 100%;
  width: 12px;
  cursor: col-resize;}
</style>

<template>
  <div ref="anchor" class="anchor" :style="{ width, height }">
    <slot />
    <div class="bar" @mousedown="handleMousedown" />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      required: true
    },
    height: {
      type: String,
      default: '200px'
    }
  },
  methods: {
    handleMousedown(event) {
      document.addEventListener('mousemove', this.handleMousemove)
      document.addEventListener('mouseup', this.handleMouseup)
      this.moveSrt = event.pageX - event.srcElement.getBoundingClientRect().left
      this.moving = true
    },
    handleMousemove(event) {
      if (!this.moving) return
      const anchor = this.$refs.anchor.getBoundingClientRect()
      this.$emit('update:width', event.pageX - anchor.left - this.moveSrt + 'px')
    },
    handleMouseup() {
      this.moving = false
    }
  }
}
</script>
