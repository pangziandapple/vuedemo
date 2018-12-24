<template>
  <div>
      <el-container>
            <el-header></el-header>
            <el-main>
                <el-row>
                    <el-col :sm="{span: 10, offset: 7}" :md="{span: 6, offset: 9}" :xs="{span: 16, offset: 4}">
                        <el-card class="box-card">
                            <div slot="header">
                                登录框
                            </div>

                            <div>
                                <el-form ref="form" :model="form" label-width="80px" center="true"  width="50%" action="login">
                                    <el-col>
                                        <el-form-item label="用户名">
                                            <el-input v-model="form.userName"></el-input>
                                        </el-form-item>
                                    </el-col>

                                    <el-col>
                                        <el-form-item label="密码">
                                            <el-input v-model="form.passwd" type="password"></el-input>
                                        </el-form-item>
                                    </el-col>

                                    <el-col class="clearfix" style="margin-bottom: 10px;text-align:center;">
                                        <el-button type="primary" v-on:click="submitForm()">登录</el-button>
                                        <el-button type="info" native-type="reset">取消</el-button>
                                    </el-col>

                                </el-form>
                            </div>

                        </el-card>

                    </el-col>
                </el-row>

            </el-main>
        </el-container>
        <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      form: {
        userName: '',
        passwd: ''
      }
    }
  },
  methods: {
    submitForm: function () {
      var routers = this.$router
      this.$axios.post('/api/login', this.form).then(function (response) {
        routers.push('index')
      }).catch(function (error) {
        console.log(error)
      })
    }
  }
}
</script>
