const PAGOS_REPORTS_ALL = (state, pagosReports) => {

  if (pagosReports.code === 1) {
    state.pagosReports = pagosReports.data
    state.status = 'success'
  } else {
    alert(pagosReports.message)
    state.status = 'error'
  }

}

export default {
  PAGOS_REPORTS_ALL
}