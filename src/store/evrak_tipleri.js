// eslint-disable-next-line import/no-cycle
import api from '../boot/axios'
// eslint-disable-next-line import/no-cycle,no-unused-vars
import router from '../router'

export default {
  namespaced: true,
  state: {
    arama: '',
    EvrakTipleri: [],
    EvrakTip: {
      isim: null,
      aciklama: null,
    },
  },
  mutations: {
    EvrakTipleriTanimla(state, data) {
      state.EvrakTipleri = data
    },
    EvrakTipleriEkle(state, data) {
      state.EvrakTipleri.push(data)
    },
  },
  actions: {
    EvrakTipleriListesi({ commit }) {
      // eslint-disable-next-line consistent-return
      api.get('evraktipleri').then(response => {
        if (response?.data?.result) commit('EvrakTipleriTanimla', response?.data?.result)
        // eslint-disable-next-line consistent-return
      })
    },
    EvrakTipleriOlustur({ commit }, data) {
      // eslint-disable-next-line consistent-return
      api.post('evraktipleri', data).then(response => {
        // eslint-disable-next-line consistent-return
        if (response?.data?.code === 201) {
          commit('EvrakTipleriEkle', response.data.result)
        }
      })
    },

    // eslint-disable-next-line no-empty-pattern
    EvrakTipleriGuncelle({ }, data) {
      return new Promise((resolve, reject) => {
        api.patch(`evraktipleri/${data.id}`, data)
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
