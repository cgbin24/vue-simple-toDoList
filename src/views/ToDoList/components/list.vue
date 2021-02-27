<template>
  <div>
    <ul v-if="list.length > 0">
      <li v-for="(item,index) in list" :key="index">
        {{index+1}}、
        <input v-if="show" :value="item" type="text" @keyup.enter="submit(item, index)" @change="getValue" />
        <span v-else>{{item}}</span> 
        <i @click="del(item,index)"> × </i>
        <i v-if="show" @click="submit(item,index)"> √ </i>
        <i class="edit" v-else @click="edit(item,index)"> ✎ </i>
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
    },
  },
  data() {
    return {
      list: [],
      show: false,
      val: '',
      item: ''
    }
  },
  methods: {
    del(item, index) {
      this.list.splice(index, 1)
    },
    edit(item, index) {
      // this.list.splice(index, 1)
      this.show = !this.show
      this.val = item
      console.log(item, index);
    },
    submit(item, index) {
      this.show = !this.show
      console.log(item, index);
    },
    // 获取改变后的值
    getValue(e) {
      console.log(e.target.value, e);
      
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
    .edit {
      text-align:;
      border-bottom: 1px solid #ccc;
    }
  }
}

</style>