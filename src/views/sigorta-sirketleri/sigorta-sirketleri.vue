<template>
  <div>
    <v-card>
      <v-card-title>
        {{ $t('SigortaSirketleri.SigortaSirketleri') }}
        <download-excel
          :data="SigortaSirketleriListesi"
          :name="$t('SigortaSirketleri.ExcelFile')"
          :worksheet="$t('SigortaSirketleri.ExcelFile')"
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
    ExcelFields() {
      let veri
      const fields = { }
      if (this.SigortaSirketleriListesi.length > 0) {
        veri = Object.keys(this.SigortaSirketleriListesi[0])
        veri.forEach(item => {
          // eslint-disable-next-line no-unused-vars
          const itemKey = this.$t(`SigortaSirketleri.${item}`)
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
