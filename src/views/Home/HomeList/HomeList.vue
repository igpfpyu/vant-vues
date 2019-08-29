<template>
    <div class="list-box" @click="itemClick(list)">
        <div class="list-left">
            <p class="title">{{list.title}}</p>
            <div class="info-box">
                <span class="name">{{list.name}}</span>
                <span class="now">{{list.now}}</span>
            </div>
        </div>
        <div class="list-right-img" v-if="list.img">
            <van-image width="100" :src="list.img" />
        </div>
    </div>
</template>

<script>
    export default {
        name: "HomeList",
        props:{
            list:{
                type:Object,
            }
        },
        methods:{
            itemClick(list){
                this.$emit('itemClick', list);
            }
        }
    }
</script>

<style scoped lang="less">
.list-box{
    border-bottom:1px solid #eee;
    display:flex;
    padding:5px;
    .list-left{
        flex:1;
        .title{
          font-size:16px;
            padding-bottom:10px;
        }
        .info-box{
            display:flex;
            flex-direction:row;
            justify-content:flex-start;
            align-items:center;
            .name, .now{
                font-size:12px;
            }
            .name{
                color:#999;
            }
            .now{
                color:red;
                margin-left:10px;
                border:1px solid red;
                padding:0px 5px;
                border-radius:10px;
            }
        }
    }
    .list-right-img{
        margin-left:5px;
    }
}
</style>
