import {RECEIVE_USERLIST} from './mutation-type'

export default {
  [RECEIVE_USERLIST] (state,{userList}){
    state.userList=userList
  }
}
