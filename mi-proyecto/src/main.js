import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueI18n from 'vue-i18n'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(VueI18n)
Vue.use(BootstrapVue);
Vue.use(VueAxios, axios)
Vue.prototype.$axios = axios
 // Ready translated locale messages
var messages ={};
// Create VueI18n instance with options
var i18n = {};

// Create a Vue instance with `i18n` option
const app = new Vue({
  data () {
    return {
    datajson:[],
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
  created: function() {
   },  
   beforeMount() {
    this.dataTraducirEN()
    this.dataTraducirES()

    //this.initializeLoader();
    //this.blockProccessWhileUnresolvePromise(promise, 3000);
    this.loadDataI18n();
    //this.finalizeLoader();
   },
  methods:{
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
    dataTraducirEN(){
      let slef = this
      return new Promise (function(resolve,reject){      
      axios.post('http://localhost:8000/api/ServiceTraduction/JsonTraducciones',{'idioma':'2'})
      .then(response => { slef.datajson = JSON.stringify(response.data)
          //alert(slef.datajson )
          if(slef.datajson =! ''){            
            localStorage.setItem("traducEN", JSON.stringify(response.data))
            console.log('entro ok')
            resolve(slef.datajson)
          }else{
            reject(new error ('no service'))
            console.log('entro error')
          }
         //location.reload()
        console.log("respuesta promise"+response.data) })
        .catch(function (error) {
        console.log(error);
        });      
      })
    },
    dataTraducirES(){
      axios.post('http://localhost:8000/api/ServiceTraduction/JsonTraducciones',{'idioma':'1'})
      .then(response => { this.datajson = JSON.stringify(response.data)
        localStorage.setItem("traducES", this.datajson);
      console.log(response.data) })
      .catch(function (error) {
      console.log(error);
      });      
      }
  }
})
new Vue(Vue.util.extend({ i18n,VueAxios,axios,app }, App)).$mount('#app');
i18n.locale = 'en'
export default messages