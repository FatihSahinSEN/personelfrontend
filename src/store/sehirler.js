// eslint-disable-next-line import/no-cycle
import api from '../boot/axios'
// eslint-disable-next-line import/no-cycle,no-unused-vars
import router from '../router'

export default {
  namespaced: true,
  state: {
    arama: '',
    Sehirler: [],
    Sehir: {
      posta_kodu: null,
      sehir: null,
    },
  },
  mutations: {
    SehirTanimla(state, data) {
      state.Sehirler = data
    },
    SehirEkle(state, data) {
      state.Sehirler.push(data)
    },
  },
  actions: {
    SehirListesi({ commit }) {
      // eslint-disable-next-line consistent-return
      api.get('postakodlari').then(response => {
        if (response?.data?.result) commit('SehirTanimla', response?.data?.result)
        // eslint-disable-next-line consistent-return
      })
    },
    SehirOlustur({ commit }, data) {
      // eslint-disable-next-line consistent-return
      api.post('sehirler', data).then(response => {
        // eslint-disable-next-line consistent-return
        if (response?.data?.code === 201) {
          commit('SehirEkle', response.data.result)
          router.push({ name: 'sehirler' })
        }
      })
    },

    // eslint-disable-next-line no-empty-pattern
    SehirGuncelle({ }, data) {
      return new Promise((resolve, reject) => {
        api.patch(`sehirler/${data.id}`, data)
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
