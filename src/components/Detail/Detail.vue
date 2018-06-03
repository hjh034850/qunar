<template>
    <div class="detail">
        <Banner></Banner>
        <Header></Header>
    </div>
</template>

<script>
import Banner from '@/components/Detail/Banner'
import Header from '@/components/Detail/Header'
    export default {
        name:'Detail',
        components:{
            Banner,
            Header
        }
    }
</script>

<style scoped>
    .detail{
        height:30rem;
    }
</style>