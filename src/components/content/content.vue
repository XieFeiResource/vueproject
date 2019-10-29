<template>
  <el-main>
    <el-table :data='state.userList'>
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
      :current-page="state.currentPage"
      :page-sizes="[1, 5, 10, 15]"
      :page-size="state.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="state.total">
    </el-pagination>
  </el-main>
</template>

<script>
  // import pagination from '../../components/pagination/pagination'
  import {reqStuCourseMsg} from '../../api'
  import {mapActions} from 'vuex'
  import {mapState} from 'vuex'
  export default {
    /*data() {
      return {
        currentPage:1, //初始页
        pageSize:5,    //每页的数据
        userList:[],
        total:0,
      }
    },*/
    /*components: {//局部声明组件
      pagination
    },*/
    created() {
      this.$store.dispatch('getUserList')
    },

    methods: {
      ...mapActions(['getUserList']),

      // 初始页currentPage、初始每页数据数pagesize和数据data
      handleSizeChange: function (size) {
        this.pageSize = size;
        this.getUserList()
        console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
        this.getUserList()
        console.log(this.currentPage)  //点击第几页
      },
      sortArray:function (result) {
        let tableData= new Array();
        let k=0;
        for(let i=0;i<result.length;i++){
          let len=result[i].courses.length
          for(let j=0;j<len;j++){
            let obj={}
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
    }
  };
</script>

<style lang="scss">

</style>
