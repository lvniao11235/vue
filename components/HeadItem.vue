<template>
    <div class="lv-head-item" @mouseover="showPanel" @mouseout="hidePanel">
    <div class="lv-head-item-text"><slot name="text"></slot></div>
    <div class="lv-head-item-panel" v-show="show"><slot name="panel"></slot></div>
    </div>
</template>

<script>
export default {
    name: 'HeadItem',
    data:function(){
        return{
            show:false
        }
    },
    methods:{
        showPanel(){
            this.show = true;
        },
        hidePanel(){
            this.show = false;
        }
    }
}
</script>

<style>
    .lv-head-item-text{
    }
    .lv-head-item-panel{
        width:200px;
        height:200px;
        background-color:#C1C0C5;
        z-index:5;
        position:relative;
        margin-left:-170px;
        margin-top:10px;
    }

    .lv-head-item-panel:before{
        display:block;
        top:0;
        right:2px;
        position:absolute;
        content:"";
        margin-top:-20px;
        border-top:10px solid transparent;
        border-left:5px solid transparent;
        border-right:5px solid transparent;
        border-bottom:10px solid #C1C0C5;
    }
</style>