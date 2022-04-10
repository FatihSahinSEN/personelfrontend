<template>
  <Modal
    :show="Ekle"
    :title="$t('EvrakTipleri.evrak_olustur')"
    :save-text="$t('EvrakTipleri.evrak_kaydet')"
    @close="Ekle = false"
    @saveMethod="Olustur"
  >
    <template v-slot:form>
        <v-autocomplete
            v-model="data.grup"
            :items="evrak_gurubu"
            item-value="name"
            item-text="name"
            dense
            :label="$t('EvrakTipleri.evrak_gurubu')"
            class="mt-4"
            autofocus
          ></v-autocomplete>

      <v-text-field
        v-model="data.isim"
        :label="$t('EvrakTipleri.isim')"
        required
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
      this.$store.dispatch('Action', { name: 'EvrakTipleri/EvrakTipleriOlustur', data: this.data }).then(() => {
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
