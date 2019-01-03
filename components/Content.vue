<template>
    <div class="lv-layout-content" :style="{'width': width + 'px', 'height': height + 'px'}" :class="skin">
    </div>
</template>

<script>
export default {
    name: 'Content',
    props: ["skin"],
    data:function(){
        return {
            width: window.innerWidth - (this.$store.state.bflod ? 46:230),
            height: window.innerHeight - 50
        }
    },
    methods:{
        layChange:function(){
            if(this.$store.state.blayout < 600){
                this.width = window.innerWidth - (this.$store.state.bflod ? 0:46);
                this.height = window.innerHeight - 100;
            } else {
                this.width = window.innerWidth - (this.$store.state.bflod ? 46:230);
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