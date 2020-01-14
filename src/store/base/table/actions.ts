import { IObject } from './../../../interface/IObject';
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
  setTableQuery({ commit, state }, query: IObject<any>) {
    commit('SET_TABLE_QUERY', query)
  },
  tableSizeChange({ commit, dispatch }, limit: IObject<any>) {
    commit('SET_TABLE_LIMIT', limit)
    dispatch('fetchTable')
  },
  tablePageChange({ commit, dispatch }, page: IObject<any>) {
    commit('SET_TABLE_PAGE', page)
    dispatch('fetchTable', false)
  }
}

export default actions
