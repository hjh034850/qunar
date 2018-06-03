<template>
    <div>
        <router-link tag="div" to="/" class="header-abs" v-show="showAbs">
            <div class="iconfont icon-back">&#xe624;</div>
        </router-link>
        <div class="header-fixed" v-show = "!showAbs">
         城市详情
        <router-link to="/">
            <i class='iconfont city-icon'>&#xe624;</i>
        </router-link>
        </div>
    </div>
</template>

<script>
    export default {
        name:'Header',
        data () {
            return {
                showAbs:true
            }
        },
        methods:{
            handSroll (){
                const top = document.documentElement.scrollTop;
                if(top > 50){
                    this.showAbs = false;
                }else{
                    this.showAbs = true;
                }
            }
        },
        activated () {
            window.addEventListener('scroll',this.handSroll)
        },
        deactivated () {
            window.removeEventListener('scroll',this.handSroll)
        }
    }
</script>

<style scoped>
    .header-abs{
        position:absolute;
        left:0.2rem;
        top:0.2rem;
        width:0.6rem;
        height:0.6rem;
        border-radius:50%;
        text-align:center;
        line-height:0.6rem;
        background:rgba(0,0,0,0.8);
    }
    .header-abs .icon-back{
        color:#fff;
        font-size:0.32rem;
    }
    .header-fixed{
        height:0.72rem;
        line-height:0.72rem;
        text-align:center;
        background:#00bcd4;
        color:#fff;
        font-size:0.32rem;
       width:100%;
       position:fixed;
       top:0;

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