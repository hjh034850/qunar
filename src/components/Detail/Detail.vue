<template>
    <div class="detail">
         <Banner></Banner>
        <Header></Header>
       
    </div>
</template>

<script>
import Banner from '@/components/Detail/Banner'
import Header from '@/components/Detail/Header'
import axios from 'axios'
    export default {
        name:'Detail',
        data (){
            return {
                imgList:['','']
            }
        },
        components:{
            Banner,
            Header
        },
        methods:{
            getDetail (res) {
                
            }
        },
        mounted (){
          
        }
    }
</script>

<style scoped>
    .detail{
        height:30rem;
    }
</style>