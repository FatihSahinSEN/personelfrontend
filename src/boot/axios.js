import axios from 'axios'
// eslint-disable-next-line import/no-cycle
import Store from '@/store'
import i18n from '@/locale'

function LanguageRemake(data) {
  let string = '<tr>'
  data.forEach(value => {
    // eslint-disable-next-line no-prototype-builtins,valid-typeof
    if (typeof value === 'object') {
      string += LanguageRemake(value)
    } else {
      // eslint-disable-next-line no-unused-vars
      const val = `ERROR.${value}`
      string += `<td>${i18n.t(val)}</td>`
    }
  })
  string += '</tr>'

  return string
}

// eslint-disable-next-line consistent-return,no-unused-vars
const TranslateAxiosData = data => {
  if (typeof data === 'string') {
    const val = `ERROR.${data}`

    return i18n.t(val)
  }
  if (typeof data === 'object') {
    let html = '<table style="width: 100%">'
    html += LanguageRemake(Object.entries(data))
    html += '</table>'

    return html
  }
}

let LoadingState = false
function Loading(bool) {
  if (LoadingState !== bool) {
    LoadingState = bool
    Store.dispatch('ShowLoading', bool, { root: true })
  }
}

function Alert(response) {
  let msg
  if (response?.data?.status === true) {
    msg = {
      title: i18n.t('BASARILI'),
      message: TranslateAxiosData(response.data.message),
      error: false,
      success: true,
    }
  } else {
    msg = {
      title: i18n.t('HATA'),
      message: TranslateAxiosData(response.data.message),
      error: true,
      success: false,
    }
  }
  Store.commit('ShowAlert', msg, { root: true })
}

const api = axios.create({
  baseURL: i18n.$t('BACKEND_URL'),
  headers: {
    Accept: 'json/application',
    'Content-Type': 'json/application',
  },
  timeout: 10000,
})

api.interceptors.request.use(
  config => {
    if (config.url !== 'refresh') Loading(true)
    const token = Store.state.access_token || false
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  },
  error => {
    if (error.url !== 'refresh') Loading(false)

    return Promise.reject(error)
  },
)
api.interceptors.response.use(
  response => {
    if (response.config.url !== 'refresh') Loading(false)
    const Method = response.config.method.toUpperCase()
    if (Method === 'GET') return response
    if (response.config.url === 'login') return response
    if (response.config.url === 'refresh') return response
    Alert(response)

    return response
  },
  async error => {
    if (error.response.status !== 401) Loading(false)
    if (error.response.status === 401) {
      await Store.dispatch('RefreshToken', error.config)
    }

    return Promise.reject(error)
  },
)

export default api
