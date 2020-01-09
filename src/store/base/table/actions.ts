import { IStoreTable, filterDefault, sortDefault } from './index';
import { ActionTree } from 'vuex'

const actions: ActionTree<IStoreTable, any> = {
  resetFilter({ commit, state, rootState }) {
    commit('SET_FILTER', filterDefault)
  },
  resetSort({ commit, state, rootState }) {
    commit('SET_SORT', sortDefault)
  },
  setTableLoading({ commit, state, rootState }, loading: Boolean) {
    commit('SET_TABLE_LOADING', loading)
  },
  setTableOpen({ commit, state, rootState }, loading: Boolean) {
    commit('SET_TABLE_OPEN', loading)
  },
  setTableData({ commit, state, rootState }, data) {
    commit('SET_TABLE', data)
  },
  setTableFromIndex({ commit, state, rootState }, data) {
    commit('SET_TABLE_FROM_INDEX', data)
  },
  setTablePageSize({ commit, state, rootState }, data) {
    commit('SET_TABLE_PAGE_SIZE', data)
  },
  setTableTotal({ commit, state, rootState }, total) {
    commit('SET_TABLE_TOTAL', total)
  },
  incrementFromIndex({ commit, state, rootState }, data) {
    commit('SET_TABLE_FROM_INDEX', state.table.query.i + data)
  },
  resetTable({ commit, state, rootState }) {
    commit('SET_TABLE', [])
  },
  unshiftTable({ commit, state, rootState }, data) {
    commit('UNSHIFT_TABLE', data)
  },
  fetchTable({ commit, state, rootState }, isAppend) {
    commit('SET_TABLE_LOADING', true)
    return new Promise((resolve, reject){
      const query__ = {}
      Object.assign(query__, state.table.query)
      Object.assign(query__, state.table.filter)
      Object.assign(query__, state.table.sort)
      Object.assign(query__, state.table.paging)
      getList({ commit, state, rootState }, query__).then(res{
        if(isAppend) {
          commit('APPEND_TABLE', res.data.data)
        } else {
          commit('SET_TABLE', res.data.data)
    }
        commit('SET_TABLE_LOADING', false)
        resolve(res.data)
      }).catch(error{
      commit('SET_TABLE_LOADING', false)
        reject(error)
    })
})
  },
tableCount({ commit, state }, filter){
  commit('SET_TABLE_LOADING', true)
  return new Promise((resolve, reject){
    const query__ = {}
    Object.assign(query__, state.table.query)
    Object.assign(query__, filter)
    if (totalApi !== null) {
      request.get(totalApi, query__).then(res{
        commit('SET_TABLE_TOTAL', res.data.data)
      commit('SET_TABLE_LOADING', false)
      resolve(res.data)
    }).catch(error{
      commit('SET_TABLE_LOADING', false)
          reject(error)
    })
} else {
  commit('SET_TABLE_TOTAL', -1)
}
    })
  },
setTableQuery({ commit, state }, query){
  commit('SET_TABLE_QUERY', query)
},
tableSizeChange({ commit, dispatch }, limit){
  commit('SET_TABLE_LIMIT', limit)
  dispatch('fetchTable')
},
tablePageChange({ commit, dispatch }, page){
  commit('SET_TABLE_PAGE', page)
  dispatch('fetchTable', false)
}
}

export default actions
