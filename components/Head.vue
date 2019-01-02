<template>
    <div class="lv-layout-head" :class="skin">
        <div class="lv-logo" :class="skin">2</div>
        <div class="lv-function" :class="skin">
            <HeadItem>
                <span slot="text">1</span>
                <div slot="panel">
                1
                </div>
            </HeadItem>
            <HeadItem>
                <span slot="text">2</span>
                <div slot="panel">
                2
                </div>
            </HeadItem>
            <HeadItem>
                <span slot="text">3</span>
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
    components:{
        HeadItem
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
    }

    .lv-function{
        width:calc(100% - 230px);
        line-height:50px;
        vertical-align:middle;
    }

    .lv-head-item{
        float:right;
        width:40px;
        background-color:red;
        text-align:center;
    }
</style>