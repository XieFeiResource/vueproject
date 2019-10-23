<template>
  <el-main>
    <el-table :data='StuCourseMsg'>
      <el-table-column prop="stuName" label="姓名" width="140">
      </el-table-column>
      <el-table-column prop="stuAge" label="年龄" width="140">
      </el-table-column>
      <el-table-column prop="course" label="课程" width="140">
      </el-table-column>
      <el-table-column prop="cgrade" label="成绩" width="140">
      </el-table-column>
    </el-table>
  </el-main>
</template>

<script>
  import {reqStuCourseMsg} from '../../api'
  export default {
    data() {
      return {
        StuCourseMsg:{}
      }
    },
    async mounted() {
      const result=await reqStuCourseMsg()
      let tableData= new Array();
      let k=0;
      for(let i=0;i<result.length;i++){
        let obj={}
        let len=result[i].courses.length
        for(let j=0;j<len;j++){
          obj.stuName=result[i].stuName;
          obj.stuAge=result[i].stuAge;
          obj.course=result[i].courses[j].cname;
          obj.cgrade=result[i].courses[j].cgrade;
          tableData[k]=obj;
          k++
        }
      }
      this.StuCourseMsg=tableData;
    }

  };
</script>

<style lang="scss">

</style>
