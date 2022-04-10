<template>
  <Modal
    :show="Ekle"
    :title="$t('SigortaSirketleri.sigorta_sirketi_olustur')"
    :save-text="$t('SigortaSirketleri.sigorta_sirketi_kaydet')"
    @close="Ekle = false"
    @saveMethod="Olustur"
  >
    <template v-slot:form>
      <v-text-field
        v-model="data.isim"
        class="mt-4"
        :label="$t('SigortaSirketleri.isim')"
        required
        autofocus
        @keyup.enter="sigorta_sirketiOlustur"
      ></v-text-field>
    </template>
  </Modal>
</template>

<script>
import { mdiWindowClose } from '@mdi/js'
import Modal from '@/components/Modal'

export default {
  name: 'SigortaSirketiOlustur',
  components: { Modal },
  data: () => ({
    data: {
      isim: '',
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
      this.$store.dispatch('Action', { name: 'SigortaSirketleri/SigortaSirketleriOlustur', data: this.data }).then(() => {
        this.Ekle = false
        this.data = {
          isim: '',
        }
      })
    },
  },

}
</script>

<style scoped>

</style>
