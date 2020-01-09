import { IObject } from './../../../interface/IObject';
import request from '@/plugins/request'

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