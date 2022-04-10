<template>
  <div>
    <v-card>
      <v-card-title>
        {{ $t('Sehirler.Sehirler') }}
        <download-excel
          :data="SehirListesi"
          :name="$t('Sehirler.ExcelFile')"
          :worksheet="$t('Sehirler.ExcelFile')"
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
    ExcelFields() {
      let veri
      const fields = { }
      if (this.SehirListesi.length > 0) {
        veri = Object.keys(this.SehirListesi[0])
        veri.forEach(item => {
          // eslint-disable-next-line no-unused-vars
          const itemKey = this.$t(`Sehirler.${item}`)
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
