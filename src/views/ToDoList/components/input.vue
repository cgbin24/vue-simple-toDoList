<template>
  <div class="wrapper">
    <input v-model="value" type="text" class="input" @keyup.enter="add"/>
    <br />
    <button type="submit" @click="add">添加</button>
    <button type="submit" @click="search">搜索</button>
    <button type="submit" @click="reset">重置</button>
    <button type="submit" @click="clear">清空</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  methods: {
    add() {
      this.$emit('val', this.value)
      this.value = ''
    },
    reset() {
      this.$emit('reset', true)
      this.value = ''
    },
    clear() {
      this.$emit('empty', true)
      this.value = ''
    },
    search() {
      this.$emit('search', this.value)
    }
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  margin: 20px auto;
  .input {
    width: 360px;
    height: 30px;
    border-radius: 5px;
  }
  button {
    width: 70px;
    height: 32px;
    margin: 10px;
    border: none;
    color: #fff;
    background-color: rgb(104, 104, 247);
  }
}
</style>