<template>
    <van-nav-bar
            :title="title"
            left-text="返回"
            right-text="按钮"
            left-arrow
            fixed
            @click-left="onClickLeft"
            @click-right="onClickRight"
    />
</template>

<script>
    export default {
        name: "BaseHeader",
        props:{
            title:{
                type:String,
                default:"首页"
            }
        },
        methods:{
            onClickLeft(){
                this.$emit('onClickLeft');
            },
            onClickRight(){
                this.$emit('onClickRight');
            }
        }
    }
</script>

<style scoped>
</style>
