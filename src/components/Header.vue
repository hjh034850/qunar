<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-back">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
        输入城市/游玩/景点主题</div>
        
        <router-link to="/city">
            <div class="header-right">
                {{city}}
           <span class="iconfont icon-arrow">&#xe64a;</span>
            </div>
        </router-link>
         
       
        
           
    
        
        
    </div>
</template>

<script>
    export default {
        name:'Header',
        props:{
            city:String 
        }
    }
</script>

<style scoped>
    .header{
        line-height:0.84rem;
        display:flex;
        background:#00bcd4;
        color:#fff;
    }
        
    .header-left{
        width:0.64rem;
        float:left;
    }
    .header-left .icon-back{
        text-align:center;
        font-size:0.4rem;
    }
    .header .header-input{
        flex:1;
        height:0.64rem;
        line-height:0.64rem;
        margin-top:0.1rem;
        margin-left:0.2rem;
        background:#fff;
        padding-left:0.2rem;
        border-radius:0.1rem;
        color:#ccc;
    }
    .header-right{
        width:1.24rem;
        float:right;
        text-align:center;
        color:#fff;
    }
    .header .icon-arrow{
        font-size:0.24rem
    }
            
        
</style>