<template>
  <v-form>
    <v-row>
      <v-col
        cols="12"
        md="3"
      >
        <label for="isim">{{ $t('kullanicilar.isim') }}</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="isim"
          v-model="user.isim"
          outlined
          dense
          :placeholder="$t('kullanicilar.isim')"
          hide-details
          autofocus
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <label for="soyisim">{{ $t('kullanicilar.soyisim') }}</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="soyisim"
          v-model="user.soyisim"
          outlined
          dense
          :placeholder="$t('kullanicilar.soyisim')"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <label for="kullanici_adi">{{ $t('kullanicilar.kullanici_adi') }}</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="kullanici_adi"
          v-model="user.kullanici_adi"
          type="text"
          outlined
          dense
          :placeholder="$t('kullanicilar.kullanici_adi')"
          hide-details
          disabled
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <label for="sifre">{{ $t('kullanicilar.sifre') }}</label>
      </v-col>

      <v-col
        cols="12"
        md="9"
      >
        <v-text-field
          id="sifre"
          v-model="user.sifre"
          type="password"
          outlined
          dense
          :placeholder="$t('kullanicilar.sifre')"
          hide-details
        ></v-text-field>
      </v-col>

      <v-col
        cols="12"
        md="3"
      >
        <label for="yetki">{{ $t('kullanicilar.yetki') }}</label>
      </v-col>
      <v-col
        cols="12"
        md="9"
      >
        <v-select
          id="yetki"
          v-model="user.yetki"
          :items="yetkiler"
          item-text="title"
          item-value="id"
          filled
          :label="$t('kullanicilar.yetki')"
        ></v-select>
      </v-col>
      <v-col
        cols="12"
        md="3"
      >
        <label for="durum">{{ $t('kullanicilar.durum') }}</label>
      </v-col>
      <v-col
        cols="12"
        md="9"
      >
        <v-switch
          v-model="user.status"
          color="success"
          :label="user.status === '1' ? $t('kullanicilar.aktif') : $t('kullanicilar.pasif')"
        ></v-switch>
      </v-col>

      <v-col
        offset-md="3"
        cols="12"
      >
        <v-btn
          color="primary"
          @click="SaveUser"
        >
          {{ $t('kullanicilar.kaydet') }}
        </v-btn>
        <v-btn
          class="mx-2"
          outlined
          @click="Cancel"
        >
          {{ $t('kullanicilar.iptal') }}
        </v-btn>
      </v-col>
    </v-row>
  </v-form>
</template>

<script>
export default {
  name: 'KullaniciOlustur',
  data() {
    return {
      yetkiler: [
        { id: 1, title: this.$t('kullanicilar.kullanici') },
        { id: 2, title: this.$t('kullanicilar.yonetici') },
      ],
      user: {
        isim: '',
        soyisim: '',
        kullanici_adi: '',
        sifre: '',
        fotograf: '',
        yetki: '',
        status: 0,
      },
    }
  },
  computed: {
    userParams() {
      return this.$route.params.user
    },
  },
  mounted() {
    // eslint-disable-next-line no-prototype-builtins
    if (this.$route.params.hasOwnProperty('user')) {
      this.user.id = this.userParams.id
      this.user.isim = this.userParams.isim
      this.user.soyisim = this.userParams.soyisim
      this.user.kullanici_adi = this.userParams.kullanici_adi
      this.user.sifre = ''
      this.user.status = this.userParams.status
      this.user.fotograf = this.userParams.fotograf
      this.user.yetki = this.yetkiSec(this.userParams.yetki)
    } else {
      this.$router.push({ name: 'kullanicilar' })
    }
  },
  methods: {
    Cancel() {
      this.$router.push({ name: 'kullanicilar' })
    },
    SaveUser() {
      const user = {}
      user.id = this.user.id
      user.isim = this.user.isim
      user.soyisim = this.user.soyisim
      user.kullanici_adi = this.user.kullanici_adi
      user.fotograf = this.user.fotograf
      user.status = this.user.status
      if (this.user.sifre.length > 5) {
        user.sifre = this.user.sifre
      }
      if (this.user.yetki.id === 2) {
        user.yetki = 2
      } else {
        user.yetki = 1
      }

      this.$store.dispatch('Action', { name: 'User/KullaniciGuncelle', data: user })
    },
    yetkiSec(id) {
      // eslint-disable-next-line eqeqeq
      return this.yetkiler.find(item => item.id == id)
    },
  },
}
</script>

<style scoped>

</style>
