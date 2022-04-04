<template>
  <v-dialog
    v-model="alert"
    persistent
    max-width="390"
  >
    <v-card>
      <v-card-title class="text-h5">
        <div>
          <img
            v-if="success"
            :src="require('@/assets/images/misc/success.png')"
            height="30px"
            width="30px"
            class="me-3"
            contain
            icon
            align="left"
          />
          <img
            v-if="error"
            :src="require('@/assets/images/misc/error.png')"
            height="30px"
            width="30px"
            class="me-3"
            contain
            icon
            align="left"
          />
        </div> {{ title }}
      </v-card-title>
      <div style="display: flex; width: 100%;justify-content: center;align-items: center;">
        <div
          style="width: calc(90%);"
          v-html="message"
        ></div>
      </div>
      <v-card-actions>
        <v-spacer></v-spacer>

        <v-btn
          color="primary darken-1"
          text
          @click="hide"
        >
          {{ $t('TAMAM') }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Alert',
  computed: {
    alert() {
      return this.$store.state.alert
    },
    title() {
      return this.$store.state.alertTitle
    },
    message() {
      return this.$store.state.alertMsg
    },
    success() {
      return this.$store.state.alertSuccess
    },
    error() {
      return this.$store.state.alertError
    },
  },
  methods: {
    hide() {
      this.$store.dispatch('HideAlert')
    },
  },
}
</script>

<style scoped>

</style>
