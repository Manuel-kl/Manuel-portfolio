module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ]
}
mport { FontAwesomeIcon }
from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

library.add(faWhatsapp, faTwitter,
    faLinkedin, faInstagram, faGithub,
    faEnvelope, faArrowUpRightFromSquare, faLink)

createApp(App)
    .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')