<template>
  <Modal
    :show="Ekle"
    :title="$t('Sozlesmeler.olustur')"
    :save-text="$t('Sozlesmeler.kaydet')"
    @close="Ekle = false"
    @saveMethod="Olustur"
  >
    <template v-slot:form>
      <v-autocomplete
        v-model="data.firma_id"
        :items="FirmaListesi"
        item-value="id"
        :filter="filter"
        item-text="adi"
        dense
        :label="$t('Sozlesmeler.firma_sec')"
        class="mt-4"
        autofocus
      ></v-autocomplete>

      <v-autocomplete
        v-model="data.personel_id"
        :items="PersonelFiltered"
        item-value="id"
        :filter="filter"
        item-text="isim"
        dense
        :label="$t('Sozlesmeler.personel_sec')"
        class="mt-2"
      ></v-autocomplete>

      <v-text-field
        v-model="data.baslama_tarihi"
        :label="$t('Sozlesmeler.baslama_tarihi')"
        type="date"
        dense
        class="mt-3"
      ></v-text-field>

      <v-text-field
        v-model="data.ucret_grubu"
        :label="$t('Sozlesmeler.ucret_grubu')"
        type="number"
        dense
        class="mt-3"
      ></v-text-field>

      <v-text-field
        v-model="data.saat_ucreti"
        :label="$t('Sozlesmeler.saat_ucreti')"
        type="number"
        step="0.01"
        dense
        class="mt-3"
      ></v-text-field>


      <v-text-field
        v-model="data.ek_ucret"
        :label="$t('Sozlesmeler.ek_ucret')"
        type="number"
        step="0.01"
        dense
        class="mt-3"
      ></v-text-field>


      <v-text-field
        v-model="data.imza_tarihi"
        :label="$t('Sozlesmeler.imza_tarihi')"
        type="date"
        dense
        class="mt-3"
      ></v-text-field>

    </template>
  </Modal>
</template>

<script>
import { mdiWindowClose } from '@mdi/js'
import Modal from '@/components/Modal'

export default {
  name: 'SozlesmeOlustur',
  components: { Modal },
  data: () => ({
    data: {
      firma_id: '',
      personel_id: '',
      baslama_tarihi: null,
      ucret_grubu: 1,
      saat_ucreti: '.00',
      ek_ucret: '.00',
      imza_tarihi: null,
    },
    icons: {
      mdiWindowClose,
    },
  }),
  computed: {
    PersonelFiltered() {
      const Personel = this.PersonellerListesi.map(item => ({
        id: item.id,
        isim: `${item.personel_no} » ${item.isim} ${item.soyisim} ${item.meslek ? `» ${item.meslek}` : ''} ${item.kimlik_no ? `» ${item.kimlik_no}` : ''}`,
      }))

      return Personel
    },
    PersonellerListesi() {
      if (this.$store.state.Personeller.Personeller.length > 0) {
        return this.$store.state.Personeller.Personeller
      }
      this.$store.dispatch('Action', { name: 'Personeller/PersonellerListesi' })

      return this.$store.state.Personeller.Personeller
    },
    FirmaListesi() {
      if (this.$store.state.Firmalar.Firmalar.length > 0) {
        return this.$store.state.Firmalar.Firmalar
      }
      this.$store.dispatch('Action', { name: 'Firmalar/FirmalarListesi' })

      return this.$store.state.Firmalar.Firmalar
    },
    Ekle: {
      get() {
        return this.$store.state.createDialog
      },
      set(bool) {
        this.$store.state.createDialog = bool
      },
    },
  },
  methods: {
    Olustur() {
      this.$store.dispatch('Action', { name: 'Sozlesmeler/SozlesmelerOlustur', data: this.data }).then(() => {
        this.Ekle = false
        this.data = {
          firma_id: '',
          personel_id: '',
          baslama_tarihi: null,
          ucret_grubu: 1,
          saat_ucreti: '.00',
          ek_ucret: '.00',
          imza_tarihi: null,
        }
      })
    },
    filter(item, queryText, itemText) {
      queryText = queryText.replace(/[İı]/g, 'i')
      itemText = itemText.replace(/[İı]/g, 'i')

      return itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
    },
  },

}
</script>

<style scoped>

</style>
