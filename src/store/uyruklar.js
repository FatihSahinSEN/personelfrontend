// eslint-disable-next-line import/no-cycle
import api from '../boot/axios'
// eslint-disable-next-line import/no-cycle,no-unused-vars
import router from '../router'

export default {
  namespaced: true,
  state: {
    arama: '',
    Uyruklar: [],
    Uyruk: {
      uyruk: null,
    },
  },
  mutations: {
    UyruklarTanimla(state, data) {
      state.Uyruklar = data
    },
    UyruklarEkle(state, data) {
      state.Uyruklar.push(data)
    },
  },
  actions: {
    UyruklarListesi({ commit }) {
      // eslint-disable-next-line consistent-return
      api.get('uyruklar').then(response => {
        if (response?.data?.result) commit('UyruklarTanimla', response?.data?.result)
        // eslint-disable-next-line consistent-return
      })
    },
    UyruklarOlustur({ commit }, data) {
      // eslint-disable-next-line consistent-return
      api.post('uyruklar', data).then(response => {
        // eslint-disable-next-line consistent-return
        if (response?.data?.code === 201) {
          commit('UyruklarEkle', response.data.result)
        }
      })
    },

    // eslint-disable-next-line no-empty-pattern
    UyruklarGuncelle({ }, data) {
      return new Promise((resolve, reject) => {
        api.patch(`uyruklar/${data.id}`, data)
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
