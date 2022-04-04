// eslint-disable-next-line import/no-cycle
import api from '../boot/axios'
// eslint-disable-next-line import/no-cycle,no-unused-vars
import router from '../router'

export default {
  namespaced: true,
  state: {
    arama: '',
    SigortaSirketleri: [],
    SigortaSirket: {
      isim: null,
    },
  },
  mutations: {
    SigortaSirketleriTanimla(state, data) {
      state.SigortaSirketleri = data
    },
    SigortaSirketleriEkle(state, data) {
      state.SigortaSirketleri.push(data)
    },
  },
  actions: {
    SigortaSirketleriListesi({ commit }) {
      // eslint-disable-next-line consistent-return
      api.get('sigortasirketleri').then(response => {
        if (response?.data?.result) commit('SigortaSirketleriTanimla', response?.data?.result)
        // eslint-disable-next-line consistent-return
      })
    },
    SigortaSirketleriOlustur({ commit }, data) {
      // eslint-disable-next-line consistent-return
      api.post('sigortasirketleri', data).then(response => {
        // eslint-disable-next-line consistent-return
        if (response?.data?.code === 201) {
          commit('SigortaSirketleriEkle', response.data.result)
        }
      })
    },

    // eslint-disable-next-line no-empty-pattern
    SigortaSirketleriGuncelle({ }, data) {
      return new Promise((resolve, reject) => {
        api.patch(`sigortasirketleri/${data.id}`, data)
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
