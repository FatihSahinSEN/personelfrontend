<template>
  <div>
    <v-data-table
      :headers="sutunlar"
      :items="SigortaSirketleriListesi"
      :search="arama"
      @click:row="edit"
    >
      <template v-slot:item.created="{ item }">
        <span>{{ new Date(item.created).toLocaleString() }}</span>
      </template>
    </v-data-table>
    <sigorta-sirketi-guncelle
      v-if="duzenle"
      :editdata="EditItem"
      @close="duzenle=false"
    />
    <sigorta-sirketi-olustur />
  </div>
</template>

<script>
import SigortaSirketiGuncelle from '@/views/sigorta-sirketleri/sigorta-sirketi-guncelle'
import SigortaSirketiOlustur from '@/views/sigorta-sirketleri/sigorta-sirketi-olustur'

export default {
  name: 'SigortaSirketleri',
  components: { SigortaSirketiOlustur, SigortaSirketiGuncelle },
  data() {
    return {
      sutunlar: [
        {
          text: this.$t('SigortaSirketleri.id'),
          align: 'start',
          filterable: false,
          value: 'id',
        },
        {
          text: this.$t('SigortaSirketleri.isim'),
          value: 'isim',
        },
        {
          text: this.$t('SigortaSirketleri.olusturma_tarihi'),
          value: 'created',
        },
      ],
      duzenle: false,
      EditItem: {},
    }
  },
  computed: {
    SigortaSirketleriListesi() {
      return this.$store.state.SigortaSirketleri.SigortaSirketleri
    },
    arama() {
      return this.$store.state.arama
    },
  },
  mounted() {
    // SigortaSirketleri Listesi Çek (store/SigortaSirketleri.js)
    this.$store.dispatch('Action', { name: 'SigortaSirketleri/SigortaSirketleriListesi' })
  },
  methods: {
    edit(item) {
      this.EditItem = item
      this.duzenle = true
    },
  },
}
</script>
