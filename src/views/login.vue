<template>
    <div>
        <img class="bj" src="../assets/dsqq.jpg" alt="">
        <div class="bder">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="用户名" prop="phone">
                    <el-input v-model="ruleForm.phone" class="put"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="mima">
                    <el-input v-model="ruleForm.mima" class="put"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="submitForm('ruleForm')" class="bton">立即登录</el-button>
                    <el-button @click="resetForm('ruleForm')" class="bton">立即注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      ruleForm: {
        phone: "",
        mima: ""
      },
      rules: {
        phone: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { pattern: /^[a-zA-Z][a-zA-Z0-9_]{2,15}$/, message: "格式错误", trigger: "blur" },
        ],
        mima: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { pattern: /^[a-zA-Z]\w{5,17}$/, message: "格式错误", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    ...mapMutations({
      changLogin:'changLogin'
    }),
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/nd/page/login',{
            username: this.ruleForm.phone,
            password: this.ruleForm.mima
          }).then(res=>{
            console.log(res)
            if(res.data.code === 0) {
              this.$message.success("登录成功~");
              localStorage.setItem('userToken',res.data.token);
              this.changLogin({
                logintoken:res.data.token
              })
            }else {
              alert(res.data.msg)
            }
          })
        } else {
          return false;
        }
      })
    },
    resetForm(formName) {
      this.$router.push({
          path:'/zhuce',
        })
    }
  }
}
</script>

<style scoped lang="scss">
.bj {
    width: 100%;
    height: 100%;
}
.put {
    width: 90%;
}
.bder {
    position: fixed;
    top: 10px;
    right: 30px;
    padding-top: 20px;
    width: 30%;
    height: 260px;
    margin-top: 10%;
    margin-right: 5%;
    background-color: rgba(250,250,250,0.5)
}
.bton{
    width: 40%;
}
</style>