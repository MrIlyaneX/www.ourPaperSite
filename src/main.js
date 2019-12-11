import Vue from 'vue'
import App from './App.vue'
import App1 from './App1.vue'
import Block from './Block.vue'
import Example from './Example.vue'
import Field from './Field.vue'
import ShowButton from './ShowButton.vue'

Vue.component ('app-block', Block)
Vue.component ('app-example', Example)

new Vue({
  el: '#app',
  render: h => h(App)
})

new Vue({
  el: '#app1',
  render: h => h(App1)
})

new Vue({
  el: '#block',
  render: h => h(Block)
})