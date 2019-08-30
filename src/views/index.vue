<template>
    <div>
        <div>
            <router-view></router-view>
        </div>
        <van-tabbar v-model="active" fixed>
            <van-tabbar-item name="home" :to="{name:'home'}" icon="home-o">首页</van-tabbar-item>
            <van-tabbar-item name="video" :to="{name:'video'}" icon="play-circle-o">视频</van-tabbar-item>
            <van-tabbar-item icon="chat-o">热度</van-tabbar-item>
            <van-tabbar-item icon="browsing-history-o">圈子</van-tabbar-item>
            <van-tabbar-item icon="user-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>

<script>
    export default {
        name: "index",
        data(){
            return {
                active:'home'
            }
        }
    }
</script>

<style scoped>

</style>
