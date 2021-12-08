import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'vue-awesome/icons'
import Chart from 'vue-frappe-chart'

import Icon from 'vue-awesome/components/Icon'

Vue.component('v-icon', Icon)
Vue.use(Chart)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
