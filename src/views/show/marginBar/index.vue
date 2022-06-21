<style lang="scss" scoped>
  // position 居中
  .center-position {
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0; margin: auto; // method00

    // top: 50%; left: 50%; transform: translate(-50%, -50%); // method01

    // top: 50%; left: 50%; margin-left: -15px; margin-top: -15px; // method02
  }
  .center-flex {
    height: 100%; width: 100%;
    border: 1px solid yellow;
    display: flex;
    justify-content: space-around;
    // justify-content: center;
    align-items: center;
  }
  .center-txt300 {
    text-align: center;
    line-height: 300px;
  }
</style>
<template>
  <div>

    <margin-bar class="mg-tb20" :width.sync="width0">
      <div class="hw30 bei center-position" />
    </margin-bar>

    <div class="hw300 bor-red">
      <div class="center-flex">
        <div class="hw30 bei" />
        <div class="hw30 bei" style="align-self:center;" />
        <div class="hw30 bei" style="align-self:flex-start;" />
        <div class="hw30 bei" style="align-self:flex-end;" />
      </div>
    </div>

    <margin-bar class="mg-tb20 center-txt300" height="300px" :width.sync="width2">
      areyouokareyouokareyouokare
    </margin-bar>

    <div class="h30 w300 mg-tb20 bor-red" style="overflow:hidden;text-overflow:ellipsis;">
      areyouok...........areyouokareyouok
    </div>
    <div class="h30 w300 mg-tb20 bor-red" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">are you ok are you ok are you ok are you ok
    </div>

    <!-- **CJK文本：**中日韩统一表意文字（CJK Unified Ideographs） -->
    <div class="h30 w300 mg-tb20 bor-red" style="overflow:hidden;text-overflow:ellipsis;">
      文本省略号文本省略号文本省略号文本省略号文本省略号文本省略号文本省略号
    </div>
    <div class="h30 w300 mg-tb20 bor-red" style="overflow:hidden;text-overflow:ellipsis;word-break:keep-all;">
      文本省略号文本省略号文本省略号文本省略号文本省略号文本省略号文本省略号
    </div>

    <div class="h100 w300 mg-tb20 bor-red" style="white-space:pre;">
      文本省略号文本省略号文本省略号文本省略号文本省略号文本省略号文本省略号
      文本省略号文本省略号文本省略号文本省略号
      文本省略号文本省略号文本省略号
    </div>
    <div class="h100 w300 mg-tb20 bor-red" style="white-space:pre-line;">
      pre-line允许自动换行, 回车符不保留, 空格会压缩
      文本省略号文本省略号文本省略号文本省略号文本省略号文本省略号文本省略号End
      文本省略号K     K文本省略号文本省略号文, 空格会压缩
    </div>
    <div class="h100 w300 mg-tb20 bor-red" style="white-space:pre-wrap;">
      pre-line允许自动换行, 回车符不保留, 空格会压缩
      文本省略号文本省略号文本省略号文本省略号文本省略号文本省略号文本省略号End
      文本省略号K     K文本省略号文本省略号文, 空格会压缩
    </div>

  </div>
</template>

<script>
import marginBar from './marginBar.vue'
export default {

  components: {
    marginBar
  },

  data() {
    return {
      width0: '500px',
      width1: '500px',
      width2: '500px'
    }
  },
  methods: {

  }
}
</script>

