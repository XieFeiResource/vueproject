<template>
  <el-container style="height: 500px; border: 1px solid #eee">
      <Left></Left>
    <el-container>
        <Header></Header>
        <Content></Content>
    </el-container>
  </el-container>
</template>

<script>
import Header from './components/header'
import Left from './components/left'
import Content from './components/content'

export default {
  name: 'App',
  components: {//局部声明组件
    Header,
    Left,
    Content
  }
}
</script>

<style>

</style>
