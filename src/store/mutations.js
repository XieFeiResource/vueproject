import {RECEIVE_USERLIST,CHANGE_CURRENTPAGE,CHANGE_PAGESIZE} from './mutation-type'

export default {
  [RECEIVE_USERLIST] (state,{tableData,countCords}){
    state.userList=tableData
    state.total=countCords
  },

  [CHANGE_CURRENTPAGE] (state,{currentPage}){
    state.currentPage=currentPage
  },

  [CHANGE_PAGESIZE] (state,{pageSize}){
    state.pageSize=pageSize
  }
}
