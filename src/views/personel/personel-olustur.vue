<template>
  <div>
    <v-row>
      <div style="display: flex;width: 100%;flex-wrap: wrap;">
        <div style="display: flex;width:50%;" v-for="(s, index) in form" :key="s.value">
          <v-autocomplete
            v-model="s.data"
            :items="Meslekler"
            :filter="filter"
            item-value="id"
            item-text="meslek"
            dense
            :label="(index+1) + '. ' + s.text"
            class="col-3 col-md-6 col-sm-12"
            v-if="s.type === 'meslek'"
            :search-input.sync="MeslekSearch"
            @keypress.enter="MeslekEkle"
          ></v-autocomplete>
          <v-autocomplete
            v-model="s.data"
            :items="Uyruklar"
            :filter="filter"
            item-value="id"
            item-text="uyruk"
            dense
            :label="(index+1) + '. ' + s.text"
            class="col-3 col-md-6 col-sm-12"
            :search-input.sync="UyrukSearch"
            @keypress.enter="UyrukEkle"
            v-else-if="s.type === 'uyruk'"
          ></v-autocomplete>
          <v-autocomplete
            v-model="s.data"
            :items="Ulkeler"
            item-value="id"
            item-text="de"
            dense
            :label="(index+1) + '. ' + s.text"
            class="col-3 col-md-6 col-sm-12"
            v-else-if="s.type === 'ulke'"
          ></v-autocomplete>
          <v-autocomplete
            v-model="s.data"
            :items="Postakodlari"
            :filter="filter"
            item-value="id"
            item-text="posta_kodu"
            dense
            :label="(index+1) + '. ' + s.text"
            v-else-if="s.type === 'posta_kodu'"
            class="col-3 col-md-6 col-sm-12"
          ></v-autocomplete>
          <v-autocomplete
            v-model="s.data"
            :items="SigortaSirketleri"
            item-value="id"
            :filter="filter"
            item-text="isim"
            dense
            :label="(index+1) + '. ' + s.text"
            :search-input.sync="SigortaSirketiSearch"
            @keypress.enter="SigortaSirketiEkle"
            v-else-if="s.type === 'sigorta_sirketi'"
            class="col-3 col-md-6 col-sm-12"
          ></v-autocomplete>

          <v-text-field
            v-model="s.data"
            :type="s.type"
            :label="(index+1) + '. ' + s.text"
            class="col-3 col-md-6 col-sm-12"
            v-else
            dense
          ></v-text-field>
        </div>
      </div>
      <div style="display: flex;justify-content: center;width: 100%">
        <v-btn
          color="primary"
          @click="Olustur"
          width="300px"
        >
          {{ $t('Personeller.kaydet') }}
        </v-btn>
      </div>
    </v-row>
  </div>
</template>
<script>
import { mdiWindowClose } from '@mdi/js'

export default {
  name: 'PersonelOlustur',
  data() {
    return {
      MeslekSearch: '',
      SigortaSirketiSearch: '',
      UyrukSearch: '',
      tabs: [this.$t('Personeller.kisisel'), this.$t('Personeller.adres'), this.$t('Personeller.resmi')],
      data: {
        uyruk: '',
      },
      icons: {
        mdiWindowClose,
      },
      form: [
        { type: 'text', data: '', text: this.$t('Personeller.personel_no'), value: 'personel_no' },
        { type: 'text', data: '', text: this.$t('Personeller.isim'), value: 'isim' },
        { type: 'text', data: '', text: this.$t('Personeller.soyisim'), value: 'soyisim' },
        { type: 'date', data: '', text: this.$t('Personeller.dogum_tarihi'), value: 'dogum_tarihi' },
        { type: 'text', data: '', text: this.$t('Personeller.dogum_yeri'), value: 'dogum_yeri' },
        { type: 'text', data: '', text: this.$t('Personeller.telefon'), value: 'telefon' },
        { type: 'text', data: '', text: this.$t('Personeller.eposta'), value: 'eposta' },
        { type: 'meslek', data: '', text: this.$t('Personeller.meslek_id'), value: 'meslek_id' },
        { type: 'uyruk', data: '', text: this.$t('Personeller.uyruk_id'), value: 'uyruk_id' },
        { type: 'date', data: '', text: this.$t('Personeller.ise_giris_tarihi'), value: 'ise_giris_tarihi' },
        { type: 'ulke', data: '', text: this.$t('Personeller.ulke_id'), value: 'ulke_id' },
        { type: 'posta_kodu', data: '', text: this.$t('Personeller.posta_kodu_ve_sehir'), value: 'posta_kodu_id' },
        { type: 'text', data: '', text: this.$t('Personeller.cadde'), value: 'cadde' },
        { type: 'sigorta_sirketi', data: '', text: this.$t('Personeller.sigorta_sirketi_id'), value: 'sigorta_sirketi_id' },
        { type: 'text', data: '', text: this.$t('Personeller.kimlik_no'), value: 'kimlik_no' },
        { type: 'text', data: '', text: this.$t('Personeller.sosyal_guvenlik_no'), value: 'sosyal_guvenlik_no' },
        { type: 'text', data: '', text: this.$t('Personeller.kimlik_seri_no'), value: 'kimlik_seri_no' },
        { type: 'date', data: '', text: this.$t('Personeller.kimlik_gecerlilik_tarihi'), value: 'kimlik_gecerlilik_tarihi' },
        { type: 'text', data: '', text: this.$t('Personeller.pasaport_no'), value: 'pasaport_no' },
        { type: 'date', data: '', text: this.$t('Personeller.pasaport_gecerlilik_tarihi'), value: 'pasaport_gecerlilik_tarihi' },
        { type: 'text', data: '', text: this.$t('Personeller.oturum_izin_no'), value: 'oturum_izin_no' },
        { type: 'date', data: '', text: this.$t('Personeller.oturum_izin_tarihi'), value: 'oturum_izin_tarihi' },
        { type: 'text', data: '', text: this.$t('Personeller.guvenlik_belgesi'), value: 'guvenlik_belgesi' },
      ],
    }
  },
  mounted() {
    this.$store.state.createDialog = false
  },
  methods: {
    async Olustur() {
      const veri = {}
      await this.form.forEach((item)=> {
        veri[item.value] = item.data
      })
      this.$store.dispatch('Action', { name: 'Personeller/PersonellerOlustur', data: veri }).then(() => {
        this.data = {
          uyruk: '',
        }
      })
    },
    UyrukEkle() {
      const uyruk = {
        uyruk: this.UyrukSearch,
      }
      if (this.Uyruklar.findIndex(item => item.uyruk === uyruk.uyruk) === -1) {
        this.$store.dispatch('Action', { name: 'Uyruklar/UyruklarOlustur', data: uyruk }).then(() => {
          setTimeout(() => {
            const i = this.form.findIndex(item => item.type === 'uyruk')
            this.form[i].data = this.Uyruklar[(this.Uyruklar.length - 1)]?.id
          }, 200)
        })
      }
    },
    SigortaSirketiEkle() {
      const sigortasirketi = {
        isim: this.SigortaSirketiSearch,
      }
      if (this.SigortaSirketleri.findIndex(item => item.isim === sigortasirketi.isim) === -1) {
        this.$store.dispatch('Action', { name: 'SigortaSirketleri/SigortaSirketleriOlustur', data: sigortasirketi }).then(() => {
          setTimeout(() => {
            const i = this.form.findIndex(item => item.type === 'sigorta_sirketi')
            this.form[i].data = this.SigortaSirketleri[(this.SigortaSirketleri.length - 1)]?.id
          }, 200)
        })
      }
    },
    MeslekEkle() {
      console.log('Çalıştı')
      const meslek = {
        meslek: this.MeslekSearch,
      }
      if (this.Meslekler.findIndex(item => item.meslek === meslek.meslek) === -1) {
        this.$store.dispatch('Action', { name: 'MeslekGruplari/MeslekGruplariOlustur', data: meslek }).then(() => {
          setTimeout(() => {
            const i = this.form.findIndex(item => item.type === 'meslek')
            this.form[i].data = this.Meslekler[(this.Meslekler.length - 1)]?.id
          }, 200)
        })
      }
    },
    filter(item, queryText, itemText) {
      queryText = queryText.replace(/[İı]/g, 'i')
      itemText = itemText.replace(/[İı]/g, 'i')

      return itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
    },
  },
  computed: {
    Meslekler() {
      return this.$store.state.MeslekGruplari.MeslekGruplari
    },
    Ulkeler() {
      return this.$store.state.Ulkeler.ulkeler
    },
    Uyruklar() {
      return this.$store.state.Uyruklar.Uyruklar
    },
    Postakodlari() {
      const PostaKodlariVeSehirler = this.$store.state.Sehirler.Sehirler.map((item) => {
        return {
          id: item.id,
          posta_kodu: item.posta_kodu + ' > ' + item.sehir
        }
      })

      return PostaKodlariVeSehirler
    },
    SigortaSirketleri() {
      return this.$store.state.SigortaSirketleri.SigortaSirketleri
    },
  },
  created() {
    this.$store.dispatch('Action', { name: 'MeslekGruplari/MeslekGruplariListesi' })
    this.$store.dispatch('Action', { name: 'Uyruklar/UyruklarListesi' })
    this.$store.dispatch('Action', { name: 'Ulkeler/UlkeListesi' })
    this.$store.dispatch('Action', { name: 'SigortaSirketleri/SigortaSirketleriListesi' })
    this.$store.dispatch('Action', { name: 'Sehirler/SehirListesi' })
    this.$store.dispatch('Action', { name: 'EvrakTipleri/EvrakTipleriListesi' })
  },

}
</script>

<style scoped>

</style>
