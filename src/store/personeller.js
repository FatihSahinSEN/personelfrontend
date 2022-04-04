// eslint-disable-next-line import/no-cycle
import api from '../boot/axios'
// eslint-disable-next-line import/no-cycle,no-unused-vars
import router from '../router'

export default {
  namespaced: true,
  state: {
    arama: '',
    Personeller: [],
  },
  mutations: {
    PersonellerTanimla(state, data) {
      state.Personeller = data
    },
    PersonellerEkle(state, data) {
      state.Personeller.push(data)
    },
  },
  actions: {
    PersonellerListesi({ commit }) {
      // eslint-disable-next-line consistent-return
      api.get('personeller').then(response => {
        if (response?.data?.result) commit('PersonellerTanimla', response?.data?.result)

        // eslint-disable-next-line consistent-return
      })
    },
    PersonellerOlustur({ commit }, data) {
      // eslint-disable-next-line consistent-return
      api.post('personeller', data).then(response => {
        // eslint-disable-next-line consistent-return
        if (response?.data?.code === 201) {
          commit('PersonellerEkle', response.data.result)
          router.push({ name: 'Personeller' })
        }
      })
    },

    // eslint-disable-next-line no-empty-pattern
    PersonellerGuncelle({ }, data) {
      return new Promise((resolve, reject) => {
        api.patch(`personeller/${data.id}`, data)
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
