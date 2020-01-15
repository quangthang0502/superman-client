import { VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { IObject } from '@/interface/IObject';
import { assign } from 'lodash'

export interface IStoreTableOptions<S> {
  isOpen?: Boolean
  data: Array<S>
  total: number
  isLoading: Boolean
  query: IObject<number>
  filter: IObject<any>
  isOpenFilter: Boolean
  sort: IObject<any>
  isOpenSort: Boolean
}

export interface TableInterface {
  fetchTable(): void
  tableCount(): void
}

export const queryDefault = {
  i: 0,
  ps: 20
}

export const filterDefault = {}

export const sortDefault = {}

export default abstract class TableModule<IState> extends VuexModule {
  public table: IStoreTableOptions<IState> = {
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

  @Mutation
  protected SET_TABLE(data: IState[]) {
    this.table.data = data
  }
  @Mutation
  protected APPEND_TABLE(data: IState[]) {
    this.table.data.push(...data)
  }
  @Mutation
  protected UNSHIFT_TABLE(data: IState[]) {
    this.table.data.unshift(...data)
  }
  @Mutation
  protected SET_TABLE_TOTAL(total: number) {
    this.table.total = total
  }
  @Mutation
  protected SET_TABLE_LIMIT(limit: number) {
    this.table.query.limit = limit
  }
  @Mutation
  protected SET_TABLE_PAGE(page: number) {
    this.table.query.page = page
  }
  @Mutation
  protected SET_TABLE_FROM_INDEX(i: number) {
    this.table.query.i = i
  }
  @Mutation
  protected SET_TABLE_PAGE_SIZE(ps: number) {
    this.table.query.ps = ps
  }
  @Mutation
  protected SET_TABLE_LOADING(isLoading: Boolean) {
    this.table.isLoading = isLoading
  }
  @Mutation
  protected SET_TABLE_OPEN(isOpen: Boolean) {
    this.table.isOpen = isOpen
  }
  @Mutation
  protected SET_FILTER(filter: IObject<any>) {
    this.table.filter = assign({}, filter)
  }
  @Mutation
  protected SET_SORT(sort: IObject<any>) {
    this.table.sort = assign({}, sort)
  }
  @Mutation
  protected SET_TABLE_QUERY(query: IObject<any>) {
    this.table.query = assign({}, query)
  }

  @Action({ commit: 'SET_FILTER' })
  public resetFilter() {
    return filterDefault
  }

  @Action({ commit: 'SET_SORT' })
  public resetSort() {
    return sortDefault
  }

  @Action({ commit: 'SET_TABLE_LOADING' })
  public setTableLoading( loading: Boolean) {
    return loading
  }

  @Action({ commit: 'SET_TABLE_OPEN' })
  public setTableOpen(loading: Boolean) {
    return loading
  }

  @Action({ commit: 'SET_TABLE'})
  public setTableData(data: IState[]) {
    return data
  }

  @Action({ commit: 'SET_TABLE_FROM_INDEX'})
  public setTableFromIndex( index: number) {
    return index
  }

  @Action({ commit: 'SET_TABLE_PAGE_SIZE'})
  public setTablePageSize(ps: number) {
    return ps
  }

  @Action({ commit: 'SET_TABLE_TOTAL'})
  public setTableTotal(total: number) {
    return total
  }

  @Action({ commit: 'SET_TABLE_FROM_INDEX'})
  public incrementFromIndex(i: number) {
    return this.table.query.i + i
  }

  @Action({ commit: 'SET_TABLE'})
  public resetTable() {
    return []
  }

  @Action({ commit: 'UNSHIFT_TABLE'})
  public unshiftTable(data: IState) {
    return data
  }

  @Action({ commit: 'SET_TABLE_QUERY'})
  public setTableQuery(query: IObject<any>) {
    return query
  }

  @Action({ commit: 'SET_TABLE_LIMIT'})
  public tableSizeChange(limit: IObject<any>) {
    return limit
  }

  @Action({ commit: 'SET_TABLE_PAGE'})
  public tablePageChange(page: IObject<any>) {
    return page
  }

  @Action
  public affterFetchTable(data: IState[], isAppend: boolean) {
    if(isAppend) {
      this.APPEND_TABLE(data)
    } else {
      this.SET_TABLE(data)
    }
    this.SET_TABLE_LOADING(false)
  }
}