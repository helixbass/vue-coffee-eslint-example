import Vue from 'vue'
import App from './App.vue'
import {test} from './test.coffee'

Vue.config.productionTip = false

test()

new Vue({
  render: h => h(App),
}).$mount('#app')
