<template>
    <div class="list" ref='wrapper'>
    <div>
        <div class="area">
            <div class="title">当前城市</div>
            <div class="button-list">
                <div class="button">{{this.$store.state.city}}</div>  
            </div>           
        </div>
        <div class="area">
            <div class="title">热门城市</div> 
            <div class="button-list">
                <div class="button" v-for="item in hot" :key="item.id" @click="cityClick(item.name)">{{item.name}}</div>              
            </div>    
        </div>
        <div class="area" v-for="(item,key) in cities" :ref = "key">
            <div class="title" >{{key}}</div>
            <ul class="item-list">
                <li class="item" v-for="innerItem in item" @click = "cityClick(innerItem.name)">{{innerItem.name}}</li>            
            </ul>    
        </div>
        
    </div>
    </div>
</template>

<script>
import Bscroll from 'better-scroll'
    export default {
        name:'List',
        mounted () {
             this.scroll = new Bscroll(this.$refs.wrapper,{click:true})   
        },   
        props:{
            hot:Array,
            cities:Object,
            letter:String
        },
        watch : {
            letter () {
                if(this.letter){
                    const element = this.$refs[this.letter][0];
                    this.scroll.scrollToElement(element);
                }
            }
        },
        methods:{
            cityClick (city) {
                if(city != this.$store.state.city){
                    this.$store.commit('handleCityClick',city); 
                    this.$store.state.flag = true
                }else{
                    this.$store.state.flag = false
                }
               this.$router.push('/');           
            }
        }
    }
</script>

<style scoped>
    .list{
        overflow:hidden;
        position:absolute;
        left:0;
        right:0;
        top:0.86rem;
        bottom:0;
    }
    .title{
        line-height:0.54rem;
        background:#eee;
        padding-left:0.2rem;
        color:#666;
        font-size:0.26rem;
        border-bottom:0.02rem solid #ccc;
    }
    .button-list{
        padding:0.1rem 0.6rem 0.1rem 0.1rem;
        overflow:hidden;
    }
    .button{
        border:0.02rem solid #ccc;
        width:29%;
        float:left;
        margin:0.1rem;
        text-align:center;  
    }
    .item-list .item{
        line-height:0.76rem;
        padding-left:0.2rem;
        border-bottom:0.02rem solid #ccc;
    }
</style>