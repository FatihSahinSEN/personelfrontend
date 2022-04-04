<template>
  <div>
    <v-data-table
      :headers="sutunlar"
      :items="SehirListesi"
      :search="arama"
      @click:row="edit"
    ></v-data-table>
    <sehir-guncelle
      :editdata="EditItem"
      @close="duzenle=false"
      v-if="duzenle"
    />
    <sehir-olustur />
  </div>
</template>

<script>
import SehirGuncelle from '@/views/sehirler/sehir-guncelle'
import SehirOlustur from '@/views/sehirler/sehir-olustur'
export default {
  name: 'Sehirler',
  components: { SehirOlustur, SehirGuncelle },
  data() {
    return {
      sutunlar: [
        {
          text: this.$t('Sehirler.id'),
          align: 'start',
          filterable: false,
          value: 'id',
        },
        {
          text: this.$t('Sehirler.posta_kodu'),
          value: 'posta_kodu',
        },
        {
          text: this.$t('Sehirler.sehir'),
          value: 'sehir',
        },
      ],
      duzenle: false,
      EditItem: {},
    }
  },
  computed: {
    SehirListesi() {
      return this.$store.state.Sehirler.Sehirler
    },
    arama() {
      return this.$store.state.arama
    },
  },
  mounted() {
    // Sehirler Listesi Çek (store/sehirler.js)
    this.$store.dispatch('Action', { name: 'Sehirler/SehirListesi' })
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
