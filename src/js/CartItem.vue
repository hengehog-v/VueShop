<template>
    <div>
        <div :class="[$style.product_item_buy]">
            <button @click="dellItem(id)" :class="[$style.dell]">X</button>
            <img :src="productImage" alt="product" :class="[$style.product_image]" width="40" height="36">
            <span :class="[$style.product_name]">{{productName}}</span>
            <button @click="addItemOnCart(id)" :class="[$style.plus]">+</button>
            <button @click="dec" :class="[$style.mines]">-</button>
            <span>{{count}}</span>
            <span :class="[$style.price]">{{productPrice}}</span>
        </div>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default {
    props: {
        id: Number,
    },

    methods: {
        ...mapActions('goods', [
            'dellItem',
            'addItemOnCart',
            'decCount'
        ]),

        dec() {
            if (this.count === 1) {
                this.dellItem(this.id)
            } else this.decCount(this.id)
        }
    },

    computed: {
        ...mapGetters('goods', [
            'getData'
        ]),

        dataGoods() {
            return {...this.getData[this.id]};
        },

        productImage() {
            return this.dataGoods.image;
        },

        productName() {
            return this.dataGoods.name;
        },

        productPrice() {
            return +this.dataGoods.price;
        },

        count() {
            return this.dataGoods.count
        }
    },
}
</script>

<style lang="less" module>
    .product_item_buy {
        display: grid;
        grid-template-columns: 0.3fr 0.4fr 1fr 0.3fr 0.3fr 0.3fr 50px;
        grid-template-row: repeat(auto, 110px);
        grid-gap: 10px;
        border: 1px solid black;
        padding: 5px;
    }
</style>