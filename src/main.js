import { library } from '@fortawesome/fontawesome-svg-core'
import { faGithub, faInstagram, faLinkedin, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'
import { faArrowUpRightFromSquare, faLink, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

library.add(faWhatsapp, faTwitter,
    faLinkedin, faInstagram, faGithub,
    faEnvelope, faArrowUpRightFromSquare, faLink, faSpinner)

createApp(App)
    .use(store)
    .use(router)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')