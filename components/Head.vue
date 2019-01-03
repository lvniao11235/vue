<template>
    <div class="lv-layout-head" :style="{'height': height + 'px'}" :class="skin">
        <div class="lv-logo" :style="{'width': logoWidth + 'px'}" :class="skin">
            <span v-if="bflod">LVAdmin</span> <span v-else>LV</span>
        </div>
        <div class="lv-function" :style="{'width': functionWidth + 'px', 'top': functionTop + 'px'}" :class="skin">
            <div class="lv-btn-fold fa fa-th-list" @click="foldLayout"></div>
            <HeadItem>
                <span slot="text" class="fa fa-cog"></span>
                <div slot="panel">
                1
                </div>
            </HeadItem>
            <HeadItem>
                <span slot="text" class="fa fa-user-circle"></span>
                <div slot="panel">
                2
                </div>
            </HeadItem>
            <HeadItem>
                <span slot="text" class="fa fa-info-circle"></span>
                <div slot="panel">
                3
                </div>
            </HeadItem>
            <HeadItem>
                <span slot="text" class="fa fa-th"></span>
                <div slot="panel">
                3
                </div>
            </HeadItem>
        </div>
    </div>
</template>

<script>
import HeadItem from './HeadItem';

export default {
    name: 'Head',
    props: ["skin"],
    data:function(){
        return{
            logoWidth: 230,
            functionWidth: document.body.clientWidth - 230,
            functionTop: 0,
            height:50
        }
    },
    components:{
        HeadItem
    },
    methods:{
        foldLayout:function(){
            this.$store.commit("foldChange");
        },
        layChange:function(){
            if(this.$store.state.blayout < 600){
                this.logoWidth = window.innerWidth;
                this.functionWidth = window.innerWidth;
                this.functionTop = 50;
                this.height = 100;
            } else {
                this.logoWidth = this.$store.state.bflod ? 46:230;
                this.functionWidth = window.innerWidth - this.logoWidth;
                this.functionTop = 0;
                this.height = 50;
            } 
        }
    },
    computed:{
        blayout(){ return this.$store.state.blayout; },
        bflod(){ return !this.$store.state.bflod; }
    },
    created(){
        this.layChange();
    },
    watch:{
        blayout: function(){
            this.layChange();
        },
        bflod: function(){
            this.layChange();
        }
    }
}
</script>

<style>
    .lv-logo, .lv-function{
        display:inline-block;
    }

    .lv-logo{
        width:230px;
        height:50px;
        line-height:50px;
        vertical-align:middle;
        text-align:center;
        position:absolute;
        left:0px;
        top:0px;
    }

    .lv-function{
        width:calc(100% - 230px);
        line-height:50px;
        vertical-align:middle;
        position:absolute;
        right:0px;
        top:0px;
    }

    .lv-head-item{
        float:right;
        width:40px;
        text-align:center;
    }

    .lv-head-item .lv-head-item-text,
    .lv-btn-fold,
    .lv-layout-head .lv-logo
    {
        font-size:25px;
        color:white;
    }

    .lv-layout-head .lv-logo{
        font-weight:bolder;
    }

    .lv-btn-fold{
        width:40px;
        text-align:center;
        line-height:50px;
        vertical-align:middle;
    }
</style>