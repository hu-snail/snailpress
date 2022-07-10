import { createApp } from 'vue'
import App from './App.vue'
import './styles/md.css'
import './styles/tailwind.css'
import router from './router'
import 'virtual:svg-icons-register'
import SvgIcon from './components/svgIcon/index.vue'
import 'plyr/dist/plyr.css'

const app = createApp(App)
app.component('SvgIcon', SvgIcon)
app.use(router)
app.mount('#app')
