import Vue from 'vue'
import Router from 'vue-router'

import Navbar from '../components/nav'
//import list from '@/components/modules/pagos/list'
//export default i18n
Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'nav',
        component: Navbar
    },
]
})