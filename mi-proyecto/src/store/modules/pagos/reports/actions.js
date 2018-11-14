//actions
import axios from 'axios';
const pagosReportsAux = (context, array) => true

const pagosReportsAll = (context) => {
  //url = endpoint Api lumen/laravel
  let url = 'http://localhost:8000/servicePagos'
  let data = ''
  return axios.get(url, data)
    .then(response => {
      context.commit('PAGOS_REPORTS_ALL', response)
    })
    .catch(function (error) {
      console.log(error);
    });
}

const pagosReportsAllBTN = (context) => {
  //url = endpoint Api lumen/laravel
  let url = 'http://localhost:8000/servicePagosBTN'
  let data = ''
  return axios.get(url, data)
    .then(response => {
      context.commit('PAGOS_REPORTS_ALLBTN', response)
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default {
  pagosReportsAll,
  pagosReportsAllBTN,
  pagosReportsAux
}