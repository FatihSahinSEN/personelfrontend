<template>
  <v-dialog
    v-model="show"
    transition="dialog-top-transition"
    max-width="600"
    persistent
  >
    <template v-slot:default>
      <v-card>
        <v-toolbar
          color="primary"
          dark
        >
          {{ old_data.isim }} {{ $t('Sozlesmeler.duzenle') }}
          <v-spacer />
          <v-btn
            icon
            color="grey"
            @click="$emit('close')"
          >
            <v-icon>{{ icons.mdiWindowClose }}</v-icon>
          </v-btn>
        </v-toolbar>
        <v-card-text>
          <v-autocomplete
            v-model="data.firma_id"
            :items="FirmaListesi"
            item-value="id"
            :filter="filter"
            item-text="adi"
            dense
            :label="$t('Sozlesmeler.firma_sec')"
            class="mt-4"
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
          <div
            class="justify-center align-center"
            style="display: flex"
          >
            <v-btn
              color="primary"
              @click="Guncelle"
            >
              {{ $t('Sozlesmeler.kaydet') }}
            </v-btn>
          </div>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>
import { mdiWindowClose } from '@mdi/js'

export default {
  name: 'SozlesmeGuncelle',
  props: ['editdata'],
  data: () => ({
    show: true,
    data: {
      id: '',
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
    old_data: {},
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
  },
  mounted() {
    const veri = { ...this.editdata }
    this.old_data = veri
    this.data.id = veri.id
    this.data.firma_id = veri.firma_id
    this.data.personel_id = veri.personel_id
    this.data.baslama_tarihi = this.tarih(veri.baslama_tarihi)
    this.data.ucret_grubu = veri.ucret_grubu
    this.data.saat_ucreti = veri.saat_ucreti
    this.data.ek_ucret = veri.ek_ucret
    this.data.imza_tarihi = this.tarih(veri.imza_tarihi)
  },
  methods: {
    Guncelle(event) {
      event.preventDefault()
      this.$store.dispatch('Action', { name: 'Sozlesmeler/SozlesmelerGuncelle', data: this.data }).then(() => {
        this.$store.commit('PopupEkleme', false)
        this.data = {
          isim: '',
        }
        this.$store.dispatch('Action', { name: 'Sozlesmeler/SozlesmelerListesi' })
        this.$emit('close')
      }).catch(() => {
        setTimeout(() => {
          this.$store.dispatch('Action', { name: 'Sozlesmeler/SozlesmelerListesi' })
          this.$emit('close')
        }, 700)
      })
    },
    filter(item, queryText, itemText) {
      queryText = queryText.replace(/[İı]/g, 'i')
      itemText = itemText.replace(/[İı]/g, 'i')

      return itemText.toLocaleLowerCase().indexOf(queryText.toLocaleLowerCase()) > -1
    },
    tarih(tarih) {
      const date = tarih.split('.')
      const gun = date[0]
      const ay = date[1]
      const yil = date[2]

      return `${yil}-${ay}-${gun}`
    },
  },
}
</script>

<style scoped>

</style>
