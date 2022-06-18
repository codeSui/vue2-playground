import Vue from 'vue'
import store from '@/store/index.js'

// 注册一个全局自定义指令 `v-hasPerm`
Vue.directive('hasPerm', {
  inserted: function(el, binding, vnode) {
    const authKey = binding.value
    if (binding.def.hasBtnPerm(authKey)) {
      vnode.context.disabled = false
      console.log('自定义指令已经执行结束啦!!', authKey)
    }
  },

  hasBtnPerm: function(permission) {
    const hasAuth = store.state.auth.authMap // 请求到的数据权限
    return !permission || hasAuth[permission]
  }
})
