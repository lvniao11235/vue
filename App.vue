<template>
  <div id="app" class="lv-layout">
    <div class="lv-layout-head" :class="skin">
    </div>
    <div class="lv-layout-side" :class="skin">
    </div>
    <div class="lv-layout-content" :class="skin">
    </div>
  </div>
</template>

<script>

export default {
  name: 'app',
  data:function(){
    return {
    };
  },
  computed:{
    skin:{
      get:function(){ 
        return this.$store.state.skin; 
      },
      set:function(newskin){
        this.$store.commit("updateSkin", newskin);
      }
    }
  }
}
</script>

<style>
  *{
    margin:0px;
    padding:0px;
  }

  html, body, .lv-layout{
    position:relative;
    width:100%;
    height:100%;
  }

  .lv-layout-head{
    width:100%;
    height:50px;
  }

  .lv-layout-side, .lv-layout-content{
    display:inline-block;
    height:calc(100% - 50px);
  }

  .lv-layout-side{
    width:230px;
  }

  .lv-layout-content{
    width:calc(100% - 230px);
  }
</style>
