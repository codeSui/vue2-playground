<template>
  <div>

    <slot name="header" :fromHeader_0="something" :fromHeader_1="anotherDesc" />

    <p>
      <slot :fromDefault_0="something" ::fromDefault_1="dataPool1" />
    </p>
    <!-- <slot name="default" :fromDefault_0="something" ::fromDefault_1="dataPool1" /> -->

    <slot name="footer" :fromFooter_0="dataPool0" :fromFooter_1="dataPool1" />

  </div>
</template>

<script>
export default {
  components: {

  },

  data() {
    return {
      disabled: true,
      dataPool0: {
        name: 'ori 属性, 在插槽组件中定义'
      },
      dataPool1: {
        name: 'dataPool1'
      },
      something: {
        name: 'slot'
      },
      anotherDesc: {
        name: 'local'
      }
    }
  },
  methods: {

  }
}
</script>

<style>

</style>
