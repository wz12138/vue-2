<template>
  <div>
    <div class="tbox">
      <img src="../assets/log.jpg" />
      <ul class="tul">
        <li v-for="(item,index) in datalist" :key="index">{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return{

    }
  },
  props:{
    datalist:{
      type:Array,
      required:true
    }
  }
}
</script>

<style scoped lang="scss">
@mixin many {
  display: flex;
  align-items: center;
}
.tbox {
  width: 100%;
  height: 80px;
  @include many;
  justify-content: space-between;
  // margin: 30px auto;
  background-color: yellowgreen;
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }
  .tul {
    @include many;
    justify-content: flex-start;
    list-style: none;
    li {
      width: 80px;
      height: 60px;
      border-radius: 5px;
      margin-left: 20px;
      background-color: red;
      color: #fff;
      text-align: center;
      line-height: 60px;
      font-size: 15px;
      &:hover {
        background-color: green;
        cursor: pointer;
      }
    }
  }
}
// .tul{
//     display: flex;
//     justify-content: flex-start;
//     align-items: center;
//     list-style: none;
// }
// .til li{
//     width: 80px;
//     height: 60px;
//     border-radius: 5px;
//     margin-left: 20px;
//     background-color: red;
//     color: #fff;
//     text-align: center;
//     line-height: 60px;
//     font-size: 15px;
// }
</style>