<template>
    <div class="lv-layout-side" :style="{'width': width + 'px', 'height': height + 'px'}" :class="skin">
        <Menu></Menu>
    </div>
</template>

<script>

import Menu from "./Menu";

export default {
    name: 'Side',
    props: ["skin"],
    components:{
        Menu,
    },
    data:function(){
        return {
            width: 230,
            height: window.innerHeight - 50
        }
    },
    methods:{
        layChange:function(){
            if(this.$store.state.blayout < 600){
                this.width = this.$store.state.bflod ? 0:46;
                this.height = window.innerHeight - 100;
            } else {
                this.width = this.$store.state.bflod ? 46:230;
                this.height = window.innerHeight - 50;
            } 
        }
    },
    computed:{
        blayout(){ return this.$store.state.blayout; },
        bflod(){ return this.$store.state.bflod; }
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