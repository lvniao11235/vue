<template>
    <div class="lv-menu">
        <MenuItem v-for="item in items" :key="item.Name" :item="item">
        </MenuItem>
    </div>
</template>

<script>
    import Axios from "axios";
    import MenuItem from "./MenuItem";

    export default {
        name:"Menu",
        data:function(){
            return{
                items:{}
            }
        },
        components:{
            MenuItem
        },
        created(){
            var _this = this;
            Axios.get(this.$store.state.url + 'api/data/menus').then(function(res){
                _this.items = res.data;
            });
        }
    }
</script>

<style>
    .lv-menu{ width:100%; }
</style>