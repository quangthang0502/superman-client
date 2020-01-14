import { VuexModule, Module, Mutation } from 'vuex-module-decorators'
import { IObject } from '@/interface/IObject';

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

export default abstract class TableModule<IState> {
  public table: IStoreTableOptions = {
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