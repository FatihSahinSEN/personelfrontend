import api from '../boot/axios'
import router from '../router'

export default {
  namespaced: true,
  actions: {
    Logout({ commit }) {
      const Tokens = {
        access_token: null,
        refresh_token: null,
      }
      commit('SetToken', Tokens)
      commit('SetUser', null, { root: true })
      commit('SetisAuthenticated', false, { root: true })
      router.push({ name: 'login' })
    },
    LoginRequest({ commit }, request) {
      // eslint-disable-next-line consistent-return
      api.post('login', { request }).then(response => {
        if (!response.data.status) {
          commit('ShowAlert', { title: 'HATA', message: 'Kullanıcı adı veya şifre geçersiz.' }, { root: true })

          return false
        }
        const Tokens = {
          access_token: response.data.access_token,
          refresh_token: response.data.refresh_token,
        }
        commit('SetToken', Tokens, { root: true })
        commit('SetUser', response.data.user, { root: true })
        commit('SetisAuthenticated', true, { root: true })

        router.push({ name: 'dashboard' })
      })
    },
  },
}
