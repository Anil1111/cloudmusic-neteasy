<template>
    <div class="footer-box">
        <div class="playbtngrop">
            <button class="playbtn-pre" @click="prevsong"></button>
            <button class="playbtn-start" :class="{'playbtn-stop':playing}" @click="startsong"></button>
            <button class="playbtn-next" @click="nextsong"></button>
        </div>

        <div class="play-progress">
            <span>00:00</span>
            <div class="progress-box" @click="changeSongTime">
                <div class="progress-main"></div>
            </div>
            <span>00:00</span>
        </div>

        <div class="volume-box">
            <i class="volume-ico"></i>
            <div class="volumepro" @click="changeSongVol">
                <div class="volprogress-main"></div>
            </div>
        </div>
        <div class="play-control">
            <i class="ico-refresh"></i>
            <i class="ico-biaozhun">标准</i>
            <i class="ico-ci">词</i>
            <i class="el-icon-tickets"></i>
        </div>
        <audio :src="nowplaySong.songUrl" autoplay="autoplay" ref="aud" style="display:none" id="audioDOM"></audio>
    </div>
</template>

<script>
// import Util from '../player/utill'
import { mapState } from 'vuex'
    export default {
        name:'Footer',
        data (){
            return {
                passTime:0,
                totalTime:0,
                audioEl:null
            }
        },
        computed:{
            ...mapState([
                'playing',
                'nowplaySong',
                'nowplayList'
            ])
        },
        mounted (){
            this.$refs.aud.pause()
        },
        methods:{
            prevsong (){

            },
            startsong (){
               
                if(this.$refs.aud.paused){
                    this.$refs.aud.play()
                }else{
                   this.$refs.aud.pause() 
                }

                this.$store.commit('changePlaying')

            },
            nextsong (){
                let index = this.nowplaySong.id;
                index+=1;
                if(index>this.nowplayList.length){
                    index=1
                }
                this.$store.commit('changeNowpSong',this.nowplayList[index-1])
            },
            changeSongTime (){

            },
            changeSongVol (){

            }
        }
    }
</script>

<style scoped>
    .footer-box{
        text-align: left;
    }
    .playbtngrop {
        position: relative;
        top:5px;
    }
    .playbtngrop button{
        width:30px;
        height: 30px;
        margin-right: 20px;
        outline: none;
        cursor: pointer;
        border: 0;
        background: url('../images/icon/ico-preplay.png') no-repeat #333;
        background-position: 10px 10px;
        border-radius: 40px;
    }
    .playbtngrop button:hover{
        opacity: 0.8;
    }
    .playbtngrop button.playbtn-start{
        width: 35px;
        position: relative;
        top:3px;
        height: 35px;
        background-position: 13px 8px;
        background-image: url('../images/icon/ico-startplay.png');
    }
     .playbtngrop button.playbtn-stop{
         background-image: url('../images/icon/ico-stopplay.png');
         background-position: 10px;
     }
    .playbtngrop button.playbtn-next{
         background-image: url('../images/icon/ico-nextplay.png');
    }
    .footer-box div{
        display: inline-block;
        vertical-align: middle;
    }
    .play-progress{
        margin-left: 28px;
    }
    .progress-box{
        width: 400px;
        height: 5px;
        border-radius: 15px;
        background: rgb(206, 206, 206);
        margin: 0 17px;
        overflow: hidden;
        position: relative;
    }
    .progress-main{
        height: 5px;
        width: 1px;
        background: #333;
        position: absolute;
        top:0;
        left: 0;
    }
    .volume-box{
        margin: 0 20px;
    }
    .volume-box i{
        padding: 10px;
        background: url('../images/icon/ico-volume.png') no-repeat;
        position: relative;
        top:10px;
        margin-right: 10px;
    }
    .volumepro{
        height: 5px;
        width: 100px;
        border-radius: 15px;
        background: rgb(206, 206, 206);
        position: relative;
        overflow: hidden;
    }
    .volumepro div{
        height: 5px;
        width: 1px;
        position: absolute;
        top:0;
        left: 0;
        background: #333;
    }
    .play-control{
        float: right;
    }
    .play-control i{
        display: inline-block;
        margin-right: 10px;
        font-style: normal;
        vertical-align: middle;
    }
    .play-control i.ico-refresh{
        padding: 12px;
        background: url('../images/icon/refresh.png') no-repeat;
        background-size: 22px;
    }
    .play-control i.ico-biaozhun,.play-control i.ico-ci{
        border: 1px solid #868686;
        height: 18px;
        line-height: 18px;
        padding: 0 2px;
        color: #666;
    }
    .play-control i.el-icon-tickets{
        font-size:21px;
        color: #666; 
    }
</style>