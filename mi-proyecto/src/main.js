import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'
import Datetime from 'vue-datetime'
import VueSweetalert2 from 'vue-sweetalert2';

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vue-datetime/dist/vue-datetime.css'

Vue.use(VueI18n)
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios)
Vue.use(Datetime)
Vue.use(VueSweetalert2);
Vue.prototype.$axios = axios

// Ready translated locale messages
var messages = {};
// Create VueI18n instance with options
var i18n = {};

// Create a Vue instance with `i18n` option
const app = new Vue({
  data() {
    return {
      datajson: [],
    }
  },
  el: '#app',
  i18n, // this is equivalent to `i18n: i18n,` (without quotes, naturally)
  axios,
  VueAxios,
  data: {
    products: [
      'Boots',
    ]
  },
  created: function () {
  },
  beforeMount() {
    this.dataTraducirEN()
    this.dataTraducirES()
    this.loadDataI18n();
  },
  methods: {
    loadDataI18n() {
      var messages = {
        'es': this.getLanguageFomrLocalStorage("traducES"),
        'en': this.getLanguageFomrLocalStorage("traducEN")
      }
      i18n = new VueI18n({
        locale: 'en', // set locale
        messages, // set locale messages        
      })
    },
    getLanguageFomrLocalStorage(language) {
      return {
        data: JSON.parse(localStorage.getItem(language))
      }
    },
    dataTraducirEN() {
      let slef = this
      return new Promise(function (resolve, reject) {
        axios.post('http://localhost:8000/serviceTraduccion', { "idioma": 2 })
          .then(response => {
          slef.datajson = JSON.stringify(response.data)
            if (slef.datajson = ! '') {
              localStorage.setItem("traducEN", JSON.stringify(response.data))
              resolve(slef.datajson)
            } else {
              reject(new error('no service'))
            }
          })
          .catch(function (error) {
            console.log(error);
          });
      })
    },
    dataTraducirES() {
      axios.post('http://localhost:8000/serviceTraduccion', { 'idioma': '1' })
        .then(response => {
        this.datajson = JSON.stringify(response.data)
          localStorage.setItem("traducES", this.datajson)
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }
})
new Vue(Vue.util.extend({ i18n, VueAxios, axios, app }, App)).$mount('#app');
i18n.locale = 'en'
export default messages