// eslint-disable-next-line import/no-cycle
import api from '../boot/axios'
// eslint-disable-next-line import/no-cycle,no-unused-vars
import router from '../router'

export default {
  namespaced: true,
  state: {
    arama: '',
    Firmalar: [],
  },
  mutations: {
    FirmalarTanimla(state, data) {
      state.Firmalar = data
    },
    FirmalarEkle(state, data) {
      state.Firmalar.push(data)
    },
  },
  actions: {
    FirmalarListesi({ commit }) {
      // eslint-disable-next-line consistent-return
      api.get('firmalar').then(response => {
        if (response?.data?.result) commit('FirmalarTanimla', response?.data?.result)
        // eslint-disable-next-line consistent-return
      })
    },
    FirmalarOlustur({ commit }, data) {
      // eslint-disable-next-line consistent-return
      api.post('firmalar', data).then(response => {
        // eslint-disable-next-line consistent-return
        if (response?.data?.code === 201) {
          commit('FirmalarEkle', response.data.result)
        }
      })
    },

    // eslint-disable-next-line no-empty-pattern
    FirmalarGuncelle({ }, data) {
      return new Promise((resolve, reject) => {
        api.patch(`Firmalar/${data.id}`, data)
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
