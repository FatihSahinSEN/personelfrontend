<template>
  <Modal
    :show="Ekle"
    :title="$t('EvrakTipleri.evrak_olustur')"
    :save-text="$t('EvrakTipleri.evrak_kaydet')"
    @close="Ekle = false"
    @saveMethod="Olustur"
  >
    <template v-slot:form>
      <v-text-field
        v-model="data.isim"
        :label="$t('EvrakTipleri.isim')"
        class="mt-4"
        required
        autofocus
      ></v-text-field>
      <v-text-field
        v-model="data.aciklama"
        :label="$t('EvrakTipleri.aciklama')"
        required
        @keyup.enter="evrakOlustur"
      ></v-text-field>
    </template>
  </Modal>
</template>

<script>
import { mdiWindowClose } from '@mdi/js'
import Modal from '@/components/Modal'

export default {
  name: 'EvrakOlustur',
  components: { Modal },
  data: () => ({
    data: {
      isim: '',
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
      this.$store.dispatch('Action', { name: 'EvrakTipleri/EvrakOlustur', data: this.data }).then(() => {
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
