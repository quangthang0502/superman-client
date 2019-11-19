import Vue from 'vue'
import VueI18n from 'vue-i18n'
import en from './langs/en'
import vi from './langs/vi'

Vue.use(VueI18n)

const locale = 'vi'

export const messages = {
  vi: vi,
  en: en
}

const i18n = new VueI18n({
  locale,
  messages
})

export default i18n