<template>
  <transition>
    <!-- <div v-show="visible"> {{ message }} </div> -->
    <span class="sp-mark"> {{ message }} </span>

  </transition>
</template>
<script>
export default {
  name: 'MessageComponent',
  data() {
    return {
      message: '', // 提示信息
      type: '', // 根据不同type展示不同的样式
      visible: true,
      duration: 3000
    }
  },
  created() {
    console.log('this.visible: ', this.visible)
  },

  mounted() {
    // 实现显示n秒后消失
    if (this.duration) {
      this.timer = setTimeout(() => { // 间隔时间后消失--销毁组件，并移除元素
        this.$destroy()
        this.$el.parentNode.removeChild(this.$el)
      }, this.duration)
    }
  }
}
</script>
<style scoped>
  .v-enter {
    opacity: 0;
  }
  .v-enter-active {
    transition: all 1s linear
  }
  .v-enter {
    opacity: 1;
  }
</style>
