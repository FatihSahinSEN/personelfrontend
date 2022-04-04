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
          {{ $t('Sehirler.sehir_olustur') }}
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
            v-model="data.posta_kodu"
            class="mt-4"
            :label="$t('Sehirler.posta_kodu')"
            required
            autofocus
          ></v-text-field>
          <v-text-field
            v-model="data.sehir"
            :label="$t('Sehirler.sehir')"
            required
            @keyup.enter="SehirOlustur"
          ></v-text-field>
          <div
            class="justify-center align-center"
            style="display: flex"
          >
            <v-btn
              color="primary"
              @click="SehirOlustur"
            >
              {{ $t('Sehirler.sehir_kaydet') }}
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
  name: 'SehirGuncelle',
  props: ['editdata'],
  data: () => ({
    show: true,
    data: {
      id: '',
      posta_kodu: '',
      sehir: '',
    },
    icons: {
      mdiWindowClose,
    },
  }),
  mounted() {
    const veri = { ...this.editdata }
    this.data.id = veri.id
    this.data.posta_kodu = veri.posta_kodu
    this.data.sehir = veri.sehir
    this.old_data = veri
  },

  methods: {
    SehirOlustur() {
      this.$store.dispatch('Action', { name: 'Sehirler/SehirGuncelle', data: this.data }).then(() => {
        this.$store.commit('PopupEkleme', false)
        this.data = {
          id: '',
          posta_kodu: '',
          sehir: '',
        }
        this.$store.dispatch('Action', { name: 'Sehirler/SehirListesi' })
        this.$emit('close')
      }).catch(() => {
        setTimeout(() => {
          this.$store.dispatch('Action', { name: 'Sehirler/SehirListesi' })
          this.$emit('close')
        }, 700)
      })
    },
  },

}
</script>

    <style scoped>
    </style>
  </v-dialog>
</template>
