import Vue from 'vue'
import App from './App.vue'
import Block from './Block.vue'

Vue.component('app_block', Block);

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#block',
  render: h => h(Block)
})