<template>
  <div class="container">
    <h2>总体流程</h2>
    <p>
      定义组件 authSlot.vue , 需要外部组件传入参数 <s class="hl">authKey</s> , 值为当前资源对应的权限标识. authSlot 得到这个标识后, 会通过 <s class="hl">自定义指令:v-hasPerm</s> 判断当前登录用户是否有权限来操作这个资源, 进而决定 authSlot 组件中定义的属性:disabled 的取值, 最后通过插槽作用域向外界暴露.<br>
      按钮, 单选框, 搜索框等存在 disabled 属性的 element-ui 组件, 都可以通过这种方式实现权限控制.
    </p>

    <auth-slot #default="{ disabled }" auth="func_btn_show">
      <el-button :disabled="disabled" @click="handleClick">Sure auth="func_btn_show"</el-button>

      <pre style="white-space:pre;line-height:1.3">{{ $store.state.auth }}
        &lt;auth-slot #default="{ disabled }" auth="func_btn_show"&gt;
          &lt;el-button :disabled="disabled"&gt;
      </pre>
    </auth-slot>

    <h2>
      实际项目中按钮的出现频率会更高一些, 为此可以单独定义权限按钮组件:authButton
    </h2>
    <el-button @click="UpdAuthKey">UpdAuthKey</el-button>

    <ul>
      <li>没有权限就禁用
        <auth-button size="mini" auth="func_btn_show_" @click="handleClick">
          如果没有权限就禁用
        </auth-button>
      </li>
      <li>没有权限且设置 &lt;dontShow&gt; 则取消显示
        <auth-button :auth="localAuthKey" :dont-show="true" @click="handleClick">
          auth-button 如果没有权限就取消显示
          <!-- {{ updCompContent }} -->
        </auth-button>
      </li>
      <li>存在权限
        <auth-button type="success" auth="func_btn_show" :dont-show="true" @click="handleClick">
          这个就是有权限
        </auth-button>
      </li>
      <li>可以根据所在上下文传参, 并决定权限策略
        <auth-button
          :cus-strategy="strategy_SameDept"
          :data="{
            dept:'工艺部'
          }"
          auth="func_btn_show"
          @click="handleClick"
        >
          可以传参数的权限控制
        </auth-button>
      </li>
    </ul>

    <hr><hr>

  </div>
</template>

<script>
import authSlot from './learnSlotChd/authSlot.vue'
import authButton from './learnSlotChd/authButton.vue'
import { mapState } from 'vuex'
export default {

  components: {
    authSlot, authButton
  },

  data() {
    return {
      localAuthKey: 'func_btn_show_',
      updCompContent: 'change the detail',
      exampleData: {
        dept: '工艺部',
        post: '部长'
      },
      strategy_SameDept: (data, CUR) => {
        return data.dept === CUR.dept
      },
      strategy_FromManagement: (data, CUR) => {
        return ['经理', '部长', '总监'].includes(CUR.post)
      }
    }
  },
  computed: {
    ...mapState('auth', ['authMap'])
  },
  methods: {
    handleClick() {
      console.log('have been authorized')
    },
    UpdAuthKey() {
      const key = this.localAuthKey
      if (key.lastIndexOf('_') === key.length - 1) {
        this.localAuthKey = 'func_btn_show'
      } else {
        this.localAuthKey = 'func_btn_show_'
      }
    }

  }
}
</script>

<style>

</style>
