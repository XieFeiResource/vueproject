<template>
  <el-main>
    <el-table :data='StuCourseMsg'><!--slice((currentPage-1)*pagesize,currentPage*pagesize)-->
      <el-table-column prop="stuName" label="姓名" width="140">
      </el-table-column>
      <el-table-column prop="stuAge" label="年龄" width="140">
      </el-table-column>
      <el-table-column prop="course" label="课程" width="140">
      </el-table-column>
      <el-table-column prop="cgrade" label="成绩" width="140">
      </el-table-column>
    </el-table>
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[5, 10, 20, 40]"
      :page-size="pagesize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="userList.total">
    </el-pagination>
  </el-main>
</template>

<script>
  // import pagination from '../../components/pagination/pagination'
  import {reqStuCourseMsg} from '../../api'
  export default {
    data() {
      return {
        currentPage:1, //初始页
        pagesize:1,    //    每页的数据
        userList: {}
      }
    },
    /*components: {//局部声明组件
      pagination
    },*/
    computed: {
      StuCourseMsg:function () {
        // debugger
        let result=this.userList.records;
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
        return tableData;
      }
    },
    methods: {
      // 初始页currentPage、初始每页数据数pagesize和数据data
      handleSizeChange: function (size) {
        this.pagesize = size;
        console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
        console.log(this.currentPage)  //点击第几页
      }
    },
    async created() {
      const result = await reqStuCourseMsg(this.currentPage,this.pagesize)
      this.userList=result
    }
  };
</script>

<style lang="scss">

</style>
