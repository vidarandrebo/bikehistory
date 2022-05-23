import {createApp} from 'vue'
import App from './App.vue'
import router from './router'
import {library} from "@fortawesome/fontawesome-svg-core";
import {faBicycle, faCog, faSignIn, faSignOut, faTools, faUserPlus} from "@fortawesome/free-solid-svg-icons";

library.add(faCog, faUserPlus, faBicycle, faTools, faSignOut, faSignIn);


createApp(App)
    .use(router)
    .mount('#app')
