<template>
  <v-fade-transition mode="out-in">
    <v-icon
      :key="$vuetify.theme.dark"
      @click="setDarkMode(!DarkMode)"
    >
      {{ DarkModeIcon }}
    </v-icon>
  </v-fade-transition>
</template>

<script>
import { mdiWeatherNight, mdiWeatherSunny } from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiWeatherNight,
        mdiWeatherSunny,
      },
    }
  },
  computed: {
    DarkModeIcon() {
      return this.$vuetify.theme.dark ? this.icons.mdiWeatherSunny : this.icons.mdiWeatherNight
    },
    DarkMode() {
      return this.$store.state.DarkMode
    },
  },
  mounted() {
    this.setDarkMode(this.DarkMode)
  },
  methods: {
    setDarkMode(Mode) {
      this.$vuetify.theme.dark = Mode
      this.$store.commit('setDarkMode', Mode)
    },
  },
}
</script>

<style>
</style>
