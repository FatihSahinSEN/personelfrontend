<template>
  <v-app>
    <component :is="resolveLayout">
      <router-view></router-view>
    </component>
    <alert />
    <loading />
  </v-app>
</template>

<script>
import LayoutBlank from '@/layouts/Blank.vue'
import LayoutContent from '@/layouts/Content.vue'
import print from '@/layouts/print.vue'
import alert from '@/components/alert.vue'
import loading from '@/components/loading.vue'

export default {
  components: {
    LayoutBlank,
    LayoutContent,
    print,
    alert,
    loading,
  },
  computed: {
    resolveLayout() {
      if (this.$route.name === null) return null
      if (this.$route.meta.layout === 'blank') return 'layout-blank'
      if (this.$route.meta.layout === 'print') return 'print'

      return 'layout-content'
    },
  },
}
</script>
<style>
  .v-data-table th {
    font-size: 2rem;
  }
</style>
