<template>
    <div class="lv-menu-item" ref="item" :class="{'selected':selected, 'lv-submenu-item':!top, 'lv-topmenu-item':top}">
        <div class="lv-menu-title" ref="title" @click="selectedItem">
            <input type="hidden" v-model="item.id"/>
            <span class="lv-menu-highlight"></span>
            <span class="lv-menu-icon " :class="item.clazz">
            </span>
            <span class="lv-menu-text">{{item.name}}</span>
            <span ref="collapse" class="lv-menu-collapse fa fa-angle-down"
                v-show="item.submenu && item.submenu.length > 0"></span>
        </div>
        <div class="lv-menu-content">
            <MenuItem v-for="sub in item.submenu" :top="isTop" :key="sub.id" :item="sub">
            </MenuItem>
        </div>
    </div>
</template>

<script>

    import MenuItem from './MenuItem';

    export default {
        name:"MenuItem",
        props: ['item', 'top'],
        components:{MenuItem},
        data:function(){
            return {
                isTop:false,
            };
        },
        methods:{
            selectedItem:function(){
                if(this.$refs.collapse.classList.contains("fa-angle-up")){
                    this.$refs.collapse.classList.add("fa-angle-down");
                    this.$refs.collapse.classList.remove("fa-angle-up");
                } else if(this.top){
                    this.$store.commit("selectedMenuChange", 
                        this.$store.state.selectedMenu == this.item.id ? -1:this.item.id);
                    var elems = document.querySelectorAll(".lv-menu-collapse");
                    if(elems.length > 0){
                        elems.forEach(function(e){
                            e.classList.remove("fa-angle-up");
                            e.classList.add("fa-angle-down");
                        })
                    }
                    this.$refs.collapse.classList.add("fa-angle-up");
                    this.$refs.collapse.classList.remove("fa-angle-down");
                } else if(this.item.submenu && this.item.submenu.length > 0){
                    var elems = document.querySelectorAll(".lv-submenu-item .lv-menu-collapse");
                    if(elems.length > 0){
                        elems.forEach(function(e){
                            e.classList.remove("fa-angle-up");
                            e.classList.add("fa-angle-down");
                        })
                    }
                    this.$refs.collapse.classList.add("fa-angle-up");
                    this.$refs.collapse.classList.remove("fa-angle-down");
                }
                
            },
        },
        computed:{
            selected(){
                return this.$store.state.selectedMenu == this.item.id;
            }
        }
    }
</script>

<style>
    .lv-menu > .lv-menu-item > .lv-menu-title {
        font-size:30px;
        color:white;
        height:40px;
        width:100%;
        line-height:40px;
        vertical-align:middle;
    }

    .lv-menu > .lv-menu-item > .lv-menu-title:hover{
        background-color:red !important;
    }
    
    .lv-menu > .lv-menu-item > .lv-menu-title > .lv-menu-highlight, 
    .lv-menu > .lv-menu-item > .lv-menu-title > .lv-menu-icon, 
    .lv-menu > .lv-menu-item > .lv-menu-title > .lv-menu-text,
    .lv-menu > .lv-menu-item > .lv-menu-title > .lv-menu-collapse{
        display:inline-block;
        height:40px;
    }

    .lv-menu > .lv-menu-item > .lv-menu-title > .lv-menu-highlight{
        width:3px;
        float:left;
    }

    .lv-menu > .lv-menu-item > .lv-menu-title > .lv-menu-icon{
        width:40px;
        float:left;
        line-height:40px;
        vertical-align:middle;
        text-align:center;
    }

    .lv-menu > .lv-menu-item > .lv-menu-title > .lv-menu-collapse{
        width:40px;
        float:right;
        line-height:40px;
        vertical-align:middle;
        text-align:center;
    }

    .lv-submenu-item{
        margin-left:23px;
        font-size:20px;
        color:white;
        background-color:white !important;
    }

    

    .lv-submenu-item .lv-menu-collapse{
        line-height:20px !important;
        width:20px;
        height:20px;
        float:right;
        margin-right:10px;
        line-height:40px;
        vertical-align:middle;
        text-align:center;
    }

</style>