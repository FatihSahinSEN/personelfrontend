<template>
  <div>
    <v-data-table
      :headers="sutunlar"
      :items="UlkeListesi"
      :search="arama"
      @click:row="edit"
    ></v-data-table>
    <ulke-guncelle
      v-if="duzenle"
      :editdata="EditItem"
      @close="duzenle=false"
    />
    <ulke-olustur />
  </div>
</template>

<script>
import UlkeGuncelle from './ulke-guncelle'
import UlkeOlustur from '@/views/ulkeler/ulke-olustur'

export default {
  name: 'Ulkeler',
  components: {
    UlkeOlustur,
    UlkeGuncelle,
  },
  data() {
    return {
      duzenle: false,
      sutunlar: [
        {
          text: this.$t('ulkeler.code'),
          align: 'start',
          filterable: true,
          value: 'code',
        },
        {
          text: this.$t('ulkeler.isim'),
          value: 'de',
        },
      ],
    }
  },
  computed: {
    UlkeListesi() {
      return this.$store.state.Ulkeler.ulkeler
    },
    arama() {
      return this.$store.state.arama
    },
  },
  mounted() {
    // Kullanici Listesi Çek (store/kullanicilar.js)
    this.$store.dispatch('Action', { name: 'Ulkeler/UlkeListesi' })
  },
  methods: {
    edit(item) {
      this.EditItem = item
      this.duzenle = true
    },
  },
}
</script>

<style scoped>

</style>
