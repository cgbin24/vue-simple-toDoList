<template>
  <div>
    <ul v-if="list.length > 0">
      <li v-for="(item,index) in list" :key="index">
        <span>{{index+1}}、{{item}}</span> <i @click="del(item,index)"> X </i>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    listData: {
      type: Array
    },
    factor: {
      type: String
    },
    reset: {
      type: Boolean
    }
  },
  watch: {
    listData: {
      handler(val) {
        this.list = val
      }
    },
    factor: {
      handler(val) {
        val && (this.list = this.listData.filter(item => item === val))
        
      }
    },
    reset: {
      handler(val) {
        val && (this.list = this.listData)
      }
    }
  },
  data() {
    return {
      list: []
    }
  },
  methods: {
    del(item, index) {
      this.list.splice(index, 1)
    }
  }
}
</script>
<style lang="less" scoped>
ul {
  width: 400px;
  list-style: none;
  border: 1px solid #ccc;
  margin: auto;
  padding-left: 10px;
  border-radius: 5px;
  box-shadow: .5px .5px 1px 1px #ccc;
  li {
    margin: 20px 20px 20px 20px;
    padding-bottom: 6px;
    text-align: left;
    border-bottom: .4px solid #ccc;
    i {
      float: right;
      margin-right: 20px;
      cursor: pointer;
      text-align: right;
    }
    i:hover {
      content: '删除';
    }
  }
}

</style>