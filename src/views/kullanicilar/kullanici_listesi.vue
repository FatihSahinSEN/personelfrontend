<template>
  <div>
    <v-card>
      <v-card-title>
        {{ $t('kullanicilar.kullanicilar') }}
        <download-excel
          :data="kullanici_listesi"
          :name="$t('kullanicilar.ExcelFile')"
          :worksheet="$t('kullanicilar.ExcelFile')"
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
      :items="kullanici_listesi"
      :search="arama"
    >
      <template v-slot:item.yetki="{ item }">
        <span v-if="item.yetki==1">
          {{ $t('kullanicilar.kullanici') }}
        </span>
        <span v-if="item.yetki==2">
          {{ $t('kullanicilar.yonetici') }}
        </span>
      </template>

      <template v-slot:item.islem="{ item }">
        <v-btn
          text
          icon
          color="primary"
          @click="edit(item)"
        >
          <v-icon>
            {{ icons.mdiPencilBox }}
          </v-icon>
        </v-btn>
      </template>
      <template v-slot:item.created="{ item }">
        <span>{{ new Date(item.created).toLocaleString() }}</span>
      </template>
    </v-data-table>
    <kullanici-olustur />
  </div>
</template>

<script>
import { mdiPencilBox, mdiDeleteCircle } from '@mdi/js'
import KullaniciOlustur from '@/views/kullanicilar/kullanici_olustur'

export default {
  name: 'KullaniciListesi',
  components: { KullaniciOlustur },
  data() {
    return {
      icons: {
        mdiPencilBox,
        mdiDeleteCircle,
      },
      sutunlar: [
        {
          text: this.$t('kullanicilar.id'),
          align: 'start',
          filterable: false,
          value: 'id',
        },
        {
          text: this.$t('kullanicilar.kullanici_adi'),
          value: 'kullanici_adi',
        },
        {
          text: this.$t('kullanicilar.isim'),
          value: 'isim',
        },
        {
          text: this.$t('kullanicilar.soyisim'),
          value: 'soyisim',
        },
        {
          text: this.$t('kullanicilar.yetki'),
          value: 'yetki',
        },
        {
          text: this.$t('kullanicilar.olusturma_tarihi'),
          value: 'created',
        },
        {
          align: 'end',
          text: this.$t('kullanicilar.islem'),
          value: 'islem',
        },

      ],
    }
  },
  computed: {
    kullanici_listesi() {
      return this.$store.state.User.kullanici_listesi
    },
    arama() {
      return this.$store.state.arama
    },
    ExcelFields() {
      let veri
      const fields = { }
      if (this.kullanici_listesi.length > 0) {
        veri = Object.keys(this.kullanici_listesi[0])
        veri.forEach(item => {
          // eslint-disable-next-line no-unused-vars
          const itemKey = this.$t(`kullanicilar.${item}`)
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
    this.$store.dispatch('Action', { name: 'User/KullaniciListesi' })
  },
  methods: {
    edit(item) {
      this.$router.push({ name: 'kullanici-guncelle', params: { id: item.id, user: item, cancel: true } })
    },
  },
}
</script>

<style scoped>
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    height: 2rem
  }
</style>
