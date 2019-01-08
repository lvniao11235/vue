<template>
    <div class="lv-menu-item" :class="{selected}">
        <div class="lv-menu-title" @click="selectedItem">
            <input type="hidden" v-model="item.id"/>
            <span class="lv-menu-highlight"></span>
            <span class="lv-menu-icon " :class="item.clazz">
            </span>
            <span class="lv-menu-text">{{item.name}}</span>
            <span class="lv-menu-collapse fa"
                v-show="top"
                :class="collapse"
                @click="collapseClick"></span>
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
                collapsed:false
            };
        },
        methods:{
            collapseClick:function(){
                this.collapsed = !this.collapsed;
            },
            selectedItem:function(){
                this.$store.commit("selectedMenuChange", this.item.id);
            }
        },
        computed:{
            collapse(){
                return this.collapsed? "fa-angle-up":"fa-angle-down"
            },
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
</style>