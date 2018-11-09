import Vue from 'vue'
import Vuex from 'vuex' 
// Module pagos
import pagos from './modules/pagos/reports'
Vue.use(Vuex)
export default new Vuex.Store({
    modules: {
        pagos
    }})