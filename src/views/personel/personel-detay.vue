<template>
  <v-dialog
    v-model="show"
    transition="dialog-top-transition"
    max-width="600"
    :fullscreen="!isMobile"
    @click:outside="$emit('close')"
  >
    <template v-slot:default>
      <v-container>
        <v-card>
          <v-toolbar
            color="primary"
            dark
          >
            #{{ personel.personel_no }} - {{ personel.isim }} {{ personel.soyisim }}
            <v-spacer />

            <v-btn
              icon
              color="grey"
              @click="$emit('upload', personel)"
            >
              <v-icon>{{ icons.mdiCloudUploadOutline }}</v-icon>
            </v-btn>
            <v-btn
              icon
              color="grey"
              @click="$emit('edit', personel)"
            >
              <v-icon>{{ icons.mdiPencil }}</v-icon>
            </v-btn>
            <v-btn
              icon
              color="grey"
              @click="$emit('close')"
            >
              <v-icon>{{ icons.mdiWindowClose }}</v-icon>
            </v-btn>
          </v-toolbar>
          <v-card-text
            style="overflow-y:auto"
            :style="isMobile ? 'max-height: 70vh;' : 'max-height: 100vh;'"
          >
            <table class="table">
              <tr
                v-for="(p,i) in sutunlar"
                :key="i"
                :class="TrColors(i)"
              >
                <td class="baslik">
                  {{ p.text }} :
                </td>
                <td>
                  {{ personel[p.value] }}
                </td>
              </tr>
            </table>
          </v-card-text>
        </v-card>
      </v-container>
    </template>
  </v-dialog>
</template>

<script>
import {
  mdiWindowClose, mdiPencil, mdiPrinter, mdiCloudUploadOutline,
} from '@mdi/js'

export default {
  name: 'PersonelDetay',
  props: ['personel', 'show'],
  data() {
    return {
      icons: {
        mdiWindowClose,
        mdiPencil,
        mdiPrinter,
        mdiCloudUploadOutline,
      },
      sutunlar: [
        { align: 'start', text: this.$t('Personeller.personel_no'), value: 'personel_no' },
        { text: this.$t('Personeller.isim'), value: 'isim' },
        { text: this.$t('Personeller.soyisim'), value: 'soyisim' },
        { text: this.$t('Personeller.dogum_tarihi'), value: 'dogum_tarihi' },
        { text: this.$t('Personeller.dogum_yeri'), value: 'dogum_yeri' },
        { text: this.$t('Personeller.posta_kodu_id'), value: 'posta_kodu' },
        { text: this.$t('Personeller.sehir'), value: 'sehir' },
        { text: this.$t('Personeller.ulke_id'), value: 'de' },
        { text: this.$t('Personeller.cadde'), value: 'cadde' },
        { text: this.$t('Personeller.meslek_id'), value: 'meslek' },
        { text: this.$t('Personeller.ise_giris_tarihi'), value: 'ise_giris_tarihi' },
        { text: this.$t('Personeller.sigorta_sirketi_id'), value: 'sigorta_sirketi' },
        { text: this.$t('Personeller.kimlik_no'), value: 'kimlik_no' },
        { text: this.$t('Personeller.sosyal_guvenlik_no'), value: 'sosyal_guvenlik_no' },
        { text: this.$t('Personeller.uyruk_id'), value: 'uyruk' },
        { text: this.$t('Personeller.telefon'), value: 'telefon' },
        { text: this.$t('Personeller.kimlik_seri_no'), value: 'kimlik_seri_no' },
        { text: this.$t('Personeller.kimlik_gecerlilik_tarihi'), value: 'kimlik_gecerlilik_tarihi' },
        { text: this.$t('Personeller.pasaport_no'), value: 'pasaport_no' },
        { text: this.$t('Personeller.pasaport_gecerlilik_tarihi'), value: 'pasaport_gecerlilik_tarihi' },
        { text: this.$t('Personeller.oturum_izin_no'), value: 'oturum_izin_no' },
        { text: this.$t('Personeller.oturum_izin_tarihi'), value: 'oturum_izin_tarihi' },
        { text: this.$t('Personeller.eposta'), value: 'eposta' },
        { text: this.$t('Personeller.guvenlik_belgesi'), value: 'guvenlik_belgesi' },
        { text: this.$t('Personeller.created'), value: 'created' },
      ],
    }
  },
  methods: {
    Olustur() {
      console.log('Oluştur')
    },
    TrColors(i) {
      if (this.$store.state.DarkMode) {
        return i % 2 === 0 ? '' : 'DarkOdd'
      }

      return i % 2 === 0 ? '' : 'LightOdd'
    },
    isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      }

      return false
    },
  },
}
</script>

<style scoped>
  /* width */
  ::-webkit-scrollbar {
    width: 7px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #555555;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--v-primary-base);
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  .table {
    width: 100%;
    margin-top: 2rem;
    border-collapse: collapse
  }
  .table tr td {
    padding: 0.3rem;
    font-weight: 700;
  }
  .table tr .baslik {
    padding: 0.3rem;
    font-weight: 800;
  }
  .LightOdd {
    background-color: rgb(220 206 240)
  }
  .DarkOdd {
    background-color: rgb(65 53 92)
  }
  .table tr:hover {
    background: #9b81e2;
  }
</style>
