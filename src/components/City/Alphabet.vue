<template>
    <ul class="list">
        <li class="item" v-for="(item,key) in cities" @click = "letterChange">{{key}}</li>
       
    
    
    </ul>
</template>

<script>
    export default {
        name:'Alphabet',
        props:{cities:Object},
        methods:{
            letterChange (e){
                this.$emit('change',e.target.innerText)
            }
        }
    }
</script>

<style scoped>
    .list{
        position:absolute;
        right:0;
        top:1.58rem;
        bottom:0;
        width:0.4rem;
        display:flex;
        flex-direction:column;
        justify-content:center;
    }
    .item{
        line-height:0.32rem;
        text-align:center;
        color:#00bcd4;
    }
</style>