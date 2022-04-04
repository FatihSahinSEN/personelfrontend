<template>
  <div>
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
