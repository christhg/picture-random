import Vue from 'vue'
//import App from './App.vue'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
//---引入bootstrap.css,bootstrap-vue.css
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
//---end
Vue.use(BootstrapVue) //註冊BootstrapVue
Vue.use(BootstrapVueIcons)
import App from './App.vue'



Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
