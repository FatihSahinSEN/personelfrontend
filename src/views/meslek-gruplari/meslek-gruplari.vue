<template>
  <div>
    <v-card>
      <v-card-title>
        {{ $t('MeslekGruplari.MeslekGruplari') }}
        <download-excel
          :data="MeslekGruplariListesi"
          :name="$t('MeslekGruplari.ExcelFile')"
          :worksheet="$t('MeslekGruplari.ExcelFile')"
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
      :items="MeslekGruplariListesi"
      :search="arama"
      @click:row="edit"
    >
      <template v-slot:item.created="{ item }">
        <span>{{ new Date(item.created).toLocaleString() }}</span>
      </template>
    </v-data-table>
    <meslek-guncelle
      v-if="duzenle"
      :editdata="EditItem"
      @close="duzenle=false"
    />
    <meslek-olustur />
  </div>
</template>

<script>
import MeslekGuncelle from '@/views/meslek-gruplari/meslek-guncelle'
import MeslekOlustur from '@/views/meslek-gruplari/meslek-olustur'

export default {
  name: 'MeslekGruplari',
  components: { MeslekOlustur, MeslekGuncelle },
  data() {
    return {
      sutunlar: [
        {
          text: this.$t('MeslekGruplari.id'),
          align: 'start',
          filterable: false,
          value: 'id',
        },
        {
          text: this.$t('MeslekGruplari.meslek'),
          value: 'meslek',
        },
        {
          text: this.$t('MeslekGruplari.aciklama'),
          value: 'aciklama',
        },
        {
          text: this.$t('MeslekGruplari.olusturma_tarihi'),
          value: 'created',
        },
        {
          align: 'end',
          text: this.$t('kullanicilar.islem'),
          value: 'islem',
        },

      ],
      duzenle: false,
      EditItem: {},
    }
  },
  computed: {
    MeslekGruplariListesi() {
      return this.$store.state.MeslekGruplari.MeslekGruplari
    },
    arama() {
      return this.$store.state.arama
    },
    ExcelFields() {
      let veri
      const fields = { }
      if (this.MeslekGruplariListesi.length > 0) {
        veri = Object.keys(this.MeslekGruplariListesi[0])
        veri.forEach(item => {
          // eslint-disable-next-line no-unused-vars
          const itemKey = this.$t(`MeslekGruplari.${item}`)
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
    // MeslekGruplari Listesi Çek (store/MeslekGruplari.js)
    this.$store.dispatch('Action', { name: 'MeslekGruplari/MeslekGruplariListesi' })
  },
  methods: {
    edit(item) {
      this.EditItem = item
      this.duzenle = true
    },
  },
}
</script>
