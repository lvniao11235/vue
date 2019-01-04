<template>
    <div class="lv-menu-item" :style="{'width':titleWidth, 'height':itemHeight}"
        :class="{'selected':selected, 'lv-flod':bflod, 'lv-show':show}"
        @mouseover="showTitle" @mouseout="hideTitle">
        <div class="lv-menu-title" 
            :class="{'selected':selected, 'lv-flod':bflod, 'lv-show':show}" 
            :style="{'width':titleWidth}"
            @click="selectedMenu"  >
            <input type="hidden" v-model="item.id"/>
            <span class="lv-menu-highlight"></span>
            <span class="lv-menu-icon " :class="item.clazz" 
                >
            </span>
            <span class="lv-menu-text">{{item.name}}</span>
        </div>
        <div class="lv-menu-content">
            <SubMenu :menu="item.submenu"></SubMenu>
        </div>
    </div>
</template>

<script>

    import SubMenu from './SubMenu';

    export default {
        name:"MenuItem",
        props: ['item'],
        components:{SubMenu},
        data:function(){
            return{
                show:false,
            }
        },
        methods:{
            selectedMenu(){
                if(this.$store.state.selectedMenu == this.item.id){
                    this.$store.commit("selectedMenuChange", -1);
                } else {
                    this.$store.commit("selectedMenuChange", this.item.id);
                }
            },
            showTitle(){
                this.show = true;
            },
            hideTitle(){
                this.show = false;
            }
        },
        computed:{
            selected(){
                return this.$store.state.selectedMenu == this.item.id;
            },
            bflod(){
                return this.$store.state.bflod;
            },
            titleWidth(){
                if(this.$store.state.bflod && 
                    (this.show || this.$store.state.selectedMenu == this.item.id)){
                    return "120px";
                } else if(this.$store.state.bflod){
                    return "46px";
                } else {
                    return "100%";
                }
            },
            itemHeight(){
                if(this.$store.state.bflod){
                    return "40px";
                } else {
                    return "auto";
                }
            }
        }
    }
</script>

<style>
    .lv-menu-item.lv-flod > .lv-menu-content{
        display:none;
    }

    .lv-menu-title{
        height:40px;
        line-height:40px;
        vertical-align:middle;
        font-size:25px;
        color:white;
    }

    .lv-menu-highlight, .lv-menu-icon, .lv-menu-text{
        display:inline-block;
    }

    .lv-menu-highlight{
        height:40px;
        width:3px;
        float:left;
    }

    .lv-menu-icon{
        width:40px;
        text-align:center;
    }
    
</style>