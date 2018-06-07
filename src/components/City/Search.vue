<template>
    <div>
        <div class="search">
            <input class="search-input" type="text" placeholder="输入城市名或拼音"> 
                 
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>
    .search{
        height:0.72rem;
        padding:0 0.1rem;
        background:#00bcd4;

    }
    .search-input{
      box-sizing: border-box;
      width: 100%;
      height: .62rem;
      padding: 0 .1rem;
      line-height: .62rem;
      text-align: center;
      border-radius: .1rem;
      color: #666;
    }
</style>