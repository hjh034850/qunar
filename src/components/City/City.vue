<template>
    <div>
        <Header></Header>
      
        <List :cities = "allCities" :hot = "hotCities" :letter = "letter"></List>
        <Alphabet :cities = "allCities" @change = "letterChange"></Alphabet>
    </div>
</template>

<script>
import reset from '@/assets/css/reset.css';
import Header from '@/components/city/Header'
import Search from '@/components/city/Search'
import List from '@/components/city/List'
import Alphabet from '@/components/city/Alphabet'
import axios from 'axios'
    export default {
        name:'City',
        components:{
            Header,
            Search,
            List,
            Alphabet
        },
        data () {
            return {
                allCities:{},
                hotCities:[],
                letter:''
            }
        },
        methods:{
            getCityInfo (){
                axios.get('../../../static/mock/city.json').then(this.handleCityInfo)
            },
            handleCityInfo (res) {
                 res = res.data;
                if(res.ret && res.data){               
                    const data = res.data;
                    this.allCities = data.cities;
                    this.hotCities = data.hotCities;
                }
            },
            letterChange (letter){
               this.letter = letter;
            }
        },
        mounted () {
            this.getCityInfo()
        }
    }
</script>

<style scoped>

</style>