<template>
 <div class="nav-swipe">  
        <div v-for="item in SwiperList">
            <img :src="item.imgUrl"/>
            <p v-html = "item.title"></p>
        </div>
        
 </div>
</template>

<script>


    export default {
        name:'Icons',
        data(){
            return {                
                SwiperList:[
                    {
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
                    title:'景点门票'
                        },
                    {
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
                    title:'必游榜单'
                        },
                    {
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/bd/9f7b9b2b60c1502.png',
                    title:'踏青赏花'
                        },
                    {
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
                    title:'一日游'
                        },
                    {
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
                    title:'动植物园'
                        },
                    {
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/dd/cce1231836f10a02.png',
                    title:'周边游'
                        },
                    {
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/8246f27355943202.png',
                    title:'游乐场'
                        },
                    {
                    imgUrl:'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
                    title:'自然风光'
                    }

                ],               
            }
        }
       
    }
</script>

<style scoped>
    .nav-swipe{
        height:3.3rem;
        margin-top:0.1rem;
    }
    .nav-swipe img{
        width:1rem;
        height:1rem;
    }
    .nav-swipe div{
        width:1.6rem;
        height:1.6rem;
        float:left;
        text-align:center;       
    }
</style>