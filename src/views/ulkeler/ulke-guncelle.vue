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
          {{ old_data.de }} {{ $t('ulkeler.ulke_duzenle') }}
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
          <v-form
            ref="ulke_olustur"
            v-model="valid"
            lazy-validation
            class="mt-6"
          >
            <v-text-field
              v-model="data.code"
              :label="$t('ulkeler.code')"
              required
              autofocus
            ></v-text-field>
            <v-text-field
              v-model="data.de"
              :label="$t('ulkeler.german')"
              required
            ></v-text-field>
            <v-text-field
              v-model="data.en"
              :label="$t('ulkeler.english')"
              required
            ></v-text-field>
            <div
              class="justify-center align-center"
              style="display: flex"
            >
              <v-btn
                :disabled="!valid"
                color="primary"
                @click="UlkeOlustur"
              >
                {{ $t('ulkeler.ulke_kaydet') }}
              </v-btn>
            </div>
          </v-form>
        </v-card-text>
      </v-card>
    </template>
  </v-dialog>
</template>

<script>

import { mdiWindowClose } from '@mdi/js'

export default {
  name: 'UlkeOlustur',
  props: ['editdata'],
  data: () => ({
    valid: true,
    data: {
      id: '',
      code: '',
      de: '',
      en: '',
    },
    show: true,
    old_data: {},
    icons: {
      mdiWindowClose,
    },
  }),
  mounted() {
    const veri = { ...this.editdata }
    this.data.id = veri.id
    this.data.code = veri.code
    this.data.de = veri.de
    this.data.en = veri.en
    this.old_data = veri
  },
  methods: {
    async UlkeOlustur() {
      await this.$store.dispatch('Action', { name: 'Ulkeler/UlkeGuncelle', data: this.data }).then(async () => {
        this.$store.commit('PopupEkleme', false)
        this.data = {
          code: '',
          de: '',
          en: '',
        }
        await this.$store.dispatch('Action', { name: 'Ulkeler/UlkeListesi' })
        await this.$emit('close')
      }).catch(() => {
        setTimeout(() => {
          this.$store.dispatch('Action', { name: 'Ulkeler/UlkeListesi' })
          this.$emit('close')
        }, 700)
      })
    },
  },

}
</script>

<style scoped>

</style>
