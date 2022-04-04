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
          {{ old_data.uyruk }} {{ $t('Uyruklar.Uyruk_duzenle') }}
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
            v-model="data.uyruk"
            :label="$t('Uyruklar.uyruk')"
            class="mt-4"
            required
            autofocus
            @keypress.enter="UyrukOlustur"
          ></v-text-field>
          <div
            class="justify-center align-center"
            style="display: flex"
          >
            <v-btn
              color="primary"
              @click="UyrukOlustur"
            >
              {{ $t('Uyruklar.Uyruk_kaydet') }}
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
  name: 'UyrukDuzenle',
  props: ['editdata'],
  data: () => ({
    show: true,
    data: {
      id: '',
      uyruk: '',
    },
    old_data: {},
    icons: {
      mdiWindowClose,
    },
  }),
  mounted() {
    const veri = { ...this.editdata }
    this.data.id = veri.id
    this.data.uyruk = veri.uyruk
    this.old_data = veri
  },

  methods: {
    async UyrukOlustur() {
      await this.$store.dispatch('Action', { name: 'Uyruklar/UyruklarGuncelle', data: this.data }).then(async () => {
        this.$store.commit('PopupEkleme', false)
        this.data = {
          uyruk: '',
        }
        await this.$store.dispatch('Action', { name: 'Uyruklar/UyruklarListesi' })
        await this.$emit('close')
      }).catch(() => {
        setTimeout(() => {
          this.$store.dispatch('Action', { name: 'Uyruklar/UyruklarListesi' })
          this.$emit('close')
        }, 700)
      })
    },
  },

}
</script>

<style scoped>

</style>
