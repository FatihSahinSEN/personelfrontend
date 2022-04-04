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
          {{ old_data.isim }} {{ $t('SigortaSirketleri.sigorta_sirketi_duzenle') }}
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
          <v-text-field
            v-model="data.isim"
            class="mt-4"
            :label="$t('SigortaSirketleri.isim')"
            required
            autofocus
            @keyup.enter="sigorta_sirketiOlustur"
          ></v-text-field>
          <div
            class="justify-center align-center"
            style="display: flex"
          >
            <v-btn
              color="primary"
              @click="sigorta_sirketiOlustur"
            >
              {{ $t('SigortaSirketleri.sigorta_sirketi_kaydet') }}
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
  name: 'SigortaSirketiGuncelle',
  props: ['editdata'],
  data: () => ({
    show: true,
    data: {
      id: '',
      isim: '',
    },
    icons: {
      mdiWindowClose,
    },
    old_data: {},
  }),
  mounted() {
    const veri = { ...this.editdata }
    this.data.id = veri.id
    this.data.isim = veri.isim
    this.old_data = veri
  },

  methods: {
    sigorta_sirketiOlustur(event) {
      event.preventDefault()
      this.$store.dispatch('Action', { name: 'SigortaSirketleri/SigortaSirketleriGuncelle', data: this.data }).then(() => {
        this.$store.commit('PopupEkleme', false)
        this.data = {
          isim: '',
        }
        this.$store.dispatch('Action', { name: 'SigortaSirketleri/SigortaSirketleriListesi' })
        this.$emit('close')
      }).catch(() => {
        setTimeout(() => {
          this.$store.dispatch('Action', { name: 'SigortaSirketleri/SigortaSirketleriListesi' })
          this.$emit('close')
        }, 700)
      })
    },
  },
}
</script>

<style scoped>

</style>
