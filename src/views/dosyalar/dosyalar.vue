<template>
  <div>
    <v-card>
      <v-card-title class="text-uppercase">
        {{ title }}
        <v-btn
          color="primary"
          class="ml-3"
          dense
          @click="DosyaYukle"
        >
          <v-icon color="mr-3">
            {{ icons.upload }}
          </v-icon>
            {{ $t('Dosyalar.dosya_yukle') }}
        </v-btn>
        <v-btn
          color="primary"
          class="ml-3"
          dense
          @click="DownloadAll"
        >
          <v-icon color="mr-3">
            {{ icons.upload }}
          </v-icon>
            {{ $t('Dosyalar.tumunu_indir') }}
        </v-btn>
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
      <template v-slot:item.created="{ item }">
        <span>{{ new Date(item.created).toLocaleString() }}</span>
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
          text: this.$t('Dosyalar.evrak'),
          value: 'evrak',
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
  },
  mounted() {
    this.$store.dispatch('Action', { name: 'Dosyalar/DosyalarListesi', data: this.$route.params })
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
