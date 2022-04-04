<template>
  <div>
    <vertical-nav-menu :is-drawer-open.sync="isDrawerOpen"></vertical-nav-menu>

    <v-app-bar
      app
      flat
      absolute
      color="transparent"
    >
      <div class="boxed-container w-full">
        <div class="d-flex align-center mx-6">
          <!-- Left Content -->
          <v-app-bar-nav-icon
            class="d-block d-lg-none me-2"
            @click="isDrawerOpen = !isDrawerOpen"
          ></v-app-bar-nav-icon>
          <v-text-field
            v-model="arama"
            rounded
            dense
            outlined
            :label="$t('layout.Ara')"
            :prepend-inner-icon="icons.mdiMagnify"
            class="app-bar-search flex-grow-0"
            hide-details
            clearable
          ></v-text-field>
          <tanim-olusturma />
          <v-spacer></v-spacer>

          <v-btn
            icon
            small
            class="ms-3"
            style="margin-right: 9px"
            @click="setLang"
          >
            {{ LangCode }}
          </v-btn>

          <theme-switcher></theme-switcher>

          <app-bar-user-menu></app-bar-user-menu>
        </div>
      </div>
    </v-app-bar>

    <v-main>
      <div class="app-content-container boxed-container pa-6">
        <slot></slot>
      </div>
    </v-main>

    <v-footer
      app
      inset
      color="transparent"
      absolute
      height="56"
      class="px-0"
    >
      <div class="boxed-container w-full">
        <div class="mx-6 d-flex justify-space-between">
          <span class="d-sm-inline d-none">
            <span>{{ $t('APP_COPYRIGHT') }}</span>
          </span>
        </div>
      </div>
    </v-footer>
  </div>
</template>

<script>
import { ref } from '@vue/composition-api'
import { mdiMagnify, mdiBellOutline, mdiGithub } from '@mdi/js'
import VerticalNavMenu from './components/vertical-nav-menu/VerticalNavMenu.vue'
import ThemeSwitcher from './components/ThemeSwitcher.vue'
import AppBarUserMenu from './components/AppBarUserMenu.vue'
import TanimOlusturma from '@/components/TanimOlusturma'

export default {
  components: {
    VerticalNavMenu,
    ThemeSwitcher,
    AppBarUserMenu,
    TanimOlusturma,
  },
  setup() {
    const isDrawerOpen = ref(null)

    return {
      isDrawerOpen,

      // Icons
      icons: {
        mdiMagnify,
        mdiBellOutline,
        mdiGithub,
      },
    }
  },
  computed: {
    getLang() {
      return this.$i18n.locale
    },
    LangCode() {
      if (this.getLang == 'tr') {
        return 'de'
      } if (this.getLang == 'de') {
        return 'tr'
      }
    },
    arama: {
      get() {
        return this.$store.state.arama
      },
      set(value) {
        this.$store.state.arama = value
      },
    },
    getSelecLang() {
      return this.$store.state.language
    },
  },
  mounted() {
    this.setLoadLanguage(this.getSelecLang)
  },
  methods: {
    setLang() {
      if (this.getLang === 'tr') {
        this.$store.commit('setLanguage', 'de')
        this.$i18n.locale = 'de'
      } else if (this.getLang === 'de') {
        this.$store.commit('setLanguage', 'tr')
        this.$i18n.locale = 'tr'
      }
    },
    setLoadLanguage(lang) {
      this.$i18n.locale = lang
    },
  },
}
</script>

<style lang="scss" scoped>
.v-app-bar ::v-deep {
  .v-toolbar__content {
    padding: 0;

    .app-bar-search {
      .v-input__slot {
        padding-left: 18px;
      }
    }
  }
}

.boxed-container {
  margin-left: auto;
  margin-right: auto;
}
</style>
