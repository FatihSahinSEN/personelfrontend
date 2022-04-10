<template>
  <div>
    <v-card>
      <v-card-title>
        {{ $t('Sozlesmeler.Sozlesmeler') }}
        <download-excel
          :data="SozlesmelerListesi"
          :name="$t('Sozlesmeler.ExcelFile')"
          :worksheet="$t('Sozlesmeler.ExcelFile')"
          :fields="ExcelFields"
          :header="ExcelHeader"
          class="ml-3"
        >
          <img
            src="@/assets/images/misc/excel.png"
            style="width: 25px"
          />
        </download-excel>
      </v-card-title>
    </v-card>
    <v-data-table
      :headers="sutunlar"
      :items="SozlesmelerListesi"
      :search="arama"
    >
      <template v-slot:item.islem="{ item }">
        <v-btn
          icon
          @click="edit(item)"
        >
          <v-icon>{{ icons.mdiClipboardEdit }}</v-icon>
        </v-btn>
        <v-btn
          icon
          class="ml-3"
          color="primary"
          @click="print(item)"
        >
          <v-icon>{{ icons.mdiPrinter }}</v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <sozlesme-guncelle
      v-if="duzenle"
      :editdata="EditItem"
      @close="duzenle=false"
    />
    <sozlesme-olustur />
  </div>
</template>

<script>
import { mdiClipboardEdit, mdiPrinter } from '@mdi/js'
import SozlesmeGuncelle from '@/views/sozlesmeler/sozlesme-guncelle'
import SozlesmeOlustur from '@/views/sozlesmeler/sozlesme-olustur'

export default {
  name: 'Sozlesmeler',
  components: { SozlesmeOlustur, SozlesmeGuncelle },
  data() {
    return {
      icons: {
        mdiClipboardEdit,
        mdiPrinter,
      },
      sutunlar: [
        {
          text: this.$t('Sozlesmeler.id'),
          align: 'start',
          value: 'id',
        },
        {
          text: this.$t('Sozlesmeler.isim'),
          value: 'isim',
        },
        {
          text: this.$t('Sozlesmeler.soyisim'),
          value: 'soyisim',
        },
        {
          text: this.$t('Sozlesmeler.meslek'),
          value: 'meslek',
        },
        {
          text: this.$t('Sozlesmeler.firma'),
          value: 'firma',
        },
        {
          text: this.$t('Sozlesmeler.baslama_tarihi'),
          value: 'baslama_tarihi',
        },
        {
          text: this.$t('Sozlesmeler.saat_ucreti'),
          value: 'saat_ucreti',
        },
        {
          text: this.$t('Sozlesmeler.ek_ucret'),
          value: 'ek_ucret',
        },
        {
          text: this.$t('Sozlesmeler.imza_tarihi'),
          value: 'imza_tarihi',
        },
        {
          text: this.$t('Sozlesmeler.olusturma_tarihi'),
          value: 'created',
        },
        {
          text: this.$t('Sozlesmeler.islem'),
          align: 'end',
          filterable: false,
          value: 'islem',
        },
      ],
      duzenle: false,
      EditItem: {},
    }
  },
  computed: {
    SozlesmelerListesi() {
      return this.$store.state.Sozlesmeler.Sozlesmeler
    },
    arama() {
      return this.$store.state.arama
    },
    ExcelFields() {
      let veri
      const fields = { }
      if (this.SozlesmelerListesi.length > 0) {
        veri = Object.keys(this.SozlesmelerListesi[0])
        veri.forEach(item => {
          // eslint-disable-next-line no-unused-vars
          const itemKey = this.$t(`Sozlesmeler.${item}`)
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
    // Sozlesmeler Listesi Çek (store/Sozlesmeler.js)
    this.$store.dispatch('Action', { name: 'Sozlesmeler/SozlesmelerListesi' })
  },
  methods: {
    print(item) {
      const url = this.$router.resolve({ name: 'sozlesme_print', params: { id: item.id } })
      window.open(url.href, 'popUpWindow', 'height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=no,menubar=no,location=no,directories=no, status=no')
    },
    edit(item) {
      this.duzenle = true
      console.log(item)
      this.EditItem = item
    },
  },
}
</script>
