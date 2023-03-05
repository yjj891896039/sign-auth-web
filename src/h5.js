//h5端入口文件
import Vue from 'vue'
import App from './pages/editInfo.vue'
import router from './router'
import request from "@/api/request";

Vue.config.productionTip = false
Vue.prototype.$http = request
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
