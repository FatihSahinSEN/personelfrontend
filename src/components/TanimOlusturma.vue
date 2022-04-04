<template>
  <div v-if="PageControl">
    <v-avatar
      size="35px"
      class="cursor-pointer ml-6"
      @click="Ekle = true"
    >
      <div id="profileImage">
        +
      </div>
    </v-avatar>
  </div>
</template>

<script>
export default {
  name: 'TanimOlusturma',
  computed: {
    PageControl() {
      // eslint-disable-next-line no-prototype-builtins,eqeqeq
      if (this.$route.meta.hasOwnProperty('UstMenuYeni') && this.$store.state.user.yetki == 2) {
        return this.$route.meta.UstMenuYeni
      }

      return false
    },

    Ekle: {
      get() {
        return this.$store.state.createDialog
      },
      set(bool) {
        this.$store.state.createDialog = bool
      },
    },
  },
}
</script>

<style scoped>

</style>
