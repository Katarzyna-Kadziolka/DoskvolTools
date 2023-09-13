import { createApp } from 'vue'
import { createPinia } from 'pinia'
import { createI18n } from 'vue-i18n'

import App from './App.vue'
import router from './router'
import './assets/scss/globalStyles.scss'
import "@fontsource/source-sans-pro"; // Defaults to weight 400
import "@fontsource/source-sans-pro/400.css"; // Specify weight
import "@fontsource/source-sans-pro/400-italic.css"; // Specify weight and style

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faCity, faPerson, faSpaghettiMonsterFlying, faToriiGate, faMask, faBuilding } from  '@fortawesome/free-solid-svg-icons'

library.add(faBuilding)
library.add(faCity)
library.add(faPerson)
library.add(faSpaghettiMonsterFlying)
library.add(faToriiGate)
library.add(faMask)

import pl from "./locales/pl.json"
import en from "./locales/en.json"

const i18n = createI18n({
  locale: navigator.language,
  fallbackLocale: "en",
  messages: { pl, en },
  legacy: false
})

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component('font-awesome-icon', FontAwesomeIcon)
app.use(i18n)
app.mount('#app')
