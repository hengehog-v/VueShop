<template>
    <div :class="[$style.product_item]">
        <img :src="item.productImage" alt="product" :class="[$style.product_image]" width="200" height="180">
        <span :class="[$style.product_name]">{{item.productName}}</span>
        <span :class="[$style.price]">{{item.productPrice}}</span>
        <button v-on:click="addItemCart" :class="[$style.button]">Добавить</button>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
    },

    methods: {
        addItemCart() {
        this.$emit('addItemCart', this.item)}
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