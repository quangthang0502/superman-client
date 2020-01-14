import { IObject } from './../../../interface/IObject';
import request from '@/plugins/request'
import { assign } from 'lodash';
import mutations from './mutations';
import actions from './actions';

export interface IStoreTable {
  table: IStoreTableOptions
}

export interface IStoreTableOptions {
  isOpen?: Boolean
  data: any[]
  total: number
  isLoading: Boolean
  query: IObject<number>
  filter: IObject<any>
  isOpenFilter: Boolean
  sort: IObject<any>
  isOpenSort: Boolean
}

export const queryDefault = {
  i: 0,
  ps: 20
}

export const filterDefault = {}

export const sortDefault = {}

export default function tableModule(module: any, getList: any, totalApi?: string, defaultState?: IObject<any>) {
  const state : IStoreTable = {
    table: {
      isOpen: false,
      data: [],
      total: 0,
      isLoading: true,
      query: queryDefault,
      filter: filterDefault,
      isOpenFilter: false,
      sort: sortDefault,
      isOpenSort: false
    }
  }
  if (defaultState) {
    state.table = assign(state.table, defaultState)
  }
  module.state.table = assign({}, state.table)

  module.mutations = assign(module.mutations, mutations)

  module.actions = assign(module.actions, actions)

  module.actions.fetchTable = ({ commit, state, rootState }: IObject<any>, isAppend: boolean) => {
    commit('SET_TABLE_LOADING', true)
    return new Promise((resolve, reject) => {
      const query__ = {}
      assign(query__, state.table.query)
      assign(query__, state.table.filter)
      assign(query__, state.table.sort)
      // assign(query__, state.table.paging)
      getList({ commit, state, rootState }, query__).then((res: any) => {
        if (isAppend) {
          commit('APPEND_TABLE', res.data.data)
        } else {
          commit('SET_TABLE', res.data.data)
        }
        commit('SET_TABLE_LOADING', false)
        resolve(res.data)
      }).catch((error: any) => {
        commit('SET_TABLE_LOADING', false)
        reject(error)
      })
    })
  }
  module.actions.tableCount = ({ commit, state }: IObject<any>, filter: IObject<any>) => {
    commit('SET_TABLE_LOADING', true)
    return new Promise((resolve, reject) => {
      const query__ = {}
      Object.assign(query__, state.table.query)
      Object.assign(query__, filter)
      if (totalApi !== null) {
        request.get(totalApi, query__).then(res => {
          commit('SET_TABLE_TOTAL', res.data.data)
          commit('SET_TABLE_LOADING', false)
          resolve(res.data)
        }).catch((error: any) => {
          commit('SET_TABLE_LOADING', false)
          reject(error)
        })
      } else {
        commit('SET_TABLE_TOTAL', -1)
      }
    })
  }

  return module
}