import { IObject } from './../../../interface/IObject';
import { IStoreTable } from './index';
import { MutationTree } from 'vuex'
import { assign } from 'lodash'

const mutations: MutationTree<IStoreTable> = {
  SET_TABLE(state, data: any[]) {
    state.table.data = data
  },
  APPEND_TABLE(state, data: any[]) {
    state.table.data.push(...data)
  },
  UNSHIFT_TABLE(state, data: any[]) {
    state.table.data.unshift(...data)
  },
  SET_TABLE_TOTAL(state, total: number) {
    state.table.total = total
  },
  SET_TABLE_LIMIT(state, limit: number) {
    state.table.query.limit = limit
  },
  SET_TABLE_PAGE(state, page: number) {
    state.table.query.page = page
  },
  SET_TABLE_FROM_INDEX(state, i: number) {
    state.table.query.i = i
  },
  SET_TABLE_PAGE_SIZE(state, ps: number) {
    state.table.query.ps = ps
  },
  SET_TABLE_LOADING(state, isLoading: Boolean) {
    state.table.isLoading = isLoading
  },
  SET_TABLE_OPEN(state, isOpen: Boolean) {
    state.table.isOpen = isOpen
  },
  SET_FILTER(state, filter: IObject<any>) {
    state.table.filter = assign({}, filter)
  },
  SET_SORT(state, sort: IObject<any>) {
    state.table.sort = assign({}, sort)
  },
  SET_TABLE_QUERY(state, query: IObject<any>) {
    state.table.query = assign({}, query)
  }
}

export default mutations
