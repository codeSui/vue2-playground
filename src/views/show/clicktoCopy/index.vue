<template>
  <div class="container">

    <el-button v-copy="copyContent">Copy!</el-button>
    <p>{{ copyContent }}</p>

    <el-button @click="updCopyContent">改变需要复制的内容</el-button>

  </div>
</template>

<script>
export default {

  components: {

  },

  data() {
    return {
      copyContent: '需要被复制的内容'
      // copyContent: ''
    }
  },
  methods: {
    updCopyContent() {
      this.copyContent = '复制内容已经更新'
    }

  }
}
</script>

<style>

</style>
