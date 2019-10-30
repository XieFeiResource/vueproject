import {RECEIVE_USERLIST,CHANGE_CURRENTPAGE,CHANGE_PAGESIZE} from './mutation-type'

import {reqStuCourseMsg} from '../api'
import {sortArray} from '../untils'
export default {
 async getUserList ({state,commit}) {
   const result=await reqStuCourseMsg(state.currentPage,state.pageSize)
   const tableData=sortArray(result.records)
   const countCords=result.total
   commit(RECEIVE_USERLIST,{tableData,countCords})
  },

  changeCurrentPage ({commit},currentPage){
   console.log('currentPage '+currentPage)
      commit(CHANGE_CURRENTPAGE,currentPage)
  },

  changePagesize ({commit},pageSize){
    console.log("pageSize "+pageSize)
      commit(CHANGE_PAGESIZE,pageSize)
  }
}
