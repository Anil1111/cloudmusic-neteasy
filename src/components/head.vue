<template>
  <div class="head-main">
    <h1 class="logobox"><img src="../images/logo.png" alt="logo" /></h1>
    <el-button-group>
      <el-button disabled icon="el-icon-arrow-left" size="mini"></el-button>
      <el-button disabled size="mini"><i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
    <div class="searchbox"> 
      <input type="text" name="searchinput" placeholder="搜索音乐、视频、歌词、电台" v-model="input4">
      <i class="el-icon-search"></i>
    </div>
    <div class="head-user">
      <img src="../images/user.png" alt="userpic" srcset="">
      <span>杰杰伦</span>
      <i class="el-icon-caret-bottom"></i>
      <span class="open-vip">开通vip</span>
      <el-badge class="item">
        <i class="el-icon-message"></i>
      </el-badge>
      <i class="el-icon-setting"></i>

      <div class="window-operate">
        <i class="el-icon-minus"></i>
         <i class="el-icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  data (){
    return {
      input4:''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head-user{
  float: right;
  vertical-align: top;
  color: rgb(199, 199, 199);
}
.head-user img{
    width: 28px;
    height: 28px;
    border-radius: 50%;
    display: inline-block;
    vertical-align: middle;
    margin-right: 10px;
    position: relative;
    top:-2px;
}
.head-user i,.head-user span{
  cursor: pointer;
}
.head-user i:hover,.head-user span:hover{
 color: rgb(241, 241, 241);
}
.head-user .el-icon-setting{
  margin: 0 20px;
  font-size: 18px;
}
.window-operate{
  display: inline-block;
  color:rgb(199, 199, 199);
  border-left: 1px solid rgb(26, 26, 26);
  margin-left: 15px;
  height: 20px;
  position: relative;
  top:14px;
}
.window-operate i{
  font-size: 18px;
  margin-left: 15px;
  vertical-align: top;
}
.el-badge i{
    font-size: 18px;
    color: rgb(197, 197, 197);
}
.open-vip{
  margin: 0 20px;
}
.searchbox{
  display: inline-block;
  vertical-align: top;
  margin-left: 20px;
}
.searchbox input{
  width:240px;
  height:25px;
  background:#252525;
  border:none;
  border-radius: 15px;
  color:#eee;
  padding: 0 15px;
  outline: none;
}
.searchbox i{
  color: #adadad;
  position: relative;
  right: 20px;
  cursor: pointer;
}
.searchbox i:hover{
  color:#f1f1f1;
}
div.el-input--mini{
  display: inline-block;
  width: 240px;
  vertical-align: top;
  margin-left: 20px;
}
.head-main{
  text-align: left;
}
.logobox{
  display: inline-block;
  position: relative;
  top:2px;
}
.el-button-group {
    vertical-align: super;
    margin-left: 50px;
    position: relative;
    top:-3px;
}
.el-button--mini, .el-button--mini.is-round {
    padding: 4px 4px;
    background: none;
    border-color: #676767;
    color:#fff;
    font-weight: 700;
}
.el-button:hover{
  background: none;
  border-color: #676767;
  color:#fff;
}
.el-button.is-disabled, .el-button.is-disabled:focus, .el-button.is-disabled:hover {
    color: #737373;
    background: none;
    border-color: #525252;
}
</style>
