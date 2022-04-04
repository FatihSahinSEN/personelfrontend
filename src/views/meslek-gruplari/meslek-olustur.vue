<template>
  <Modal
    :show="Ekle"
    :title="$t('MeslekGruplari.Meslek_olustur')"
    :save-text="$t('MeslekGruplari.Meslek_kaydet')"
    @close="Ekle = false"
    @saveMethod="Olustur"
  >
    <template v-slot:form>
      <v-text-field
        v-model="data.meslek"
        :label="$t('MeslekGruplari.meslek')"
        class="mt-4"
        required
        autofocus
      ></v-text-field>
      <v-text-field
        v-model="data.aciklama"
        :label="$t('MeslekGruplari.aciklama')"
        required
        @keyup.enter="Olustur"
      ></v-text-field>
    </template>
  </Modal>
</template>

<script>
import { mdiWindowClose } from '@mdi/js'
import Modal from '@/components/Modal'

export default {
  name: 'MeslekOlustur',
  components: { Modal },
  data: () => ({
    valid: true,
    data: {
      meslek: '',
      aciklama: '',
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
    Olustur() {
      this.$store.dispatch('Action', { name: 'MeslekGruplari/MeslekGruplariOlustur', data: this.data }).then(() => {
        this.Ekle = false
        this.data = {
          isim: '',
          aciklama: '',
        }
      })
    },
  },

}
</script>

<style scoped>

</style>
