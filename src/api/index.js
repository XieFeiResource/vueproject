/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
const BASE_URL = '/api'
export const reqStuCourseMsg=(currentPage,pageSize) => ajax(BASE_URL+'/stu/getStuAndCourseList',{currentPage:currentPage,pageSize:pageSize})
