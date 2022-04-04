import Vue from 'vue'
import VueI18n from 'vue-i18n'
import tr from './tr'
import de from './de'

Vue.use(VueI18n)

export default new VueI18n({
  locale: 'tr',
  fallbackLocale: "tr",
  messages: {
    tr,de
  }
})
