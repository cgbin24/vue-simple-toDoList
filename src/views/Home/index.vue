<template>
  <div class="home">
    <img alt="Vue logo" src="../../assets/logo.png">
    <HelloWorld msg="Welcome to the simple ToDoList of Vue"/>
    <p class="to-list" @click="handleClick" >todolist</p>
    <Content />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Content from './components/content'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    Content
  },
  methods: {
    handleClick (){
      this.$router.push({path: '/todolist'})
      
    }
  }
}
</script>
<style lang="less" scoped>
.to-list {
  position: fixed;
  bottom: 10px;
  left: 20px;
  cursor: pointer;
  color: rgb(226, 187, 114);
}
</style>
