import { createApp } from 'vue'
import App from './App.vue'
import './styles/md.css'
import './styles/tailwind.css'
import router from './router'
import SvgIcon from './components/svgIcon/index.vue'

const app = createApp(App)
app.component('SvgIcon', SvgIcon);
app.use(router)
app.mount('#app')
