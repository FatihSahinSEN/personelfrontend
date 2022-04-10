// eslint-disable-next-line import/no-cycle
import api from '../boot/axios'
// eslint-disable-next-line import/no-cycle,no-unused-vars
import router from '../router'

export default {
  namespaced: true,
  state: {
    arama: '',
    Dosyalar: [],
    Uyruk: {
      uyruk: null,
    },
  },
  mutations: {
    DosyalarTanimla(state, data) {
      state.Dosyalar = data
    },
    DosyalarEkle(state, data) {
      state.Dosyalar.push(data)
    },
    DosyaSilState(state, id) {
      const index = state.Dosyalar.findIndex(item => item.id === id)
      state.Dosyalar.splice(index, 1)
    },
  },
  actions: {
    DosyalarListesi({ commit }, data) {
      commit('DosyalarTanimla', [])
      // eslint-disable-next-line consistent-return
      api.get(`dosyalar/${data.id}`).then(response => {
        if (response?.data?.result) commit('DosyalarTanimla', response?.data?.result)
        // eslint-disable-next-line consistent-return
      })
    },
    
    TumDosyalar({ commit }, data) {
      commit('DosyalarTanimla', [])
      // eslint-disable-next-line consistent-return
      api.get(`dosyalar`).then(response => {
        if (response?.data?.result) commit('DosyalarTanimla', response?.data?.result)
        // eslint-disable-next-line consistent-return
      })
    },

    // eslint-disable-next-line no-empty-pattern
    DosyalarGuncelle({ }, data) {
      return new Promise((resolve, reject) => {
        api.patch(`Dosyalar/${data.id}`, data)
          .then(response => {
            resolve(response)
          },
          error => {
            reject(error)
          })
      })
    },
    // eslint-disable-next-line no-empty-pattern
    DosyalarSil({ commit }, data) {
      return new Promise((resolve, reject) => {
        api.delete(`dosyalar/${data.id}`, data)
          .then(response => {
            commit('DosyaSilState', data.id)
            resolve(response)
          },
          error => {
            reject(error)
          })
      })
    },
  },
}
