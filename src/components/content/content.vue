<template>
  <el-main>
    <el-table :data='$store.state.userList'>
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
      :current-page=$store.state.currentPage
      :page-sizes="[1, 5, 10, 15]"
      :page-size=$store.state.pageSize
      layout="total, sizes, prev, pager, next, jumper"
      :total=$store.state.total>
    </el-pagination>
  </el-main>
</template>

<script>
  export default {
    created() {
      this.$store.dispatch('getUserList');
    },

    methods: {
      // 初始页currentPage、初始每页数据数pagesize和数据data
      handleSizeChange: function (pageSize) {
        // this.pageSize = size;
        this.$store.dispatch('changePagesize',{pageSize})
        this.$store.dispatch('getUserList')
        // console.log(this.pagesize)  //每页下拉显示数据
      },
      handleCurrentChange: function(currentPage){
        // this.currentPage = currentPage;
        this.$store.dispatch('changeCurrentPage',{currentPage})
        this.$store.dispatch('getUserList')
        // console.log(this.currentPage)  //点击第几页
      }
    }
  };
</script>

<style lang="scss">

</style>
