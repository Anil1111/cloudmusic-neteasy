<template>
    <div class="aside-box">
        <ul>
            <h3>推荐</h3>
            <li><router-link to=""><i class="el-icon-headset"></i>发现音乐</router-link></li>
            <li><router-link to=""><i class="el-icon-c-scale-to-original"></i>私人FM</router-link></li>
            <li><router-link to=""><i class="el-icon-video-camera"></i>视频</router-link></li>
            <li><router-link to=""><i class="el-icon-user"></i>朋友</router-link></li>
        </ul>
        <ul>
            <h3>我的音乐</h3>
            <li><router-link to=""><i class="el-icon-mobile"></i>本地音乐</router-link></li>
            <li><router-link to=""><i class="el-icon-download"></i>下载管理</router-link></li>
            <li><router-link to=""><i class="el-icon-upload"></i>我的音乐云盘</router-link></li>
            <li><router-link to=""><i class="el-icon-star-off"></i>我的收藏</router-link></li>
        </ul>
        <ul>
            <h3>创建的歌单</h3>
            <li><router-link to=""><i class="div-icon-love-f"></i>我喜欢的音乐</router-link></li>
            <li><router-link to=""><i class="el-icon-finished"></i>yanni</router-link></li>
        </ul>
        <!-- <ul>
            <h3>收藏的歌单</h3>
            <li><router-link to=""><i class="el-icon-finished"></i>纯音乐的殿堂</router-link></li>
            <li><router-link to=""><i class="el-icon-finished"></i>怀旧粤语合集</router-link></li>
        </ul> -->
        <div class="nowplay-box" @mouseover="changeNowPlayHover" @mouseout="changeNowPlayHover">
            <img :src="nowplaySong.imageUrl" alt="" srcset="">
            <div>
                <span>{{ nowplaySong.title }}<i class="div-icon-love-f nowloveico"></i></span>
                <span style="color:#777">{{nowplaySong.singer}}</span>
            </div>
            <div class="nowplay-hover" v-show="nowplayh" @click="changeShowDet">
                <i class="el-icon-top-right"></i>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';
    export default {
        data (){
            return {
                nowplayh:false
            }
        },
        computed:{
            ...mapState([
                'nowplaySong'
            ])
        },
        methods:{
            changeNowPlayHover (){
                var f = this.nowplayh;
                if(f){
                    this.nowplayh = false
                }else{
                     this.nowplayh = true
                }
            },
            changeShowDet (){
                this.$store.commit('changeMusicShow')
            }
        }
    }
</script>

<style scoped>
    .aside-box{
        height: 540px;
        font-size: 13px;
        color:#666;  
        position: relative;
    }
    .aside-box ul{
        overflow: hidden;
        margin-top: 10px;
    }
    .nowplay-box{
        position: absolute;
        bottom: 0;
        left: 0;
        padding: 5px;
        line-height: 19px;
        right:0;
        border-top:1px solid rgb(223, 223, 223);
    }
    .nowplay-box img{
        width: 45px;
        height: 45px;
        float:left;
        margin-right: 10px;
        cursor: pointer;
    }
    .nowplay-box div{
        float:left;
        padding: 3px 0 0 0;
    }
    .nowplay-box div span{
        display: block;
        text-align: left;
        font-size: 14px;
        cursor: pointer;
        overflow: hidden;
    }
    .aside-box ul h3{
        line-height: 20px;
        text-align: left;
        padding: 3px 0 3px 10px;
        font-size: 13px;
        color:#888;
        font-weight: 400;
    }
    .aside-box ul li{
        line-height: 20px;
    }
    .aside-box ul li a{
        display: block;
        padding: 7px 0 7px 20px;
        text-align: left;
        text-decoration: none;
        font-size: 13px;
        color:#555;  
    }
    .aside-box ul li a:hover{
        color:#222;
    }
    .aside-box ul li i{
        font-size: 16px;
        color:#666;  
        margin-right: 10px;
    }
    .nowplay-hover{
        position: absolute;
        top:5px;
        left: 5px;
        width:45px;
        height:45px;
        background:rgba(0, 0, 0, 0.712);
    }
    .nowplay-hover i{
        font-size: 45px;
        color:rgb(187, 187, 187);
    }
    .nowloveico{
        position: relative;
        top:2px;
        left: 15px;
    }
</style>