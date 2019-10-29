import {RECEIVE_USERLIST} from './mutation-type'

import {reqStuCourseMsg} from '../api'

export default {
 async getUserList ({state,commit}) {
   const result=await reqStuCourseMsg(state.currentPage,state.pageSize)
   const userList=this.sortArray(result);
   commit(RECEIVE_USERLIST,{userList})
  },

}
