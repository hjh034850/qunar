<template>
    <div class="header">
        城市选择
        <router-link to="/">
            <i class='iconfont city-icon'>&#xe624;</i>
        </router-link>
        
    </div>
    
</template>

<script>

    export default {
        name:'Header'
    }
</script>

<style scoped>
    .header{
        height:0.86rem;
        line-height:0.86rem;
        text-align:center;
        background:#00bcd4;
        color:#fff;
        font-size:0.32rem;
        position:relative;  
    }
    .city-icon{
        position:absolute;
        left:0;
        right:0;
        width:0.64rem;
        color:#fff;
        font-size:0.4rem;
    }
</style>