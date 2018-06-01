<template>
    <div>
        <div class="recommend-title">热销推荐</div>
        <ul>
            <li class="item" v-for="item in list">
                <div class="item-img">
                <img :src="item.imgUrl"/>
                </div>

                <div class="item-info">
                    <p class="item-title">{{item.title}}</p>
                    <p class="item-desc">{{item.desc}}</p>
                    <button class="item-button">查看详情</button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:'Recommend',
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
    }
    .item img{
        width: 1.7rem;
        height: 1.7rem;
        padding: .1rem;
    }
    .item-info{
        float:left;   
        padding:0.1rem;
        width:4rem;
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
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    .item-button{
        line-height:0.44rem;
        margin-top:0.16rem;
        background:#ff9300;
        padding:0 0.2rem;
        border-radius:0.06rem;
        color:#fff; 
    }
</style>