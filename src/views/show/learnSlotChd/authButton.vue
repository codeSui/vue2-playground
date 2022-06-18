<template>

  <!-- <用户设置隐藏>且<该按钮被禁用> = 隐藏该按钮 -->
  <el-button
    v-show="!dontShow || !disabled"
    v-hasPerm="auth"
    :disabled="!isRootUser && disabled"
    v-bind="$attrs"
    @click="emitClick"
  ><slot /></el-button>

</template>

<script>
import { mapState } from 'vuex'
export default {
  props: {
    // 当按钮被禁用时, 直接隐藏
    dontShow: {
      type: Boolean,
      default: false
    },
    auth: {
      type: String,
      default: ''
    },
    cusStrategy: {
      // eslint-disable-next-line vue/require-prop-type-constructor
      type: Boolean | Function,
      default: false
    }
  },
  data() {
    return {
      disabled: true
    }
  },
  computed: {
    isRootUser() {
      return this.$store.state.auth.isRootUser
    },
    ...mapState('auth', ['CUR_dept', 'CUR_post'])
  },
  created() {
    if (this.cusStrategy) {
      // 开启一个宏任务, 在 <自定义指令>决策完权限 之后执行
      setTimeout(() => {
        console.log('=======>')
        const CUR = { dept: this.CUR_dept, post: this.CUR_post }
        // 符合策略的话就启用, 所以设置禁用为 false
        this.disabled = !this.cusStrategy(this.$attrs.data, CUR)
        console.log(`自定义权限策略的结果: ${this.disabled ? '禁用' : '启用'}`)
        console.log('<=======')
      })
    }
  },
  methods: {
    /**
     * 通过修改 html 的方式取消禁用
     */
    emitClick() {
      // 禁用 && 不是超级用户
      if (this.disabled && !this.isRootUser) {
        this.$message.error('请联系管理员获取权限')
        return
      }
      this.$emit('click')
    }

  }
}
</script>

<style>

</style>
