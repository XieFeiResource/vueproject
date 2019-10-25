<template>
  <el-main>

  <el-form :inline="true" :model="formInline" class="demo-form-inline">
    <el-form-item label="姓名">
      <el-input v-model="formInline.stuName" placeholder="姓名"></el-input>
    </el-form-item>
    <el-form-item label="年龄">
      <el-input v-model="formInline.stuAge" placeholder="年龄">
      </el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">查询</el-button>
    </el-form-item>
  </el-form>


    <el-table :data='userList'>
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
      :page-sizes="[1, 5, 10, 15]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>
  </el-main>
</template>

<script>
  // import pagination from '../../components/pagination/pagination'
  import {reqStuCourseMsg} from '../../api'
  export default {
    data() {
      console.log("data")
      return {
        currentPage:1, //初始页
        pageSize:5,    //    每页的数据
        userList:[],
        total:0,
        formInline: {
          stuName: '',
          stuAge: ''
        }
      }
    },
    /*components: {//局部声明组件
      pagination
    },*/
    created() {
      this.getPageData(JSON.stringify({
        current: this.currentPage,
        size: this.pageSize
      }),JSON.stringify(this.formInline))
    },

    methods: {
      onSubmit:function(){
        this.getPageData(JSON.stringify({
          current: this.currentPage,
          size: this.pageSize
        }),JSON.stringify(this.formInline))
      },
      async getPageData(page,params){
        const result = await reqStuCourseMsg(page,params)
        this.currentPage=result.current
        this.pageSize=result.size
        this.userList=this.sortArray(result.records)
        this.total=result.total
        console.log("created")
      },
      // 初始页currentPage、初始每页数据数pagesize和数据data
      handleSizeChange: function (size) {
        this.pageSize = size;
        this.getPageData()
        console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function(currentPage){
        this.currentPage = currentPage;
        this.getPageData()
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
