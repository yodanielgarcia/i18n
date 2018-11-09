//actions

const pagosReportsAll = (context) => {
    //url = endpoint Api lumen/laravel
    let url = 'http://localhost:8000/serviceTraduccion'
    let data = {'idioma': '1'}
    return axios.post(url, data)
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