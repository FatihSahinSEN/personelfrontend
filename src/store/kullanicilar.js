// eslint-disable-next-line import/no-cycle
import api from '../boot/axios'
// eslint-disable-next-line import/no-cycle,no-unused-vars
import router from '../router'

export default {
  namespaced: true,
  state: {
    arama: '',
    kullanici_listesi: [],
    kullanici: {
      kullanici_adi: null,
      isim: null,
      soyisim: null,
      yetki: 1,
    },
  },
  mutations: {
    KullaniciListesiTanimla(state, data) {
      state.kullanici_listesi = data
    },
    KullaniciEkle(state, data) {
      state.kullanici_listesi.push(data)
    },
  },
  actions: {
    KullaniciListesi({ commit }) {
      // eslint-disable-next-line consistent-return
      api.get('kullanicilar').then(response => {
        if (response?.data?.result) commit('KullaniciListesiTanimla', response?.data?.result)
        // eslint-disable-next-line consistent-return
      })
    },
    KullaniciOlustur({ commit }, kullanici) {
      // eslint-disable-next-line consistent-return
      api.post('kullanicilar', kullanici).then(response => {
        // eslint-disable-next-line consistent-return
        if (response?.data?.code === 201) {
          commit('KullaniciEkle', response.data.result)
          router.push({ name: 'kullanicilar' })
        }
      })
    },

    // eslint-disable-next-line no-empty-pattern
    KullaniciGuncelle({ }, kullanici) {
      return new Promise((resolve, reject) => {
        api.patch(`kullanicilar/${kullanici.id}`, kullanici)
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
