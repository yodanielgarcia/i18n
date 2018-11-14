const PAGOS_REPORTS_ALL = (state, pagosReports) => {
  if (pagosReports.data['code'] === 1) {
    state.pagosReports = pagosReports.data['data']
    state.status = 'success'
  } else {
    state.status = 'error'
  }
}

const PAGOS_REPORTS_ALLBTN = (state, pagosReports) => {
  if (pagosReports.data['code'] === 1) {
    state.pagosReports = pagosReports.data['data']
    state.status = 'success'
  } else {
    state.status = 'error'
  }
}
export default {
  PAGOS_REPORTS_ALL,
  PAGOS_REPORTS_ALLBTN
}