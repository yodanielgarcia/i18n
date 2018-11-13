//actions
import axios from 'axios';
const pagosReportsAll = (context) => {
    //url = endpoint Api lumen/laravel
    let url = 'http://localhost:8000/servicePagos'
    let data = ''
    axios.get(url, data)
        .then(response => {
            context.commit('PAGOS_REPORTS_ALL', response)
        })
        .catch(function (error) {
          console.log(error);
        });
  }

  export default {
    pagosReportsAll
  }