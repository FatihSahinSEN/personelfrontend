import Vue from 'vue'
import VueRouter from 'vue-router'
// eslint-disable-next-line import/no-cycle
import Store from '@/store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'login',
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: () => import('@/views/dashboard/Dashboard.vue'),
    meta: {
      role: '1',
    },
  },
  {
    path: '/ulkeler',
    name: 'ulkeler',
    component: () => import('@/views/ulkeler/ulkeler.vue'),
    meta: {
      role: '1',
      UstMenuYeni: true,
    },
  },
  {
    path: '/sehirler',
    name: 'sehirler',
    component: () => import('@/views/sehirler/sehirler.vue'),
    meta: {
      role: '1',
      UstMenuYeni: true,
    },
  },
  {
    path: '/sigorta-sirketleri',
    name: 'sigorta-sirketleri',
    component: () => import('@/views/sigorta-sirketleri/sigorta-sirketleri.vue'),
    meta: {
      role: '1',
      UstMenuYeni: true,
    },
  },
  {
    path: '/evrak-tipleri',
    name: 'evrak',
    component: () => import('@/views/evrak-tipleri/evrak-tipleri.vue'),
    meta: {
      role: '1',
      UstMenuYeni: true,
    },
  },
  {
    path: '/personel-listesi',
    name: 'personel-listesi',
    component: () => import('@/views/personel/personeller.vue'),
    meta: {
      role: '1',
      UstMenuYeni: true,
    },
  },
  {
    path: '/personel-olustur',
    name: 'personel-olustur',
    component: () => import('@/views/personel/personel-olustur.vue'),
    meta: {
      role: '2',
    },
  },
  {
    path: '/personel-duzenle/:id',
    name: 'personel-duzenle',
    component: () => import('@/views/personel/personel-duzenle.vue'),
    meta: {
      role: '2',
    },
  },
  {
    path: '/dosyalar/:id',
    name: 'dosyalar',
    component: () => import('@/views/dosyalar/dosyalar.vue'),
    meta: {
      role: '1',
    },
  },
  {
    path: '/meslekler',
    name: 'meslek',
    component: () => import('@/views/meslek-gruplari/meslek-gruplari.vue'),
    meta: {
      role: '1',
      UstMenuYeni: true,
    },
  },
  {
    path: '/uyruklar',
    name: 'uyruklar',
    component: () => import('@/views/uyruklar/uyruklar.vue'),
    meta: {
      role: '1',
      UstMenuYeni: true,
    },
  }, {
    path: '/kullanicilar',
    name: 'kullanicilar',
    component: () => import('@/views/kullanicilar/kullanici_listesi.vue'),
    meta: {
      role: '2',
      UstMenuYeni: 'kullanici',
    },
  }, {
    path: '/kullanici-olustur',
    name: 'kullanici-olustur',
    component: () => import('@/views/kullanicilar/kullanici_olustur.vue'),
    meta: {
      role: '2',
    },
  }, {
    path: '/kullanici-guncelle/:id',
    name: 'kullanici-guncelle',
    component: () => import('@/views/kullanicilar/kullanici_guncelle.vue'),
    meta: {
      role: '2',
    },
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import('@/views/typography/Typography.vue'),
    meta: {
      role: '1',
    },
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/Icons.vue'),
    meta: {
      role: '1',
    },
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('@/views/cards/Card.vue'),
    meta: {
      role: '1',
    },
  },
  {
    path: '/simple-table',
    name: 'simple-table',
    component: () => import('@/views/simple-table/SimpleTable.vue'),
    meta: {
      role: '1',
    },
  },
  {
    path: '/form-layouts',
    name: 'form-layouts',
    component: () => import('@/views/form-layouts/FormLayouts.vue'),
    meta: {
      role: '1',
    },
  },
  {
    path: '/pages/account-settings',
    name: 'pages-account-settings',
    component: () => import('@/views/pages/account-settings/AccountSettings.vue'),
    meta: {
      role: '1',
    },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      role: '0',
      layout: 'blank',
    },
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      role: '0',
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      role: '0',
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})
router.beforeEach((to, from, next) => {
  if (to.name !== 'login' && !Store.state.isAuthenticated) next({ name: 'login' })
  else next()
})
export default router
