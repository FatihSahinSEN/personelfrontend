import '@/plugins/vue-composition-api'
import '@/styles/styles.scss'
import Vue from 'vue'
import Vuex from 'vuex'
import JsonExcel from 'vue-json-excel'
import App from './App.vue'
import i18n from '@/locale'
import vuetify from './plugins/vuetify'
import store from './store'
import router from './router'

Vue.component('downloadExcel', JsonExcel)

Vue.use(Vuex)

new Vue({
  router,
  i18n,
  store,
  vuetify,
  render: h => h(App),
}).$mount('#app')
