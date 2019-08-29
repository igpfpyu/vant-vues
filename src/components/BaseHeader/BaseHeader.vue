<template>
    <van-nav-bar
            class="nav-bar-box"
            :title="title"
            :left-text="leftText"
            :left-arrow="false"
            fixed
            @click-left="onClickLeft"
            @click-right="onClickRight"
    >
        <van-dropdown-menu v-if="isRight" slot="right">
            <van-dropdown-item v-model="value1" :options="option1" />
        </van-dropdown-menu>
    </van-nav-bar>
</template>

<script>
    export default {
        name: "BaseHeader",
        data(){
            return {
                value1:0,
                option1: [
                    { text: '全部商品', value: 0 },
                    { text: '新款商品', value: 1 },
                    { text: '活动商品', value: 2 }
                ]
            }
        },
        props:{
            title:{
                type:String,
                default:"首页"
            },
            leftText:{
                type:String,
                default:"",
            },
            isRight:{
                type:Boolean,
                default:false
            }
        },
        methods:{
            onClickLeft(){
                this.$emit('onClickLeft','left');
            },
            onClickRight(){
                this.$emit('onClickRight', 'right');
            }
        }
    }
</script>
<style scoped lang="less">

</style>
<style lang="less">
    .nav-bar-box{
        .van-cell__title{
            text-align:left;
        }
        .van-dropdown-menu__title:after{
            display:none;
        }
        .van-dropdown-menu{
            height:46px;
        }
    }
</style>
