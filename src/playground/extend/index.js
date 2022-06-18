import Vue from 'vue'
import MessageComponent from './Message.vue'

const MessageConstructor = Vue.extend(MessageComponent)// 获取组件的构造函数
const Message = (options, currentEl) => {
  // 组件的手动挂载：创建组件实例，挂载，添加在body上
  const instance = new MessageConstructor({
    data: {
      ...options, visible: false, arya: false
    }
  })
  instance.$mount()
  currentEl.appendChild(instance.$el)
  // document.body.appendChild(instance.$el)
  instance.visible = true
}
['success', 'error', 'warning'].forEach(type => {
  Message[type] = function(options) {
    options.type = type
    return Message(options)
  }
})

export { Message }
