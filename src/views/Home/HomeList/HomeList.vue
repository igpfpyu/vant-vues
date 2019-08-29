<template>
    <div class="list-box" @click="itemClick(list)">
        <div class="list-left">
            <p class="title">{{list.title}}</p>
            <div class="info-box">
                <span class="name">{{list.name}}</span>
                <van-button size="mini" plain round hairline type="danger">{{list.now}}</van-button>
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
            .name{
                color:#999;
                font-size:12px;
                margin-right:10px;
            }

        }
    }
    .list-right-img{
        margin-left:5px;
    }
}
</style>
