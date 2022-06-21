// import Vue from 'vue'
// Vue.directive('hasPerm', {})

import store from '@/store/index.js'

// 注册一个全局自定义指令 `v-hasPerm`
const hasPerm = {
  inserted: function(el, binding, vnode) {
    const authKey = binding.value
    if (binding.def.hasBtnPerm(authKey)) {
      vnode.context.disabled = false
    }
  },
  componentUpdated(el, { value, def }, vnode) {
    if (def.hasBtnPerm(value)) {
      vnode.context.disabled = false
    } else {
      vnode.context.disabled = true
    }
  },

  hasBtnPerm: function(permission) {
    const hasAuth = store.state.auth.authMap // 请求到的数据权限
    return !permission || hasAuth[permission]
  }
}
export default hasPerm
