// eslint-disable-next-line import/no-cycle
import api from '../boot/axios'
// eslint-disable-next-line import/no-cycle,no-unused-vars
import router from '../router'

export default {
  namespaced: true,
  state: {
    arama: '',
    Sozlesmeler: [],
    Sozlesme: null,
  },
  mutations: {
    SozlesmelerTanimla(state, data) {
      state.Sozlesmeler = data
    },
    SozlesmeTanim(state, data) {
      state.Sozlesme = data
    },
    SozlesmelerEkle(state, data) {
      state.Sozlesmeler.push(data)
    },
  },
  actions: {
    SozlesmelerListesi({ commit }) {
      // eslint-disable-next-line consistent-return
      api.get('sozlesmeler').then(response => {
        if (response?.data?.result) commit('SozlesmelerTanimla', response?.data?.result)
        // eslint-disable-next-line consistent-return
      })
    },
    TekSozlesme({ commit }, data) {
      // eslint-disable-next-line consistent-return
      api.get(`sozlesmeler/${data.id}`).then(response => {
        if (response?.data?.result) commit('SozlesmeTanim', response?.data?.result)
        // eslint-disable-next-line consistent-return
      })
    },
    SozlesmelerOlustur({ commit }, data) {
      // eslint-disable-next-line consistent-return
      api.post('sozlesmeler', data).then(response => {
        // eslint-disable-next-line consistent-return
        if (response?.data?.code === 201) {
          commit('SozlesmelerEkle', response.data.result)
        }
      })
    },

    // eslint-disable-next-line no-empty-pattern
    SozlesmelerGuncelle({ }, data) {
      return new Promise((resolve, reject) => {
        api.patch(`sozlesmeler/${data.id}`, data)
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
