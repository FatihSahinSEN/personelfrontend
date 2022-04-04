import Vue from 'vue'
import Vuex from 'vuex'

import SecureLS from 'secure-ls'
import VuexPersistence from 'vuex-persist'
import Auth from '@/store/Auth'
import kullanicilar from '@/store/kullanicilar'
import ulkeler from '@/store/ulkeler'
import sehirler from '@/store/sehirler'
import sigortasirketleri from '@/store/sigorta_sirketleri'
// eslint-disable-next-line camelcase
import evrak_tipleri from '@/store/evrak_tipleri'
import api from '@/boot/axios'
import router from '@/router'
// eslint-disable-next-line camelcase
import meslek_gruplari from '@/store/meslek_gruplari'
import uyruklar from '@/store/uyruklar'
import personeller from '@/store/personeller'
import dosyalar from '@/store/dosyalar'
import i18n from '@/locale'

Vue.use(Vuex)

const localSecure = new SecureLS({
  isCompression: false,
  encodingType: 'des',
  encryptionSecret: '51f28b551f226d8dc3b9fc7098dc3b9a29d958f3a1fe',
})

const vuexLocal = new VuexPersistence({
  key: 'PkasdpPOWDkPKASDKWO!saOWjdo',
  storage: {
    getItem: key => localSecure.get(key),
    setItem: (key, value) => localSecure.set(key, value),
    removeItem: key => localSecure.remove(key),
  },
  reducer: state => ({
    DarkMode: state.DarkMode,
    access_token: state.access_token,
    refresh_token: state.refresh_token,
    isAuthenticated: state.isAuthenticated,
    language: state.language,
    user: state.user,
  }),
})

const Store = new Vuex.Store({
  state: {
    access_token: '',
    refresh_token: '',
    arama: '',
    language: 'tr',
    loadingStatus: false,
    alert: false,
    alertMsg: '',
    alertTitle: '',
    isAuthenticated: false,
    user: null,
    alertSuccess: false,
    alertError: false,
    PopupEkleme: false,
    createDialog: false,
    updateDialog: false,
    DarkMode: false,
    Action: {
      name: '',
      data: '',
      status: false,
    },
  },
  mutations: {
    setDarkMode(state, boolean) {
      state.DarkMode = boolean
    },
    setLanguage(state, lang) {
      state.language = lang
    },
    SetUser(state, value) {
      state.user = value
    },
    SetisAuthenticated(state, val) {
      state.isAuthenticated = val
    },
    ShowAlert(state, val) {
      // eslint-disable-next-line no-prototype-builtins
      if (val.hasOwnProperty('success')) state.alertSuccess = val.success
      // eslint-disable-next-line no-prototype-builtins
      if (val.hasOwnProperty('error')) state.alertError = val.error
      state.alertTitle = val.title
      state.alertMsg = val.message
      state.alert = !state.alert
    },
    HideAlert(state) {
      state.alertTitle = ''
      state.alertMsg = ''
      state.alert = false
      state.alertSuccess = false
      state.alertError = false
    },
    setLoading(state, bool) {
      state.loadingStatus = bool
    },
    SetToken(state, tokens) {
      state.access_token = tokens.access_token
      state.refresh_token = tokens.refresh_token
    },
  },
  actions: {
    Action({ dispatch, state }, Action) {
      state.Action = {
        name: Action.name,
        data: Action.data,
        status: true,
      }

      return new Promise((resolve, reject) => {
        // eslint-disable-next-line no-prototype-builtins
        if (Action.hasOwnProperty('data')) {
          // eslint-disable-next-line no-prototype-builtins
          dispatch(Action.name, Action.data).then(response => {
            resolve(response)
          }).catch(error => {
            reject(error)
          })

          state.ActionData = Action.data
        } else {
          dispatch(Action.name).then(response => {
            resolve(response)
          }).catch(error => {
            reject(error)
          })
        }
      })
    },
    ActionEnd({ state }) {
      state.Action = {
        name: '',
        data: '',
        status: false,
      }
    },
    RefreshAfter({ dispatch, state }) {
      if (state.Action.data !== '') {
        dispatch(state.Action.name, state.Action.data)
      } else {
        dispatch(state.Action.name)
      }
      dispatch('ActionEnd')
    },
    RefreshToken({ dispatch, state, commit }, config) {
      const token = state.refresh_token

      api.post('refresh', { token })
      // eslint-disable-next-line consistent-return
        .then(response => {
          if (!response?.data?.status) {
            commit('ShowAlert', { title: 'Uyarı', message: i18n.t('auth.OTURUM_SONLANDI') })
            dispatch('ShowLoading', false, { root: true })
            router.push({ name: 'login' })

            return false
          }
          const Tokens = {
            access_token: response.data.access_token || false,
            refresh_token: response.data.refresh_token || false,
          }

          // eslint-disable-next-line no-param-reassign
          config.headers.Authorization = `Bearer ${Tokens.access_token}`
          commit('SetToken', Tokens)
          commit('SetUser', response.data.user)
          commit('SetisAuthenticated', true)
          // eslint-disable-next-line no-undef
          dispatch('RefreshAfter')
        })
    },
    HideAlert({ commit }) {
      commit('HideAlert')
    },
    ShowLoading({ commit }, bool) {
      commit('setLoading', bool)
    },
  },
  plugins: [vuexLocal.plugin],
  modules: {
    Auth,
    User: kullanicilar,
    Ulkeler: ulkeler,
    Sehirler: sehirler,
    SigortaSirketleri: sigortasirketleri,
    EvrakTipleri: evrak_tipleri,
    MeslekGruplari: meslek_gruplari,
    Uyruklar: uyruklar,
    Personeller: personeller,
    Dosyalar: dosyalar
  },

})

export default Store
