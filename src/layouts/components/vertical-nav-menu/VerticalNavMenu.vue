<template>
  <v-navigation-drawer
    :value="isDrawerOpen"
    app
    floating
    width="260"
    class="app-navigation-menu"
    :right="$vuetify.rtl"
    @input="val => $emit('update:is-drawer-open', val)"
  >
    <!-- Navigation Header -->
    <div class="vertical-nav-header d-flex items-center ps-6 pe-5 pt-5 pb-2">
      <router-link
        to="/"
        class="d-flex align-center text-decoration-none"
      >
        <v-img
          :src="require('@/assets/images/logos/logo.png')"
          max-height="30px"
          max-width="30px"
          alt="logo"
          contain
          eager
          class="app-logo me-3"
        ></v-img>
        <v-slide-x-transition>
          <h2 class="app-title text--primary">
            {{ $t('APP_NAME') }}
          </h2>
        </v-slide-x-transition>
      </router-link>
    </div>

    <!-- Navigation Items -->
    <v-list
      expand
      shaped
      class="vertical-nav-menu-items pr-5"
    >
      <!--      Dashboard Menüsü -->
      <nav-menu-link
        :title="$t('menu.panel')"
        :to="{ name: 'dashboard' }"
        :icon="icons.mdiDesktopMacDashboard"
      ></nav-menu-link>
      <!-- Dashboard SOn -->
      <!--      Personel Menüsü -->

      <nav-menu-link
        :title="$t('menu.personel')"
        :to="{ name: 'personel-listesi' }"
        :icon="icons.mdiAccountHardHat"
      ></nav-menu-link>

      <nav-menu-link
        :title="$t('menu.sozlesmeler')"
        :to="{ name: 'sozlesmeler' }"
        :icon="icons.mdiFileSign"
      ></nav-menu-link>

      <!--      Dosyalar Menüsü Gizli -->

      <nav-menu-link
        v-if="$route.name === 'dosyalar'"
        :title="$t('menu.dosyalar')"
        :to="{ name: 'dosyalar' }"
        :icon="icons.mdiAccountSupervisor"
      ></nav-menu-link>

      <nav-menu-link
        :title="$t('menu.dosyalar')"
        :to="{ name: 'dosyalar-listesi' }"
        :icon="icons.mdiFileMultiple"
      ></nav-menu-link>
      <!--      Kullanıcılar Menüsü-->

      <nav-menu-link
        :title="$t('menu.kullanicilar_main')"
        :to="{ name: 'kullanicilar' }"
        :icon="icons.mdiAccountSupervisor"
      ></nav-menu-link>

      <!-- Kullanıcılar Son -->
      <!--      Tanımlar Menüsü-->
      <nav-menu-group
        :title="$t('menu.tanimlar_main')"
        :icon="icons.mdiDotsHorizontalCircle"
      >
        <nav-menu-link
          :title="$t('menu.tanimlar.ulkeler')"
          :to="{ name: 'ulkeler' }"
          :icon="icons.mdiMapCheck"
        ></nav-menu-link>
        <nav-menu-link
          :title="$t('menu.tanimlar.sehirler')"
          :to="{ name: 'sehirler' }"
          :icon="icons.mdiMapMarkerRadius"
        ></nav-menu-link>
        <nav-menu-link
          :title="$t('menu.tanimlar.sigorta_sirketleri')"
          :to="{ name: 'sigorta-sirketleri' }"
          :icon="icons.mdiHandshake"
        ></nav-menu-link>
        <nav-menu-link
          :title="$t('menu.tanimlar.evrak_tipleri')"
          :to="{ name: 'evrak' }"
          :icon="icons.mdiFileFind"
        ></nav-menu-link>
        <nav-menu-link
          :title="$t('menu.tanimlar.meslek')"
          :to="{ name: 'meslek' }"
          :icon="icons.mdiCardAccountDetails"
        ></nav-menu-link>
        <nav-menu-link
          :title="$t('menu.tanimlar.uyruklar')"
          :to="{ name: 'uyruklar' }"
          :icon="icons.mdiAccountDetails"
        ></nav-menu-link>
      </nav-menu-group>
      <!--      Tanımlar Son -->
      <!--      <nav-menu-section-title title="USER INTERFACE"></nav-menu-section-title>-->
      <!--      <nav-menu-link-->
      <!--        title="Typography"-->
      <!--        :to="{ name: 'typography' }"-->
      <!--        :icon="icons.mdiAlphaTBoxOutline"-->
      <!--      ></nav-menu-link>-->
      <!--      <nav-menu-link-->
      <!--        title="Icons"-->
      <!--        :to="{ name: 'icons' }"-->
      <!--        :icon="icons.mdiEyeOutline"-->
      <!--      ></nav-menu-link>-->
      <!--      <nav-menu-link-->
      <!--        title="Cards"-->
      <!--        :to="{ name: 'cards' }"-->
      <!--        :icon="icons.mdiCreditCardOutline"-->
      <!--      ></nav-menu-link>-->
      <!--      <nav-menu-link-->
      <!--        title="Tables"-->
      <!--        :to="{ name: 'simple-table' }"-->
      <!--        :icon="icons.mdiTable"-->
      <!--      ></nav-menu-link>-->
      <!--      <nav-menu-link-->
      <!--        title="Form Layouts"-->
      <!--        :to="{ name: 'form-layouts' }"-->
      <!--        :icon="icons.mdiFormSelect"-->
      <!--      ></nav-menu-link>-->
      <!--      <nav-menu-link-->
      <!--        title="Account Settings"-->
      <!--        :to="{ name: 'pages-account-settings'}"-->
      <!--        :icon="icons.mdiAccountCogOutline"-->
      <!--      ></nav-menu-link>-->
      <!--      <nav-menu-group-->
      <!--        title="Pages"-->
      <!--        :icon="icons.mdiFileOutline"-->
      <!--      >-->
      <!--        <nav-menu-link-->
      <!--          title="Login"-->
      <!--          :to="{ name: 'pages-login' }"-->
      <!--          target="_blank"-->
      <!--        ></nav-menu-link>-->
      <!--        <nav-menu-link-->
      <!--          title="Register"-->
      <!--          :to="{ name: 'pages-register' }"-->
      <!--          target="_blank"-->
      <!--        ></nav-menu-link>-->
      <!--        <nav-menu-link-->
      <!--          title="Error"-->
      <!--          :to="{ name: 'error-404' }"-->
      <!--          target="_blank"-->
      <!--        ></nav-menu-link>-->
      <!--      </nav-menu-group>-->
    </v-list>
    <a
      :href="$t('SITE_URL')"
      rel="nofollow"
    >
      <v-img
        :src="require(`@/assets/images/misc/robot.svg`)"
        alt="upgrade-banner"
        transition="scale-transition"
        class="upgrade-banner mx-auto"
        max-width="230"
      ></v-img>
    </a>
  </v-navigation-drawer>
</template>

<script>
// eslint-disable-next-line object-curly-newline
import {
  mdiDesktopMacDashboard,
  mdiAccountSupervisor,
  mdiDotsHorizontalCircle,
  mdiFileMultiple,
  mdiFileSign,
  mdiAccountHardHat,
  mdiMapCheck,
  mdiAccountDetails,
  mdiCardAccountDetails,
  mdiFileFind,
  mdiHandshake,
  mdiMapMarkerRadius,
} from '@mdi/js'
import NavMenuSectionTitle from './components/NavMenuSectionTitle.vue'
import NavMenuGroup from './components/NavMenuGroup.vue'
import NavMenuLink from './components/NavMenuLink.vue'

export default {
  components: {
    NavMenuSectionTitle,
    NavMenuGroup,
    NavMenuLink,
  },
  props: {
    isDrawerOpen: {
      type: Boolean,
      default: null,
    },
  },
  setup() {
    return {
      icons: {
        mdiDesktopMacDashboard,
        mdiAccountDetails,
        mdiCardAccountDetails,
        mdiFileFind,
        mdiHandshake,
        mdiMapMarkerRadius,
        mdiMapCheck,
        mdiFileMultiple,
        mdiFileSign,
        mdiDotsHorizontalCircle,
        mdiAccountSupervisor,
        mdiAccountHardHat,
      },
    }
  },
}
</script>

<style lang="scss" scoped>
.app-title {
  font-size: 1.25rem;
  font-weight: 700;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: 0.3px;
}

// ? Adjust this `translateX` value to keep logo in center when vertical nav menu is collapsed (Value depends on your logo)
.app-logo {
  transition: all 0.18s ease-in-out;
  .v-navigation-drawer--mini-variant & {
    transform: translateX(-4px);
  }
}

@include theme(app-navigation-menu) using ($material) {
  background-color: map-deep-get($material, 'background');
}

.app-navigation-menu {
  .v-list-item {
    &.vertical-nav-menu-link {
      ::v-deep .v-list-item__icon {
        .v-icon {
          transition: none !important;
        }
      }
    }
  }
}

// You can remove below style
// Upgrade Banner
.app-navigation-menu {
  .upgrade-banner {
    position: absolute;
    bottom: 13px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
