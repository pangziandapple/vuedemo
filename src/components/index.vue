<template>
    <el-container style="height:100%">
        <el-aside>
          <el-menu style="height:100%">
            <el-menu-item index="userList" router="true">
              <i class="el-icon-menu" ></i>
              <span slot="title">导航二</span>
            </el-menu-item>
            <el-menu-item index="3">
              <i class="el-icon-document"></i>
              <span slot="title">导航三</span>
            </el-menu-item>
            <el-menu-item index="4">
              <i class="el-icon-setting"></i>
              <span slot="title">导航四</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-header class="header" height="20px">标题</el-header>
          <el-main>
            <router-view></router-view>
          </el-main>
          <el-footer class="footer" >备案号</el-footer>
        </el-container>
    </el-container>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      msg: 'index'
    }
  }
}
</script>

<style>
  .header{
    text-align: center
  }
  .footer{
    text-align: center
  }
</style>
