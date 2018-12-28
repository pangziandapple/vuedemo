<template>
    <el-table
      :data="tableData"
      style="width: 100%">
      <el-table-column
        prop="index"
        label="序号"
        width="180">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名"
        width="180">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
</template>

<script>
export default {
  name: 'userList',
  created () {
    this.$axios.post('/api/users').then(function (response) {
      this.tableData = response.data
    }).catch(function (error) {
      console.log(error)
    })
  },
  data () {
    return {
      tableData: {
      }
    }
  }
}
</script>
