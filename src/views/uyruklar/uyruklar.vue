<template>
  <div>
    <v-card>
      <v-card-title>
        {{ $t('Uyruklar.Uyruklar') }}
        <download-excel
          :data="UyruklarListesi"
          :name="$t('Uyruklar.ExcelFile')"
          :worksheet="$t('Uyruklar.ExcelFile')"
          :fields="ExcelFields"
          :header="ExcelHeader"
          class="ml-3"
        >
          <img src="@/assets/images/misc/excel.png" style="width: 25px" />
        </download-excel>
      </v-card-title>
    </v-card>
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
    ExcelFields() {
      let veri
      const fields = { }
      if (this.UyruklarListesi.length > 0) {
        veri = Object.keys(this.UyruklarListesi[0])
        veri.forEach(item => {
          // eslint-disable-next-line no-unused-vars
          const itemKey = this.$t(`Uyruklar.${item}`)
          fields[itemKey] = item
        })
      }

      return fields
    },
    ExcelHeader() {
      return [this.$t('APP_NAME'), `${this.$t('tarih')}:${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`]
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
