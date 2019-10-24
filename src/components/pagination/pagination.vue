<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="currentPage"
    :page-sizes="[5, 10, 20, 40]"
    :page-size="pagesize"
    layout="total, sizes, prev, pager, next, jumper"
    :total="userList.length">
  </el-pagination>
</template>

<script>
    export default {
        data() {
          return {
            currentPage:1, //初始页
            pagesize:10,    //    每页的数据
            userList: []
          }
        },
    }
</script>

<style lang="scss">

</style>
