<template>
  <Modal
    :show="Ekle"
    :title="$t('ulkeler.ulke_olustur')"
    :save-text="$t('ulkeler.ulke_kaydet')"
    @close="Ekle = false"
    @saveMethod="Olustur"
  >
    <template v-slot:form>
      <v-text-field
        v-model="data.code"
        :label="$t('ulkeler.code')"
        required
        autofocus
      ></v-text-field>
      <v-text-field
        v-model="data.de"
        :label="$t('ulkeler.german')"
        @keypress.enter="Olustur"
        required
      ></v-text-field>
      <v-text-field
        v-model="data.en"
        :label="$t('ulkeler.english')"
        @keypress.enter="Olustur"
      ></v-text-field>
    </template>
  </Modal>
</template>

<script>
import { mdiWindowClose } from '@mdi/js'
import Modal from '@/components/Modal'

export default {
  name: 'UlkeOlustur',
  components: { Modal },
  data() {
    return {
      data: {
        code: '',
        de: '',
        en: '',
      },
      icons: {
        mdiWindowClose,
      },
    }
  },
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
    Olustur() {
      this.$store.dispatch('Action', { name: 'Ulkeler/UlkeOlustur', data: this.data }).then(() => {
        this.Ekle = false
        this.data = {
          code: '',
          de: '',
          en: '',
        }
      })
    },
  },

}
</script>
