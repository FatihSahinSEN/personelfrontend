// eslint-disable-next-line import/no-cycle
import api from '../boot/axios'
// eslint-disable-next-line import/no-cycle,no-unused-vars
import router from '../router'

export default {
  namespaced: true,
  state: {
    arama: '',
    MeslekGruplari: [],
    Meslek: {
      meslek: null,
      aciklama: null,
    },
  },
  mutations: {
    MeslekGruplariTanimla(state, data) {
      state.MeslekGruplari = data
    },
    MeslekGruplariEkle(state, data) {
      state.MeslekGruplari.push(data)
    },
  },
  actions: {
    MeslekGruplariListesi({ commit }) {
      // eslint-disable-next-line consistent-return
      api.get('meslekgruplari').then(response => {
        if (response?.data?.result) commit('MeslekGruplariTanimla', response?.data?.result)
        // eslint-disable-next-line consistent-return
      })
    },
    MeslekGruplariOlustur({ commit }, data) {
      // eslint-disable-next-line consistent-return
      api.post('meslekgruplari', data).then(response => {
        // eslint-disable-next-line consistent-return
        if (response?.data?.code === 201) {
          commit('MeslekGruplariEkle', response.data.result)
        }
      })
    },

    // eslint-disable-next-line no-empty-pattern
    MeslekGruplariGuncelle({ }, data) {
      return new Promise((resolve, reject) => {
        api.patch(`meslekgruplari/${data.id}`, data)
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
