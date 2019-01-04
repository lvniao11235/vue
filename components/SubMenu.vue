<template>
    <div class="lv-submenu">
        <div class="lv-submenu-item" v-for="item in menu" :key="item.Name">
            <div class="lv-submenu-title">
                <span class="lv-submenu-icon" :class="item.clazz"></span>
                <span class="lv-submenu-text">{{item.name}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'SubMenu',
        props: ['menu']
    }
</script>

<style>
    .lv-submenu{
        margin-left:18px;
        color:#8aa4af;
    }

    .lv-submenu-icon, .lv-submenu-text{
        display:inline-block;
        height:25px;
        line-height:25px;
        vertical-align:middle;
        font-size:20px;
    }

    .lv-submenu-icon{
        width:25px;
    }
</style>