<template>
    <base-page>
        <base-header slot="header" title="视频"></base-header>
        <div slot="content">
            <div class="video-item">
                <video ref="videoItem" width="100%"
                       height="100%"
                       object-fit="fill"
                       @click="videoClick">
                    <source src="https://gslb.miaopai.com/stream/9B-WKwGpMZp2jUVNbAiuPhBvw6po448ObIJJ9g__.mp4" />
                </video>
                <div class="video-event" :class="paceShow?null:'site'">
                    <div class="pace-line">
                        <span :style="{'width':w+'%'}" ></span>
                    </div>
                    <div class="pace-box">
                        <div>
                            <van-icon @click="pauseCLick" name="play-circle" size="20px" />
                        </div>
                    </div>
                </div>
                <div class="video-play" v-if="play">
                    <van-icon @click="playClick" name="play-circle" size="40px" color="#fff" />
                </div>
            </div>
        </div>
    </base-page>
</template>

<script>
    import BasePage from "../../components/BasePage/BasePage";
    import BaseHeader from "../../components/BaseHeader/BaseHeader";
    export default {
        name: "VideoPage",
        components: {BaseHeader, BasePage},
        data(){
            return {
                play:true,
                paceShow:false,
                w:0     //视频进条的宽度；
            }
        },
        methods:{
            pauseCLick(){

            },
            playClick(){
                console.log(this.$refs.videoItem.duration);
                this.play=this.paceShow=false;
                this.$refs.videoItem.play();
                setInterval(()=>this.getProgress(), 100);
            },
            videoClick(){
                this.play=true;
                this.$refs.videoItem.pause();
            },
            getProgress(){
                var percent = this.$refs.videoItem.currentTime / this.$refs.videoItem.duration;
                this.w=(percent*100).toFixed(2);
            }
        }
    }
</script>

<style scoped lang="less">
.video-item{
    position: relative;
    overflow:hidden;
    display:flex;
    .video-event{
        position: absolute;
        left:0; bottom:0;
        width:100%;
        height:32px;
        background-color:rgba(0,0,0,0.2);
        z-index: 2;
        overflow:hidden;
        .pace-line{
            width:100%;
            height:1px;
            overflow: hidden;
            background-color:rgba(0, 0, 0, 0.6);
            span{
                display: block;
                height:100%;
                width:10%;
                background-color:red;
            }
        }
        .pace-box{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;
            padding:5px;
        }
    }
    .site{
        transition: bottom 300ms;
        bottom:-31px;
    }
    .video-play{
        width:100%;
        height:100%;
        position: absolute;
        top:0; left:0;
        background-color:rgba(0,0,0,0.5);
        z-index: 1;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>
