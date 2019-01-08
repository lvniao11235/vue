<template>
    <div class="lv-menu" :class="skin">
        <MenuItem v-for="item in items" :key="item.id" :top="isTop" :item="item"></MenuItem>
    </div>
</template>

<script>
    //import Axios from "axios";
    import MenuItem from "./MenuItem";

    export default {
        name:"Menu",
        props: ["skin"],
        data:function(){
            return{
                isTop:true,
                items:[
                    {id:1, name: "aa", clazz:"fa fa-cog", submenu:[
                        {id:4, name: "aa1", clazz:"fa fa-cog", submenu:[
                            {id:4, name: "aa11"},
                            {id:5, name: "aa12"},
                            {id:6, name: "aa13"}
                        ]},
                        {id:5, name: "aa2", clazz:"fa fa-cog", submenu:[
                            {id:4, name: "aa21"},
                            {id:5, name: "aa22"},
                            {id:6, name: "aa23"}
                        ]},
                        {id:6, name: "aa3", clazz:"fa fa-cog", submenu:[
                            {id:4, name: "aa31"},
                            {id:5, name: "aa32"},
                            {id:6, name: "aa33"}
                        ]},
                    ]},
                    {id:2, name: "bb", clazz:"fa fa-user-circle", submenu:[
                        {id:7, name: "bb1", clazz:"fa fa-cog"},
                        {id:8, name: "bb2", clazz:"fa fa-cog"},
                        {id:9, name: "bb3", clazz:"fa fa-cog"},
                    ]},
                    {id:3, name: "cc", clazz:"fa fa-info-circle", submenu:[
                        {id:10, name: "cc1", clazz:"fa fa-cog"},
                        {id:11, name: "cc2", clazz:"fa fa-cog"},
                        {id:12, name: "cc3", clazz:"fa fa-cog"},
                    ]},
                ]
            }
        },
        components:{
            MenuItem
        },
        created(){
            //var _this = this;
            /*
            Axios.get(this.$store.state.url + 'api/data/menus').then(function(res){
                _this.items = res.data;
            });
            */
        }
    }
</script>

<style>
    .lv-menu{ width:100%; }

    
</style>