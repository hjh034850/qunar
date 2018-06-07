<template>
    <div>
        <div class="banner" @click = "changeShow">
            <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg"/>
            <div class="banner-info">
                <p class="banner-title">故宫(AAAAA)景区</p>
                <p class="banner-number">
                    <i class="iconfont img-icon">&#xe6a5;</i>
                    2
                </p>
            </div>
        </div>

         <Gallery v-show="showGallery" @close = "closeGallery"></Gallery>
    </div>

   
</template>

<script>
import Gallery from './../../common/Gallery'
    export default {
        name:'Banner',
        data (){
            return {
                showGallery:false
            }
        },
        props:{
            infor:Object
        },
        components:{
            Gallery
        },
        methods:{
            changeShow () {
                this.showGallery = true;
            },
            closeGallery (){
                this.showGallery = false;
            }
        }
    }
</script>

<style scoped>
    .banner{
        position:relative;
    }
    .banner-img{
        width:100%;
    }
    .banner-info{
        display:flex;
        position:absolute;
        left:0;
        right:0;
        bottom:0;
        line-height:0.6rem;
        color:#fff;
        background-image:linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
    }
    .banner .banner-title{
        flex: 1;
        font-size: 0.32rem;
        padding:0 0.2rem;
    }
      .banner-number{
        height: 0.32rem;
        line-height: 0.32rem;
        margin-top: 0.14rem;
        padding: 0 .4rem;
       position:absolute;
       right:0;
        border-radius: 0.2rem;
        background: rgba(0, 0, 0, .8);
        font-size: 0.24rem;
      }
      .img-icon{
          font-size:0.24rem;
      }
       
</style>