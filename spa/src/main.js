import { createApp } from 'vue'
import App from './App.vue'
import './assets/css/estilo.css'



import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

// Vuetify instance
const vuetify = createVuetify({
  components,
  directives,
})

createApp(App).use(vuetify).mount('#app')


