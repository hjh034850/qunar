<template>
    <div>
        <div class="recommend-title">周末去哪儿</div>
        <ul>
            <li class="item" v-for="item in list">
                <div class="item-img">
                <img :src="item.imgUrl"/>
                </div>

                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                   
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Weekend',
        props:{
            list:Array
        }
       
    }
</script>

<style scoped>
     .recommend-title{
        height:0.8rem;
        line-height:0.8rem;
        background:#eee;
        text-indent:0.2rem;
    }
    .item{
       overflow:hidden;
    }
    .item-img{
        float:left;
        width:100%;
    }
    .item img{
        width: 100%;
        height: 1.7rem;
        padding: .1rem;
    }
    .item-info{
        float:left;
       
        padding:0.1rem;
    }
    .item-title{
        height:0.54rem;
        line-height:0.54rem;
        font-size:0.3rem;
    }
    .item-desc{
        line-height: .4rem;
        color: #ccc;
        font-size:0.26rem;
    }
    
</style>