<template>
    <div class="home-page">
        <base-header></base-header>
        <div class="home-child1">
            <base-header></base-header>1</div>
        <div class="home-child2">2</div>
    </div>
</template>

<script>
    import BaseHeader from "@/components/BaseHeader/BaseHeader";
    export default {
        name: "Home",
        components: {BaseHeader},
        data(){
        }
    }
</script>

<style scoped lang="less">
.home-page{
    width:100%;
    height:800px;
    padding-top:46px;
    background-color:red;
    .home-child1{
        height:500px;
        background-color:orange;
    }
    .home-child2{
        height:300px;
        background-color:blue;
    }
}
</style>
