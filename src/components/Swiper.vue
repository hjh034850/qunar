 <template>
    <div>
        <swipe class="my-swipe">
            <swipe-item class="slide1"></swipe-item>
            <swipe-item class="slide2"></swipe-item>
            <swipe-item class="slide3"></swipe-item>
        </swipe>
    </div>
</template>



<script>
import vueswipe from "vue-swipe/dist/vue-swipe.css";
import { Swipe, SwipeItem } from "vue-swipe";
    export default {
        name:'Swiper',
        
       components:{
           Swipe,
           SwipeItem
       }
    }
</script>

<style scoped>
    .my-swipe {
         height: 2rem;
    }
    .slide1{
        background:url('https://img1.qunarzz.com/qs/1805/95/f650b837b5246302.jpg');
        background-size:100% 100%;
    }
    .slide2{
        background:url('https://img1.qunarzz.com/qs/1805/f6/ed3f589004da902.jpg');
        background-size:100% 100%;
    }
    .slide3{
        background:url('https://img1.qunarzz.com/qs/1805/66/29a40eeb420e0302.jpg');
        background-size:100% 100%;
    }
</style>