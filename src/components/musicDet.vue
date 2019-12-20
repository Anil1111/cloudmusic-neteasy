<template>
    <div class="musicdetBox">
          0000000000000000000000000
          <i class="el-icon-bottom-left" @click="changeDetShow"></i>
    </div>
</template>

<script>
    export default {
        data (){
            return {

            }
        },
        methods:{
            changeDetShow (){
                this.$store.commit('changeMusicShow')
            }
        },
        mounted (){
          
        }
    }
</script>

<style scoped>
.musicdetBox{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
}
</style>