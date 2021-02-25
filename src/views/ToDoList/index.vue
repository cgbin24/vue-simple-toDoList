<template>
  <div class="wrapper">
    this is a simple page of todolist
    <Input @val="getVal" @empty="listData = []" @search="toSearch" @reset="toReset" />
    <List :listData="listData" :factor="factor" :reset="reset" />
  </div>
</template>

<script>
import Input from './components/input'
import List from './components/list'
export default {
  components: {
    Input,
    List
  },
  data() {
    return {
      listData: [],
      factor: '',
      reset: false
    }
  },
  methods: {
    getVal(val) {
      this.listData.push(val)
    },
    toSearch(val) {
      this.factor = val
    },
    toReset(val) {
      this.reset = val
    }
  }
}
</script>
<style lang="less" scoped>
.wrapper {
  text-align: center;
}
</style>