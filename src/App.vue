<template>
  <el-container style="height: 500px; border: 1px solid #eee">
      <Left></Left>
    <el-container direction="vertical">
        <Header></Header>
        <Content></Content>
        <!--<Content :result="result"></Content>-->
        <!--<Content v-for="msg in StuCourseMsg" v-bind:key="msg.stuId" v-bind:msg="msg"></Content>-->
    </el-container>
  </el-container>
</template>

<script>
import Header from './components/header/header'
import Left from './components/left/left'
import Content from './components/content/content'

// import {reqStuCourseMsg} from './api'
export default {
  name: 'App',
  data(){
    return {
      result:{}
    }
  },
  components: {//局部声明组件
    Header,
    Left,
    Content,
  },
  /*async mounted() {
    const result = await reqStuCourseMsg()
    this.result=result
  }*/
}
</script>

<style>

</style>
