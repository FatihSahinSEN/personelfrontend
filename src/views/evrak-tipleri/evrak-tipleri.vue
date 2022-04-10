<template>
  <div>
    <v-card>
      <v-card-title>
        {{ $t('EvrakTipleri.evrak_tipleri') }}
        <download-excel
          :data="SehirListesi"
          :name="$t('EvrakTipleri.ExcelFile')"
          :worksheet="$t('EvrakTipleri.ExcelFile')"
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
          text: this.$t('EvrakTipleri.evrak_gurubu'),
          value: 'grup',
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
    ExcelFields() {
      let veri
      const fields = { }
      if (this.SehirListesi.length > 0) {
        veri = Object.keys(this.SehirListesi[0])
        veri.forEach(item => {
          // eslint-disable-next-line no-unused-vars
          const itemKey = this.$t(`EvrakTipleri.${item}`)
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
