<template>
    <div class="lv-menu-item">
        <div class="lv-menu-title" :class="{'selected':selected}" 
        @click="selectedMenu" @mouseover="showTitle" @mouseout="hideTitle">
            <input type="hidden" v-model="item.id"/>
            <span class="lv-menu-highlight"></span>
            <span class="lv-menu-icon fa fa-cog"></span>
            <span class="lv-menu-text" v-show="bflod">{{item.name}}</span>
        </div>
        <div class="lv-menu-content">
            
        </div>
    </div>
</template>

<script>
    export default {
        name:"MenuItem",
        props: ['item'],
        data:function(){
            return{
                show:false,
            }
        }
        methods:{
            selectedMenu(){
                this.$store.commit("selectedMenuChange", this.item.id);
            },
            showPanel(){
                if(this.bfload()){
                    this.show = true;
                }
                
            },
            hidePanel(){
                this.show = false;
            }
        },
        computed:{
            selected(){
                return this.$store.state.selectedMenu == this.item.id;
            },
            bflod(){
                return !this.$store.state.bflod;
            }
        }
    }
</script>

<style>
    .lv-menu-item{
        width:100%;
    }

    .lv-menu-title{
        width:100%;
        font-size:30px;
        color:white;
        height:40px;
        
    }

    .lv-menu-title .lv-menu-highlight,
    .lv-menu-title .lv-menu-icon, 
    .lv-menu-title .lv-menu-text{
        display:inline-block;
        height:40px;
        line-height:40px;
        vertical-align:middle;
    }

    .lv-menu-title .lv-menu-highlight{
        width:3px;
        height:40px;
    }

    .skin-blue .lv-menu-title.selected .lv-menu-highlight{
        background-color:#3c8dbc;
    }

    .lv-menu-title .lv-menu-icon{
        width:40px;
        text-align:center;
    }

    .lv-menu-title .lv-menu-text{
        width:calc(100% - 40px -3px);
        text-align:left;
    }
    
    
</style>