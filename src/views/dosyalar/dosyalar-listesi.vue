<template>
  <div>
    <v-card>
      <v-card-title class="text-uppercase">
        {{ $t('Dosyalar.dosya_listesi') }}
        <download-excel
          :data="Dosyalar"
          :name="$t('Dosyalar.ExcelName')"
          :worksheet="$t('Dosyalar.ExcelName')"
          :fields="ExcelFields"
          :header="ExcelHeader"
          class="ml-3"
        >
          <img src="@/assets/images/misc/excel.png" style="width: 25px" />
        </download-excel>
      </v-card-title>
    </v-card>
    <v-data-table
      :items="Dosyalar"
      :headers="sutunlar"
      :search="arama"
    >
      <template v-slot:item.id="{ item }">
        <a @click="DosyaAC(item)">
          <v-icon
            x-large
            :color="IconColor(item.dosya_uzantisi)"
          >
            {{ DosyaIcon(item.dosya_uzantisi) }}
          </v-icon>
        </a>
      </template>
      <template v-slot:item.dosya_boyutu="{ item }">
        <span>{{ bytesToSize(item.dosya_boyutu) }}</span>
      </template>
      <template v-slot:item.islem="{ item }">
        <a
          color="primary"
          class="ml-3"
          dense
          icon
          :download="item.dosya_adi"
          target="_blank"
          @click="DownloadSingle(item.id)"
        >
          <v-icon color="#4d843d">
            {{ icons.download }}
          </v-icon>
        </a>
        <v-btn
          color="primary"
          class="ml-3"
          dense
          icon
          @click="DosyaSil(item)"
        >
          <v-icon color="#951e18">
            {{ icons.remove }}
          </v-icon>
        </v-btn>
      </template>
    </v-data-table>
    <dosya-yuke />
  </div>
</template>

<script>
import {
  mdiFilePdfBox, mdiFileExcel, mdiFileWord, mdiFileImage, mdiLanguageHtml5, mdiLanguageCss3, mdiLanguagePhp,
  mdiFileQuestion, mdiCloudUploadOutline, mdiDeleteForever, mdiCloudDownload,
} from '@mdi/js'
import axios from 'axios'
import DosyaYuke from '@/views/dosyalar/dosya_yukle'
import api from '@/boot/axios'

export default {
  name: 'Dosyalar',
  components: { DosyaYuke },
  data() {
    return {
      sutunlar: [
        {
          text: this.$t('Dosyalar.id'),
          align: 'start',
          filterable: false,
          value: 'id',
        },

        {
          text: this.$t('Dosyalar.personel_no'),
          value: 'personel_no',
        },

        {
          text: this.$t('Dosyalar.personel_isim'),
          value: 'personel_isim',
        },

        {
          text: this.$t('Dosyalar.personel_soyisim'),
          value: 'personel_soyisim',
        },

        {
          text: this.$t('Dosyalar.evrak'),
          value: 'evrak',
        },

        {
          text: this.$t('Dosyalar.evrak_grup'),
          value: 'evrak_grup',
        },
        {
          text: this.$t('Dosyalar.dosya_adi'),
          value: 'dosya_adi',
        },
        {
          text: this.$t('Dosyalar.dosya_boyutu'),
          value: 'dosya_boyutu',
        },

        {
          text: this.$t('Dosyalar.bitis_tarihi'),
          value: 'bitis_tarihi',
        },
        {
          text: this.$t('Dosyalar.olusturma_tarihi'),
          value: 'created',
        },
        {
          align: 'end',
          text: this.$t('Dosyalar.islem'),
          value: 'islem',
        },

      ],
      icons: {
        pdf: mdiFilePdfBox,
        xls: mdiFileExcel,
        xlsx: mdiFileExcel,
        doc: mdiFileWord,
        docx: mdiFileWord,
        png: mdiFileImage,
        jpg: mdiFileImage,
        jpeg: mdiFileImage,
        gif: mdiFileImage,
        svg: mdiFileImage,
        webp: mdiFileImage,
        html: mdiLanguageHtml5,
        htm: mdiLanguageHtml5,
        php: mdiLanguagePhp,
        css: mdiLanguageCss3,
        none: mdiFileQuestion,
        upload: mdiCloudUploadOutline,
        remove: mdiDeleteForever,
        download: mdiCloudDownload,
      },
      colors: {
        pdf: '#F40F02',
        xls: '#175934',
        xlsx: '#175934',
        csv: '#175934',
        doc: '#295394',
        docx: '#295394',
        png: 'primary',
        jpg: 'primary',
        jpeg: 'primary',
        gif: 'primary',
        svg: 'primary',
        webp: 'primary',
        html: '#dd4b25',
        htm: '#dd4b25',
        php: '#7377ad',
        css: '#254bdd',
      },
    }
  },
  computed: {
    Dosyalar() {
      return this.$store.state.Dosyalar.Dosyalar
    },
    title() {
      if (this.Dosyalar.length > 0) {
        return `#${this.Dosyalar[0].personel_no} ─ ${this.Dosyalar[0].personel_isim} ${this.Dosyalar[0].personel_soyisim} ─`
      }

      return `#${this.$route.params.id} ─ ${this.$route.params.isim} ${this.$route.params.soyisim} ─`
    },
    arama() {
      return this.$store.state.arama
    },
    ExcelFields() {
      let veri
      const fields = { }
      if (this.Dosyalar.length > 0) {
        veri = Object.keys(this.Dosyalar[0])
        veri.forEach(item => {
          // eslint-disable-next-line no-unused-vars
          const itemKey = this.$t(`Dosyalar.${item}`)
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
    this.$store.dispatch('Action', { name: 'Dosyalar/TumDosyalar' })
  },
  methods: {
    // eslint-disable-next-line consistent-return
    DosyaIcon(uzanti) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.icons.hasOwnProperty(uzanti)) return this.icons[uzanti]

      return this.icons.none
    },
    IconColor(uzanti) {
      // eslint-disable-next-line no-prototype-builtins
      if (this.colors.hasOwnProperty(uzanti)) return this.colors[uzanti]

      return 'primary'
    },
    DosyaURL(dosya) {
      return `${this.$t('UPLOAD_URL') + dosya.personel_no}/${dosya.dosya}`
    },
    DosyaAC(item) {
      const url = this.DosyaURL(item)
      window.open(url, 'popUpWindow', 'height=500,width=400,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes')
    },
    DosyaYukle() {
      this.$store.state.createDialog = true
    },
    DownloadAll() {
      const url = `download/allfiles/${this.$route.params.id}`
      api.get(url).then(response => {
        window.open(this.$t('UPLOAD_URL') + response.data.result)
      })
    },
    async DownloadSingle(id) {
      const url = `${this.$t('BACKEND_URL')}download/single/${id}`
      window.open(url)
    },
    DosyaSil(dosya) {
      this.$store.dispatch('Action', { name: 'Dosyalar/DosyalarSil', data: { id: dosya.id } })
    },
    bytesToSize(bytes) {
      const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
      if (bytes == 0) return '0 Byte'
      // eslint-disable-next-line radix
      const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)))

      // eslint-disable-next-line no-restricted-properties
      return `${Math.round(bytes / Math.pow(1024, i), 2)} ${sizes[i]}`
    },
  },
}
</script>

<style scoped>

</style>
