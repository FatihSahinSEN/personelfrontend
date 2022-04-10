<template>
  <router-view />
</template>

<script>
export default {
  name: 'Print',
  computed: {
    Sozlesme() {
      return this.$store.state.Sozlesmeler.Sozlesme
    },
  },
  created() {
    this.$store.dispatch('Sozlesmeler/TekSozlesme', { id: this.$route.params.id })
  },
}
</script>
