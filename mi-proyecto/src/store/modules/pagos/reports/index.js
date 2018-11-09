import ActionsModule from './actions'
import MutationsModule from './mutations'
import GettersModule from './getters'

// actions
const actions = ActionsModule

// mutations
const mutations = MutationsModule

// getters
const getters = GettersModule

// initial state
const defaultState = {
    pagosReports: []
}

export default {
  state: defaultState,
  getters,
  actions,
  mutations
}