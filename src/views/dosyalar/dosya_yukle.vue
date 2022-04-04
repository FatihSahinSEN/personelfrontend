<template>
  <Modal
    :show="Ekle"
    :title="$t('Dosyalar.olustur')"
    :save-text="$t('Dosyalar.kaydet')"
    @close="Ekle = false"
    @saveMethod="Yukle"
  >
    <template v-slot:form>
      <div>{{ $t('Dosyalar.yeni_evrak') }}<br /><br /><br /></div>
      <v-autocomplete
        v-model="evrak_tip_id"
        :items="EvrakTipleri"
        item-value="id"
        :filter="filter"
        item-text="isim"
        dense
        :label="$t('Dosyalar.evrak_tipi')"
        :search-input.sync="EvrakTipleriSearch"
        autofocus
        @keypress.enter="EvrakTipleriEkle"
      ></v-autocomplete>
      <v-file-input
        v-model="file"
        chips
        show-size
        truncate-length="15"
        :label="$t('Dosyalar.belge')"
      ></v-file-input>
    </template>
  </Modal>
</template>

<script>
import { mdiWindowClose } from '@mdi/js'
import Modal from '@/components/Modal'
import api from '@/boot/axios'

export default {
  name: 'DosyaYuke',
  components: { Modal },
  data: () => ({
    data: {
      isim: '',
    },
    icons: {
      mdiWindowClose,
    },
    EvrakTipleriSearch: '',
    evrak_tip_id: 0,
    file: null,
  }),
  computed: {
    Ekle: {
      get() {
        return this.$store.state.createDialog
      },
      set(bool) {
        this.$store.state.createDialog = bool
      },
    },
    EvrakTipleri() {
      return this.$store.state.EvrakTipleri.EvrakTipleri
    },
  },
  mounted() {
    this.$store.dispatch('Action', { name: 'EvrakTipleri/EvrakTipleriListesi' })
  },
  methods: {
    EvrakTipleriEkle() {
      const evrak = {
        isim: this.EvrakTipleriSearch,
      }
      if (this.EvrakTipleri.findIndex(item => item.isim === evrak.isim) === -1) {
        this.$store.dispatch('Action', { name: 'EvrakTipleri/EvrakTipleriOlustur', data: evrak }).then(() => {
          setTimeout(() => {
            this.evrak_tip_id = this.EvrakTipleri[(this.EvrakTipleri.length - 1)]?.id
          }, 200)
        })
      }
    },
    Yukle() {
      const uploadData = new FormData()
      uploadData.append('personel_no', this.$route.params.id)
      uploadData.append('evrak_tip_id', this.evrak_tip_id)
      uploadData.append('files', this.file)
      api({
        method: 'post',
        url: 'dosyalar',
        data: uploadData,
        headers: { 'Content-Type': 'multipart/form-data' },
      }).then(response => {
        this.Ekle = false
        this.$store.commit('Dosyalar/DosyalarEkle', response.data.result)
      }).catch(error => {
        this.Ekle = false
        console.log(error)
      })
    },
    filter(item, queryText = null, itemText = null) {
      queryText = queryText.replace(/[İı]/g, 'i')
      itemText = itemText.replace(/[İı]/g, 'i')

      return itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
    },
  },

}
</script>

<style scoped>

</style>
