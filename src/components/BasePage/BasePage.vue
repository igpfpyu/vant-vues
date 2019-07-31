<template>
    <div class="container">
        <slot name="header"></slot>
        <slot name="content"></slot>
    </div>
</template>

<script>
    export default {
        name: "BasePage"
    }
</script>

<style scoped lang="less">
.container{
    width:100%;
    padding-top:46px;
    margin-bottom:50px;
}
</style>
