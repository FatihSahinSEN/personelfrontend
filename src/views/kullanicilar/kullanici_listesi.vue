<template>
  <div>
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
  },
  mounted() {
    // Kullanici Listesi Çek (store/kullanicilar.js)
    this.$store.dispatch('Action', { name: 'User/KullaniciListesi' })
  },
  methods: {
    edit(item) {
      this.$router.push({ name: 'kullanici-guncelle', params: { id: item.id, user: item } })
    },
  },
}
</script>

<style scoped>
  .v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
    height: 2rem
  }
</style>
