<template>
  <div>
    <v-data-table
      :headers="sutunlar"
      :items="SehirListesi"
      :search="arama"
      @click:row="edit"
    >
      <template v-slot:item.created="{ item }">
        <span>{{ new Date(item.created).toLocaleString() }}</span>
      </template>
    </v-data-table>
    <EvrakGuncelle
      v-if="duzenle"
      :editdata="EditItem"
      @close="duzenle=false"
    />
    <EvrakOlustur />
  </div>
</template>

<script>
import EvrakGuncelle from '@/views/evrak-tipleri/evrak-tipi-guncelle'
import EvrakOlustur from '@/views/evrak-tipleri/evrak-tipi-olustur'
import router from '@/router'

export default {
  name: 'EvrakTipleri',
  components: { EvrakOlustur, EvrakGuncelle },
  data() {
    return {
      sutunlar: [
        {
          text: this.$t('EvrakTipleri.id'),
          align: 'start',
          filterable: false,
          value: 'id',
        },
        {
          text: this.$t('EvrakTipleri.isim'),
          value: 'isim',
        },
        {
          text: this.$t('EvrakTipleri.aciklama'),
          value: 'aciklama',
        },
        {
          text: this.$t('EvrakTipleri.olusturma_tarihi'),
          value: 'created',
        },
      ],
      duzenle: false,
      EditItem: {},
    }
  },
  computed: {
    SehirListesi() {
      return this.$store.state.EvrakTipleri.EvrakTipleri
    },
    arama() {
      return this.$store.state.arama
    },
  },
  mounted() {
    // EvrakTipleri Listesi Çek (store/EvrakTipleri.js)
    this.$store.dispatch('Action', { name: 'EvrakTipleri/EvrakTipleriListesi' }).then(() => {

    })
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
