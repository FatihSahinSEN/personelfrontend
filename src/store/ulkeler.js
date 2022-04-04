// eslint-disable-next-line import/no-cycle
import api from '../boot/axios'
// eslint-disable-next-line import/no-cycle,no-unused-vars
import router from '../router'

export default {
  namespaced: true,
  state: {
    arama: '',
    ekle: false,
    ulkeler: [],
    ulke: {
      code: null,
      de: null,
      en: null,
    },
  },
  mutations: {
    UlkeTanimla(state, data) {
      state.ulkeler = data
    },
    UlkeEkle(state, data) {
      state.ulkeler.push(data)
    },
  },
  actions: {
    UlkeListesi({ commit }) {
      // eslint-disable-next-line consistent-return
      api.get('ulkeler').then(response => {
        if (response?.data?.result) commit('UlkeTanimla', response?.data?.result)
        // eslint-disable-next-line consistent-return
      })
    },
    UlkeOlustur({ commit }, data) {
      // eslint-disable-next-line consistent-return
      api.post('ulkeler', data).then(response => {
        // eslint-disable-next-line consistent-return
        if (response?.data?.code === 201) {
          commit('UlkeEkle', response.data.result)
          router.push({ name: 'ulkeler' })
        }
      })
    },

    // eslint-disable-next-line no-empty-pattern
    UlkeGuncelle({ }, data) {
      return new Promise((resolve, reject) => {
        api.patch(`ulkeler/${data.id}`, data)
          .then(response => {
            resolve(response)
          },
          error => {
            reject(error)
          })
      })
    },
  },
}
