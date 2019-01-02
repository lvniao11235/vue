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
        width:100px;
        height:100px;
        background-color:#C1C0C5;
        z-index:5;
        position:relative;
        margin-left:-70px;
        margin-top:17px;
    }

    .lv-head-item-panel:before{
        display:block;
        top:0;
        right:2px;
        position:absolute;
        content:"";
        margin-top:-30px;
        border-top:15px solid transparent;
        border-left:10px solid transparent;
        border-right:10px solid transparent;
        border-bottom:15px solid #C1C0C5;
    }

    .lv-head-item-panel:after{
        display:block;
        top:3px;
        right:2px;
        position:absolute;
        content:"";
        margin-top:-30px;
        border-top:15px solid transparent;
        border-left:10px solid transparent;
        border-right:10px solid transparent;
        border-bottom:15px solid #C1C0C5;
    }
</style>