<template>
  <v-menu
    offset-y
    left
    nudge-bottom="14"
    min-width="230"
    content-class="user-profile-menu-content"
  >
    <template v-slot:activator="{ on, attrs }">
      <div class="ms-4">
        <v-avatar
          v-if="user.fotograf"
          size="40px"
          v-bind="attrs"
          class="ms-4"
          v-on="on"
        >
          <v-img :src="user.fotograf"></v-img>
        </v-avatar>
        <v-avatar
          v-else
          size="40px"
          v-bind="attrs"
          v-on="on"
        >
          <div id="profileImage">
            {{ fotograf }}
          </div>
        </v-avatar>
      </div>
    </template>
    <v-list>
      <div class="pb-3 pt-2">
        <v-badge
          bottom
          color="success"
          overlap
          offset-x="12"
          offset-y="12"
          class="ms-4"
          dot
        >
          <v-avatar
            v-if="user.fotograf"
            size="40px"
          >
            <v-img :src="user.fotograf"></v-img>
          </v-avatar>
          <v-avatar
            v-else
            size="40px"
          >
            <div id="profileImage">
              {{ fotograf }}
            </div>
          </v-avatar>
        </v-badge>
        <div
          class="d-inline-flex flex-column justify-center ms-3"
          style="vertical-align:middle"
        >
          <span class="text--primary font-weight-semibold mb-n1">
            {{ user.isim }} {{ user.soyisim }}
          </span>
          <small
            v-if="user.yetki==1"
            class="text--disabled text-capitalize"
          >{{ $t('layout.kullanici') }}</small>
          <small
            v-if="user.yetki==2"
            class="text--disabled text-capitalize"
          >{{ $t('layout.yonetici') }}</small>
        </div>
      </div>
      <v-divider class="my-2"></v-divider>
      <!-- Settings -->
      <v-list-item link>
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            {{ icons.mdiCogOutline }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content @click="accountEdit">
          <v-list-item-title>{{ $t('layout.ayarlar') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider class="my-2"></v-divider>

      <!-- Logout -->
      <v-list-item
        link
        @click="logout"
      >
        <v-list-item-icon class="me-2">
          <v-icon size="22">
            {{ icons.mdiLogoutVariant }}
          </v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title>{{ $t('layout.cikis_yap') }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-menu>
</template>

<script>
import {
  mdiAccountOutline,
  mdiEmailOutline,
  mdiCheckboxMarkedOutline,
  mdiChatOutline,
  mdiCogOutline,
  mdiCurrencyUsd,
  mdiHelpCircleOutline,
  mdiLogoutVariant,
} from '@mdi/js'

export default {
  setup() {
    return {
      icons: {
        mdiAccountOutline,
        mdiEmailOutline,
        mdiCheckboxMarkedOutline,
        mdiChatOutline,
        mdiCogOutline,
        mdiCurrencyUsd,
        mdiHelpCircleOutline,
        mdiLogoutVariant,
      },

    }
  },
  computed: {
    user() {
      return this.$store.state.user
    },
    fotograf() {
      return this.user.isim.charAt(0) + this.user.soyisim.charAt(0)
    },
  },
  methods: {
    logout() {
      this.$store.dispatch('Auth/Logout')
    },
    accountEdit() {
      const user = this.$store.state.user
      this.$router.push({ name: 'kullanici-guncelle', params: { id: user.id, user, cancel: false } })
    },
  },
}
</script>

<style lang="scss">
.user-profile-menu-content {
  .v-list-item {
    min-height: 2.5rem !important;
  }
}
#profileImage {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #512DA8;
  font-size: 18px;
  color: #fff;
  text-align: center;
  line-height: 40px;
  margin: 0px 0;
}
</style>
