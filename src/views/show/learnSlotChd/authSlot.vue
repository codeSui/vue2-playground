<template>
  <!-- 权限控制, 通过自定义自定义指令 v-hasPerm ,  -->
  <span v-hasPerm="auth">
    <slot :disabled="disabled" />
  </span>
</template>

<script>
export default {

  components: {

  },
  props: {
    auth: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      disabled: true
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
