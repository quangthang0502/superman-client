import { IObject } from '@/interface/IObject';
import request from '@/plugins/request';
import { TableInterface } from './../base/index';
import { IUser } from './../../interface/IUser';
import { Module, Action } from 'vuex-module-decorators';
import TableModule from '../base';
import { assign } from 'lodash'

@Module({
  name: 'User'
})
export default class User extends TableModule<IUser> implements TableInterface {
  public user: IUser = {
    username: 'quang thang',
    password: 'thang123'
  }
  public arr: number[] = []

  get aaa() {
    return this.user.username + this.user.password
  }

  get getQuery() {
    return assign({}, this.table.query, this.table.sort, this.table.filter)
  }

  @Action
  async fetchTable() {
    try {
      console.log('dcm')
    } catch (error) {
      this.SET_TABLE_LOADING(false)
      return Promise.reject(error)
    }
  }

  @Action
  tableCount() {

  }
}
