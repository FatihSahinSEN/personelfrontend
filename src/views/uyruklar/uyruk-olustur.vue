<template>
  <Modal
    :show="Ekle"
    :title="$t('Uyruklar.Uyruk_olustur')"
    :save-text="$t('Uyruklar.Uyruk_kaydet')"
    @close="Ekle = false"
    @saveMethod="Olustur"
  >
    <template v-slot:form>
      <v-text-field
        v-model="data.uyruk"
        :label="$t('Uyruklar.uyruk')"
        class="mt-4"
        required
        autofocus
        @keypress.enter="Olustur"
      ></v-text-field>
    </template>
  </Modal>
</template>

<script>
import { mdiWindowClose } from '@mdi/js'
import Modal from '@/components/Modal'
import router from '@/router'

export default {
  name: 'UyrukOlustur',
  components: { Modal },
  data: () => ({
    valid: true,
    data: {
      uyruk: '',
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
      this.$store.dispatch('Action', { name: 'Uyruklar/UyruklarOlustur', data: this.data }).then(() => {
        this.Ekle = false
        this.data = {
          uyruk: '',
        }
        router.push({ name: 'uyruklar' })
      })
    },
  },

}
</script>

    <style scoped>
    </style>
  </modal>
</template>
