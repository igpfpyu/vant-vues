<template>
    <base-page>
        <base-header slot="header" title="视频"></base-header>
        <div slot="content">
            <div class="video-item">
                <video ref="videoItem" width="100%">
                    <source src="https://gslb.miaopai.com/stream/9B-WKwGpMZp2jUVNbAiuPhBvw6po448ObIJJ9g__.mp4" />
                </video>
                <div class="video-event"></div>
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
                play:true
            }
        },
        methods:{
            playClick(){
                this.play=false;
                this.$refs.videoItem.play();
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
