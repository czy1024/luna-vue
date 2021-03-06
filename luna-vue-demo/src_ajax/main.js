/*
入口JS
 */
import Vue from 'vue'
import App from './App.vue'

import VueResource from 'vue-resource'
// 声明使用插件
Vue.use(VueResource) // 内部会给vm 对象和组件添加一个属性

// eslint-disable-next-line no-new
new Vue({
  el: '#app',
  components: {App}, // 映射组件标签
  template: '<App/>' // 指定需要渲染到页面的模板
})
