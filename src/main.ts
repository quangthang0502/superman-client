import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
// style
import 'element-ui/lib/theme-chalk/index.css'

// other
import ElementUI from 'element-ui'
import i18n from './lang/index'
import request from '@/plugins/request'

// register
Vue.use(ElementUI, {
  i18n: (key: any, value: any) => i18n.t(key, value)
})


Vue.config.productionTip = false
Vue.prototype.axios = request

new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app')
