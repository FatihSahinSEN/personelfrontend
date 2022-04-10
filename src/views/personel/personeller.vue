<template>
  <div>
    <v-card>
      <v-card-title>
        {{ $t('Personeller.Personellistesi') }}
        <download-excel
          :data="PersonellerListesi"
          :name="$t('Personeller.PersonelExcelFileName')"
          :worksheet="$t('Personeller.PersonelExcelFileName')"
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
      :items="PersonellerListesi"
      :search="arama"
    >
      <template v-slot:item.id="{ item }">
        <div style="display: flex;gap: 10px">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                @click="PersonelDuzenle(item)"
                v-on="on"
              >
                {{ icons.mdiPencil }}
              </v-icon>
            </template>
            <span>{{ $t('Personeller.EditToolTip') }}</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                color="primary"
                dark
                @click="PersonelDosyalar(item)"
                v-on="on"
              >
                {{ icons.mdiCloudUpload }}
              </v-icon>
            </template>
            <span>{{ $t('Personeller.DosyalarButtonTooltip') }}</span>
          </v-tooltip>

          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-icon
                color="secondary"
                dark
                @click="PersonelDetay(item)"
                v-on="on"
              >
                {{ icons.mdiCardAccountDetailsStar }}
              </v-icon>
            </template>
            <span>{{ $t('Personeller.DetayButtonTooltip') }}</span>
          </v-tooltip>
        </div>
      </template>
    </v-data-table>
    <personel-detay
      :personel="personel"
      :show="detay"
      @close="detay = false"
      @edit="PersonelDuzenle"
      @upload="PersonelDosyalar"
    />
    <div style="display: none">
      {{ ekle }}
    </div>
  </div>
</template>
<script>

import {
  mdiCloudUpload, mdiCardAccountDetailsStar, mdiFilter, mdiPencil,
} from '@mdi/js'
import PersonelDetay from '@/views/personel/personel-detay'

export default {
  name: 'Personeller',
  components: { PersonelDetay },
  data() {
    return {
      icons: {
        mdiCloudUpload,
        mdiCardAccountDetailsStar,
        mdiFilter,
        mdiPencil,
      },
      sutunlar: [
        { align: 'start', text: this.$t('Personeller.islem'), value: 'id' },
        { text: this.$t('Personeller.personel_no'), value: 'personel_no' },
        { text: this.$t('Personeller.isim'), value: 'isim' },
        { text: this.$t('Personeller.soyisim'), value: 'soyisim' },
        { text: this.$t('Personeller.meslek_id'), value: 'meslek' },

        // { text: this.$t('Personeller.dogum_tarihi'), value: 'dogum_tarihi' },
        // { text: this.$t('Personeller.dogum_yeri'), value: 'dogum_yeri' },
        // { text: this.$t('Personeller.posta_kodu_id'), value: 'posta_kodu' },
        { text: this.$t('Personeller.sehir'), value: 'sehir' },

        // { text: this.$t('Personeller.ulke_id'), value: 'de' },
        // { text: this.$t('Personeller.cadde'), value: 'cadde' },
        { text: this.$t('Personeller.ise_giris_tarihi'), value: 'ise_giris_tarihi' },
        { text: this.$t('Personeller.sigorta_sirketi_id'), value: 'sigorta_sirketi' },

        // { text: this.$t('Personeller.kimlik_no'), value: 'kimlik_no' },
        // { text: this.$t('Personeller.sosyal_guvenlik_no'), value: 'sosyal_guvenlik_no' },
        { text: this.$t('Personeller.uyruk_id'), value: 'uyruk' },
        { text: this.$t('Personeller.telefon'), value: 'telefon' },

        // { text: this.$t('Personeller.kimlik_seri_no'), value: 'kimlik_seri_no' },
        // { text: this.$t('Personeller.kimlik_gecerlilik_tarihi'), value: 'kimlik_gecerlilik_tarihi' },
        // { text: this.$t('Personeller.pasaport_no'), value: 'pasaport_no' },
        // { text: this.$t('Personeller.pasaport_gecerlilik_tarihi'), value: 'pasaport_gecerlilik_tarihi' },
        // { text: this.$t('Personeller.oturum_izin_no'), value: 'oturum_izin_no' },
        // { text: this.$t('Personeller.oturum_izin_tarihi'), value: 'oturum_izin_tarihi' },
        // { text: this.$t('Personeller.eposta'), value: 'eposta' },
        // { text: this.$t('Personeller.guvenlik_belgesi'), value: 'guvenlik_belgesi' },
        { text: this.$t('Personeller.created'), value: 'created' },
      ],
      duzenle: false,
      EditItem: {},
      personel: {},
      detay: false,
    }
  },
  computed: {
    ExcelFields() {
      let veri
      const fields = { }
      if (this.PersonellerListesi.length > 0) {
        veri = Object.keys(this.PersonellerListesi[0])
        veri.forEach(item => {
          // eslint-disable-next-line no-unused-vars
          const itemKey = this.$t(`Personeller.${item}`)
          fields[itemKey] = item
        })
      }

      return fields
    },
    ExcelHeader() {
      return [this.$t('APP_NAME'), `${this.$t('tarih')}:${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}`]
    },
    PersonellerListesi() {
      return this.$store.state.Personeller.Personeller
    },
    arama() {
      return this.$store.state.arama
    },
    ekle: {
      get() {
        if (this.$store.state.createDialog) {
          this.$router.push({ name: 'personel-olustur' })
        }

        return this.$store.state.createDialog
      },
      set(bool) {
        this.$store.state.createDialog = bool
      },
    },
  },
  // eslint-disable-next-line consistent-return
  mounted() {
    // Personeller Listesi Çek (store/Personeller.js)
    this.$store.dispatch('Action', { name: 'Personeller/PersonellerListesi' })
  },
  methods: {
    close() {
      this.detay = false
    },
    PersonelDosyalar(personel) {
      this.$router.push({ name: 'dosyalar', params: { id: personel.personel_no, isim: personel.isim, soyisim: personel.soyisim } })
    },
    PersonelDuzenle(personel) {
      this.$router.push({ name: 'personel-duzenle', params: { id: personel.id, personel } })
    },
    PersonelDetay(item) {
      this.personel = item
      this.detay = true
    },
  },
}
</script>
<style>
  .v-data-table > .v-data-table__wrapper .v-data-table__mobile-row {
    min-height: 25px;
  }
</style>
