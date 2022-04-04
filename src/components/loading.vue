<template>
  <v-dialog
    v-model="ShowLoading"
    persistent
    width="300"
  >
    <v-card
      color="primary"
      dark
    >
      <v-card-text>
        {{ $t('YUKLENIYOR') }}
        <v-progress-linear
          indeterminate
          color="white"
          class="mb-0"
        ></v-progress-linear>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Loading',
  computed: {
    ShowLoading() {
      return this.$store.state.loadingStatus
    },
  },
  watch: {
    loading() {
      return this.$store.state.loadingStatus
    },
  },
}
</script>

<style scoped>

</style>
