<template>
    <div>
        <div :class="[$style.sum]">
            <span>Sum: {{sum}}</span>
        </div>
        <div :class="[$style.cartList]">
            <CartItem v-for="id in getItemsOnCart" 
                :key="id"
                :id="+id" />
        </div>
    </div>
</template>

<script>
import CartItem from './CartItem.vue'
import {mapGetters} from 'vuex'

export default {
    components: {
        CartItem
    },

    computed: {
        ...mapGetters('goods', [
            'getSum',
            'getItemsOnCart'
        ]),

        sum() {
            return this.getSum;
        }
    },
}
</script>

<style lang="less" module>
    .cartList {
        display: grid;
        grid-template-rows: repeat(3, 1fr);
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 45px;
        box-sizing: border-box;
        padding: 50px;
        flex-grow: 1;
    }  

    .sum {
        margin: 20px;
        font-size: 20px;
    }
</style>