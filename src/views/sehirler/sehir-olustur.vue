<template>
  <v-dialog
    v-model="Ekle"
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
            @click="Ekle = false"
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
  name: 'SehirOlustur',
  data: () => ({
    valid: true,
    data: {
      posta_kodu: '',
      sehir: '',
    },
    icons: {
      mdiWindowClose,
    },
  }),
  computed: {
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
    SehirOlustur() {
      this.$store.dispatch('Action', { name: 'Sehirler/SehirOlustur', data: this.data }).then(() => {
        this.Ekle = false
        this.data = {
          posta_kodu: '',
          sehir: '',
        }
      })
    },
  },

}
</script>

<style scoped>

</style>
