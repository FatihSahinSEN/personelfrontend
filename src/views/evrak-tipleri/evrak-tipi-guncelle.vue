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
          {{ old_data.isim }} - {{ $t('EvrakTipleri.evrak_duzenle') }}
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
            v-model="data.grup"
            :items="evrak_gurubu"
            item-value="name"
            item-text="name"
            dense
            :label="$t('EvrakTipleri.evrak_gurubu')"
            class="mt-4"
          ></v-autocomplete>
          <v-text-field
            v-model="data.isim"
            :label="$t('EvrakTipleri.isim')"
            required
            autofocus
          ></v-text-field>
          <v-text-field
            v-model="data.aciklama"
            :label="$t('EvrakTipleri.aciklama')"
            required
            @keyup.enter="evrakOlustur"
          ></v-text-field>
          <div
            class="justify-center align-center"
            style="display: flex"
          >
            <v-btn
              color="primary"
              @click="evrakOlustur"
            >
              {{ $t('EvrakTipleri.evrak_kaydet') }}
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
  name: 'EvrakGuncelle',
  props: ['editdata'],
  data: () => ({
    show: true,
    data: {
      id: '',
      isim: '',
      grup: '',
      aciklama: '',
    },
        evrak_gurubu: [
          {name: 'Personaldaten'},
          {name: 'Qualifikation'},
          {name: 'Übernachtung'},
          {name: 'Überlassung'},
          {name: 'Arbeitsmedizin'},
      ],
    icons: {
      mdiWindowClose,
    },
    old_data: {},
  }),
  mounted() {
    const veri = { ...this.editdata }
    this.data.id = veri.id
    this.data.isim = veri.isim
    this.data.aciklama = veri.aciklama
    this.old_data = veri
  },

  methods: {
    evrakOlustur() {
      this.$store.dispatch('Action', { name: 'EvrakTipleri/EvrakTipleriGuncelle', data: this.data }).then(() => {
        this.$store.commit('PopupEkleme', false)
        this.data = {
          id: '',
          isim: '',
          aciklama: '',
        }
        this.$store.dispatch('Action', { name: 'EvrakTipleri/EvrakTipleriListesi' })
        this.$emit('close')
      }).catch(() => {
        setTimeout(() => {
          this.$store.dispatch('Action', { name: 'EvrakTipleri/EvrakTipleriListesi' })
          this.$emit('close')
        }, 700)
      })
    },
  },

}
</script>

<style scoped>

</style>
