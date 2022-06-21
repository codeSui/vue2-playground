import hasPerm from './hasPerm'
import copy from './clickToCopy'

const directives = {
  hasPerm, copy
}

export default {
  install(Vue) {
    Object.keys(directives).forEach((key) => {
      Vue.directive(key, directives[key])
    })
  }
}

// 作者：lzg9527
// 链接：https://juejin.cn/post/6906028995133833230
// 来源：稀土掘金
// 著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
