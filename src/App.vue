<template>
  <div id="app">
    <el-container>
      <el-header height="50px">
        <Header></Header>
      </el-header>
      <el-container>
        <router-view></router-view>
        <transition name="fade">
          <musicDet v-if="isshow"></musicDet>
        </transition>
      </el-container>
      <el-footer height="50px">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from './components/head'
import Footer from './components/footer'
import musicDet from './components/musicDet'
export default {
  name: 'app',
  components: {
    Header,
    Footer,
    musicDet
  },
  computed:{
    isshow (){
      return this.$store.state.showMusicDet
    }
  },
  methods:{
  }
}
</script>

<style>
body,div,h1,h2,h3,h4,h5,h6,a,img,li,ul,form{
  margin: 0;
  padding: 0;
  font-size: 12px;
  color: #333;
  font-family: '微软雅黑';
}
ul{
  list-style: none;
}
#app {
  width: 1055px;
  margin: 40px auto;
  height: 650px;
  box-shadow: 0 0 15px #ccc;
}
.el-header, .el-footer {
  background-color: #333;
  color: #333;
  text-align: center;
  line-height: 50px;
}
.el-footer{
  background-color: #f6f6f8;
  border-top: 1px solid #e1e1e2;
}
.el-aside {
  background-color: #f5f5f7;
  color: #333;
  border-right: 1px solid #e1e1e2;
  text-align: center;
  line-height: 550px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}
#app .el-container{
  position: relative;
}
body > .el-container {
  margin-bottom: 50px;

}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.div-icon-love-f,.div-icon-love-t{
  background: url('../src/images/icon/ico-love-f.png') no-repeat;
  width:16px;
  height: 16px;
  display: inline-block;
  background-size: 17px;
  background-position: 0 1px;
}
.div-icon-love-t{
  background-image: url('../src/images/icon/ico-love-t.png');
}

</style>
