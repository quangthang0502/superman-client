import { IUser } from './../../interface/IUser';
import { VuexModule, Module } from 'vuex-module-decorators';
import TableModule from '../base/table2';

@Module({
  name: 'User'
})
export default class User extends TableModule<IUser>, VuexModule {
  public user: IUser = {
    username: 'quang thang',
    password: 'thang123'
  }
  public arr: number[] = []
}
