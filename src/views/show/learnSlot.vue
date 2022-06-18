<template>
  <div class="bor-blu container">

    <div class="h150" />
    <hr>

    <custom-slot #default="slotProp">
      仅使用默认插槽, 不使用其它具名插槽的情况下, 可以直接使用标签名来限定 <br>
      <p>&lt;custom-slot #default="slotProp" &gt;</p>
      <!-- <template #header="headerSlotProp"> {{ headerSlotProp }} </template>
      如果使用其它插槽, 会报错 ! -->

      <span class="sp-mark">{{ slotProp }}</span>
    </custom-slot>

    <hr>

    <div class="mg-top80">
      具名(非默认)插槽应该使用 &lt;template #header="slotProp"&gt; 来限定一个作用域
      <custom-slot>
        <span class="sp-mark">没有指定所属插槽的内容</span>
        <template #header="slotProp">
          {{ slotProp }}
        </template>
        <span class="sp-mark">归为默认插槽</span>
        <template #footer="slotProp">
          {{ slotProp }}
        </template>
      </custom-slot>
    </div>

  </div>
</template>

<script>
import customSlot from './learnSlotChd'
export default {

  components: {
    customSlot
  },

  data() {
    return {

    }
  },
  methods: {

  }
}
</script>

<style lang="scss" scoped>

.container {
  text-align: center;
}
</style>
