<template>
  <div id="app">
    <Header></Header>
    <Swiper></Swiper>
    <Icons></Icons>
    <Recommend :list='recommendList'></Recommend>
    <Weekend :list='weekendList'></Weekend>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header'
import Swiper from '@/components/Swiper'
import Icons from '@/components/Icons'
import Recommend from '@/components/Recommend'
import Weekend from '@/components/Weekend'
import axios from 'axios'
import rem from '@/assets/js/rem';
import reset from '@/assets/css/reset.css';
export default {
  name: 'App',
  components:{
    Header,
    Swiper,
    Icons,
    Recommend,
    Weekend
  },
  data(){
    return{
     
      recommendList:[],
      weekendList:[]
    }
  },
  methods:{
    getInfo (){
      axios.get('../../static/mock/index.json?city='+this.$store.state.city).then(this.getInfoSuccess)
    },
    getInfoSuccess(res){
      res = res.data;
      if(res.ret && res.data){
     
        const data = res.data;
        this.recommendList = data.recommendList;
        this.weekendList = data.weekendList;
      }
    }
  },
  mounted (){
    this.getInfo()
  },
  activated () {
    if(this.$store.state.flag == true){
      this.getInfo();
    }
  }
}
</script>

<style>
  html{
   
  }
</style>
