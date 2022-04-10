<template>
  <div>
    <v-card>
      <v-card-title>
        {{ $t('ulkeler.Ulkeler') }}
        <download-excel
          :data="UlkeListesi"
          :name="$t('ulkeler.ExcelFile')"
          :worksheet="$t('ulkeler.ExcelFile')"
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
    ExcelFields() {
      let veri
      const fields = { }
      if (this.UlkeListesi.length > 0) {
        veri = Object.keys(this.UlkeListesi[0])
        veri.forEach(item => {
          // eslint-disable-next-line no-unused-vars
          const itemKey = this.$t(`ulkeler.${item}`)
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
