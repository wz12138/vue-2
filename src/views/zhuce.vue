<template>
    <div>
        <img class="bj" src="../assets/dsqq.jpg" alt="">
        <div class="bder">
            <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
                <el-form-item label="手机号" prop="phone">
                    <el-input v-model="ruleForm.phone" class="put"></el-input>
                </el-form-item>
                <el-form-item label="用户名" prop="nname">
                    <el-input v-model="ruleForm.nname" class="put"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="mima">
                    <el-input v-model="ruleForm.mima" class="put"></el-input>
                </el-form-item>
                <el-form-item label="邮箱" prop="Email">
                    <el-input v-model="ruleForm.Email" class="put"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" @click="resetForm('ruleForm')" class="bton">立即注册</el-button>
                </el-form-item>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      ruleForm: {
        phone: "",
        mima: "",
        Email: ""
      },
      rules: {
        phone: [
          { required: true, message: "手机号不能为空", trigger: "blur" },
          { pattern: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/, message: "格式错误", trigger: "blur" },
        ],
        nname: [
          { required: true, message: "用户名不能为空", trigger: "blur" },
          { pattern: /^[a-zA-Z][a-zA-Z0-9_]{3,15}$/, message: "格式错误", trigger: "blur" },
        ],
        mima: [
          { required: true, message: "密码不能为空", trigger: "blur" },
          { pattern: /^[a-zA-Z]\w{5,17}$/, message: "格式错误", trigger: "blur" },
        ],
        Email: [
          { required: true, message: "邮箱不能为空", trigger: "blur" },
          { pattern: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, message: "格式错误", trigger: "blur" },
        ],
      },
    };
  },
  methods: {
    resetForm(formName) {
       this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$http.post('/nd/page/register',{
            username: this.ruleForm.nname,
            password: this.ruleForm.mima,
            email: this.ruleForm.Email,
            phone: this.ruleForm.phone
          }).then(res=>{
            console.log(res)
          })
        } else {
          return false;
        }
      })
    }
  },
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
    height: 300px;
    margin-top: 10%;
    margin-right: 5%;
    background-color: rgba(250,250,250,0.5)
}
.bton{
    width: 90%;
}
</style>