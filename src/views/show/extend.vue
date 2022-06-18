<template>
  <div>

    <span>areyou</span>
    <span>areyou</span>

    areyouok.
    <el-button @click="click">aa</el-button>

  </div>
</template>

<script>
import { Message } from '@learn/extend/index.js'
export default {

  components: {

  },

  data() {
    return {

    }
  },
  methods: {
    click() {
      Message({ message: 'one minute.' }, this.$el)
    }

  }
}
</script>

<style>

</style>
