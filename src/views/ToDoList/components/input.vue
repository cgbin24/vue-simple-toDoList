<template>
  <div class="wrapper">
    <input v-model="value" type="text" class="input" @keyup.enter="add"/>
    <br />
    <button type="submit" @click="add">add</button>
    <button type="submit" @click="search">search</button>
    <button type="submit" @click="reset">reset</button>
    <button type="submit" @click="clear">clear</button>
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
      this.value.trim() && this.$emit('val', this.value.trim())
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