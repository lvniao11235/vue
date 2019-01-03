import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    strict:true,
    state:{
        skin: "skin-blue",
        colors:['red', 'green', 'blue'],
        bflod: false,
        blayout: window.innerWidth,
        url: 'https://localhost:44367/',
        selectedMenu:-1,
    },
    mutations:{
        updateSkin(currentState, newskin){
            var reg = /^skin-/;
            if(reg.test(newskin)){
                var color = newskin.substr(newskin.indexOf('-')+1);
                if(this.$store.state.colors.indexOf(color) > -1){
                    currentState.skin = newskin;
                }
            }
        },
        foldChange(currentState){
            currentState.bflod = !currentState.bflod;
        },
        layoutChange(currentState, newlayout){
            currentState.blayout = newlayout;
        },
        selectedMenuChange(currentState, newvalue){
            currentState.selectedMenu = newvalue;
        }
    }
});