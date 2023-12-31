import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import store from './store'
import '@/assets/main.scss'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faUserSecret,faCartShopping,faSearch,faSearchPlus,faRightToBracket,faBars,faXmark, faUser, faEnvelope, faPhone, faLocationDot,faLock, faPerson, faPersonDress, faCalendarDay} from '@fortawesome/free-solid-svg-icons'

import axios from 'axios'
axios.defaults.baseURL='https://localhost:8000'

import VueTelInput from 'vue3-tel-input'
import 'vue3-tel-input/dist/vue3-tel-input.css'

/* add icons to the library */
library.add(faUserSecret,faCartShopping,faSearch,faSearchPlus,faRightToBracket,faBars,faXmark,faUser,faEnvelope,faPhone,faLocationDot,faLock,faPerson,faPersonDress,faCalendarDay)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .use(store)
    .use(router,axios)
    .use(VueTelInput)
    .mount('#app')
