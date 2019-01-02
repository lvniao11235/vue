<template>
  <div id="app" class="lv-layout">
    <Head :skin="skin">
    </Head>
    <Side :skin="skin">
    </Side>
    <Content :skin="skin">
    </Content>
  </div>
</template>

<script>
import Head from './components/Head';
import Side from './components/Side';
import Content from './components/Content';

export default {
  name: 'app',
  data:function(){
    return {
    };
  },
  components:{
    Head, Side, Content
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

  .lv-layout{
    font-size:0px;
  }

  html, body, .lv-layout{
    position:relative;
    width:100%;
    height:100%;
  }
  .lv-layout-head{
    width:100%;
    height:50px;
    background-color:red;
  }
  .lv-layout-side, .lv-layout-content{
    display:inline-block;
    height:calc(100% - 50px);
  }

  .lv-layout-side, .lv-layout-content, .lv-layout-head{
    font-size:14px;
    z-index:3;
  }

  .lv-layout-side{
    width:230px;
    background-color:green;
  }

  .lv-layout-content{
    width:calc(100% - 230px);
    background-color:blue;
  }

  .lv-layout-head.skin-blue{
    background-color:#3c8dbc;
  }

  .lv-logo.skin-blue{
    background-color:#367fa9;
  }

</style>