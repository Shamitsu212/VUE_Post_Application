import { createApp } from 'vue'

import './style.css'

import App from './App.vue'
import router from './routes/index'

import components_UI from './components/UI'

const app = createApp(App)

Object.values(components_UI).forEach(component => {
    app.component(component.name, component)
})


app.use(router).mount('#app')
