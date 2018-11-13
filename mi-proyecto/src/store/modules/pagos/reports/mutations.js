const PAGOS_REPORTS_ALL = (state, pagosReports) => {
      console.log(pagosReports)
      state.pagosReports = pagosReports.data
      state.status = 'success'
    
  }

  export default {
    PAGOS_REPORTS_ALL
  }