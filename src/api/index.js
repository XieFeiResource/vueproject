/*
包含n个接口请求函数的模块
函数的返回值: promise对象
 */
import ajax from './ajax'
const BASE_URL = '/api'
export const reqStuCourseMsg=(page,size) => ajax(BASE_URL+'/stu/getStuAndCourseList',{page:page,size:size})
