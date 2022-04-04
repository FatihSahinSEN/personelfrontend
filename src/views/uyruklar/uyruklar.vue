<template>
  <div>
    <v-data-table
      :headers="sutunlar"
      :items="UyruklarListesi"
      :search="arama"
      @click:row="edit"
    >
      <template v-slot:item.created="{ item }">
        <span>{{ new Date(item.created).toLocaleString() }}</span>
      </template>
    </v-data-table>
    <uyruk-duzenle
      v-if="duzenle"
      :editdata="EditItem"
      @close="duzenle=false"
    />
    <uyruk-olustur />
  </div>
</template>
<script>

import UyrukDuzenle from './uyruk-duzenle'
import UyrukOlustur from '@/views/uyruklar/uyruk-olustur'

export default {
  name: 'Uyruklar',
  components: { UyrukOlustur, UyrukDuzenle },
  data() {
    return {
      sutunlar: [
        {
          text: this.$t('Uyruklar.id'),
          align: 'start',
          filterable: false,
          value: 'id',
        },
        {
          text: this.$t('Uyruklar.uyruk'),
          value: 'uyruk',
        },
        {
          text: this.$t('Uyruklar.olusturma_tarihi'),
          value: 'created',
        },
      ],
      duzenle: false,
      EditItem: {},
    }
  },
  computed: {
    UyruklarListesi() {
      return this.$store.state.Uyruklar.Uyruklar
    },
    arama() {
      return this.$store.state.arama
    },
  },
  mounted() {
    // Uyruklar Listesi Çek (store/Uyruklar.js)
    this.$store.dispatch('Action', { name: 'Uyruklar/UyruklarListesi' })
  },
  methods: {
    edit(item) {
      this.EditItem = item
      this.duzenle = true
    },
  },
}
</script>
