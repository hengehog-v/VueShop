<template>
    <div :class="[$style.itemList]">
        <ItemList v-for="id in getItemsOnPage" 
            :key="id"
            :id="+id" />
    </div>
</template>

<script>
import ItemList from './ItemList.vue'
import {mapGetters} from 'vuex';

export default {
    components: {
        ItemList
    },

    computed: {
        ...mapGetters('goods', [
            'getItemsOnPage'
        ])
    },
}
</script>

<style lang="less" module>
    .itemList {
        display: grid;
        grid-template-rows: repeat(auto, 1fr);
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 45px;
        box-sizing: border-box;
        padding: 50px;
        flex-grow: 1;
    }
</style>