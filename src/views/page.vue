<template>
  <div>
    <top :datalist="navl"/>
    <div class="box">
      <i class="el-icon-grape bz"></i>
      <el-row>
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger" round>危险按钮</el-button>
      </el-row>
      <el-row>
        <el-button icon="el-icon-search" circle></el-button>
        <el-button type="primary" icon="el-icon-edit" circle></el-button>
        <el-button type="success" icon="el-icon-check" circle></el-button>
        <el-button type="info" icon="el-icon-message" circle></el-button>
        <el-button type="warning" icon="el-icon-star-off" circle></el-button>
        <el-button type="danger" icon="el-icon-delete" circle disabled>
        </el-button>
      </el-row>
      <!-- <div></div> -->
    </div>
    <bottom></bottom>
  </div>
</template>

<script>
import top from "../components/top";
import bottom from "../components/bottom";
export default {
  components: {
    top,
    bottom,
  },
  data() {
    return {
      navl:[
        {name:'导航一', age:18},
        {name:'导航二', age:18},
        {name:'导航三', age:18},
        {name:'导航四', age:18},
        {name:'导航五', age:18},
      ]
    }
  },
  methods:{
    //父向子传值（属性传值）
  }
}
</script>

<style scoped>
.box {
  width: 100%;
  height: 500px;
  background-color: #f9f;
  text-align: center;
}
.bz {
  font-size: 30px;
}
</style>