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
import "font-awesome/css/font-awesome.min.css";
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
  },
  created(){
    this.$store.commit("layoutChange", document.body.clientWidth);
  },
  mounted(){
    var _this = this;
    window.onresize = function(){
      _this.$store.commit("layoutChange", document.body.clientWidth);
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
  
  .lv-layout-side{
    float:left;
  }

  .lv-layout-content{
    float:right;
  }

  .lv-layout-side, .lv-layout-content, .lv-layout-head{
    font-size:14px;
    z-index:3;
  }

  .lv-layout-head.skin-blue{
    background-color:#3c8dbc;
  }

  .lv-logo.skin-blue{
    background-color:#367fa9;
  }

  .lv-layout-side.skin-blue{
    background-color:#222d32;
  }

</style>