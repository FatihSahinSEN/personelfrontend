<template>
  <Modal
    :show="Ekle"
    :title="$t('kullanicilar.kullanici_olustur')"
    :save-text="$t('kullanicilar.kaydet')"
    @close="Ekle = false"
    @saveMethod="Olustur"
  >
    <template v-slot:form>
      <v-text-field
        v-model="user.isim"
        :label="$t('kullanicilar.isim')"
        required
        autofocus
      ></v-text-field>
      <v-text-field
        v-model="user.soyisim"
        :label="$t('kullanicilar.soyisim')"
        required
      ></v-text-field>

      <v-text-field
        v-model="user.kullanici_adi"
        type="text"
        :label="$t('kullanicilar.kullanici_adi')"
        required
      ></v-text-field>
      <v-text-field
        v-model="user.sifre"
        type="password"
        :label="$t('kullanicilar.sifre')"
        required
      ></v-text-field>

      <v-select
        id="yetki"
        v-model="user.yetki"
        :items="yetkiler"
        item-text="title"
        item-value="id"
        required
        :label="$t('kullanicilar.yetki')"
      ></v-select>
    </template>
  </Modal>
</template>

<script>
import { mdiWindowClose } from '@mdi/js'
import Modal from '@/components/Modal'

export default {
  name: 'KullaniciOlustur',
  components: { Modal },
  data() {
    return {
      yetkiler: [
        { id: 1, title: this.$t('kullanicilar.kullanici') },
        { id: 2, title: this.$t('kullanicilar.yonetici') },
      ],
      user: {
        isim: '',
        soyisim: '',
        kullanici_adi: '',
        sifre: '',
        yetki: this.yetkiSec,
      },
      icons: {
        mdiWindowClose,
      },
    }
  },
  computed: {
    yetkiSec() {
      return this.yetkiler[0]
    },
    Ekle: {
      get() {
        return this.$store.state.createDialog
      },
      set(bool) {
        this.$store.state.createDialog = bool
      },
    },
  },
  methods: {
    Olustur() {
      this.$store.dispatch('Action', { name: 'User/KullaniciOlustur', data: this.user }).then(() => {
        this.Ekle = false
        this.data = {
          isim: '',
          soyisim: '',
          kullanici_adi: '',
          sifre: '',
          yetki: this.yetkiSec,
        }
      })
    },
  },
}
</script>
