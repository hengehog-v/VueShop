<template>
    <div :class="[$style.product_item]">
        <img :src="productImage" alt="product" :class="[$style.product_image]" width="200" height="180">
        <span :class="[$style.product_name]">{{productName}}</span>
        <span :class="[$style.price]">{{productPrice}}</span>
        <button @click="addItem" :class="[$style.button]">Добавить</button>
    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex';

export default {
    props: {
        id: Number,
    },

    methods: {
        ...mapActions('goods', [
            'addItemOnCart',
            'incCount'
        ]), 

        addItem(){
            if (this.dataGoods.count) {
                this.incCount(this.id)
            } else this.addItemOnCart(this.id)
        }
    },

    computed: {
        ...mapGetters('goods', [
            'getData'
        ]),

        dataGoods() {
        return  this.getData[this.id];
        },

        productImage() {
        return this.dataGoods.image;
        },

        productName() {
            return this.dataGoods.name;
        },

        productPrice() {
            return this.dataGoods.price;
        }
    },
}
</script>

<style lang="less" module>
    @color_white: #fff;
    @color_black: #000;

    .product_item {
        display: flex;
        flex-direction: column;
        align-items: center;
        box-shadow: 0px 0px 10px @color_black;
        border-radius: 20px;
        padding: 10px;
        font-size: 20px;
        & .product_image {
            margin: 5px;
        }
        & .product_name {
            text-align: center;
        }
        & .price {
            margin: 10px;
        }
        & .button {
            background: linear-gradient(90deg, rgb(11,11,11,1) 0%, rgb(85, 85, 85) 42%, rgb(134, 134, 134) 76%);
            color: @color_white;
            padding: 15px;
            border-radius: 25px;
            font-size: 15px;
            border: none;
            outline: none;
        }
        & .button:hover {
            box-shadow: 0px 0px 5px @color_black; 
        }
    }
</style>