const PAGOS_REPORTS_ALL = (state, pagosReports) => {
    
      state.pagosReports = pagosReports.data
      state.status = 'success'
    
  }

  export default {
    PAGOS_REPORTS_ALL
  }