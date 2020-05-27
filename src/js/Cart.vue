<template>
    <div>
        <div :class="[$style.product_item_buy]">
            <button v-on:click="dellItem" :class="[$style.dell]">X</button>
            <img v-bind:src="item.productImage" alt="product" :class="[$style.product_image]" width="40" height="36">
            <span :class="[$style.product_name]">{{item.productName}}</span>
            <button v-on:click="plusRender" :class="[$style.plus]">+</button>
            <button v-on:click="minusRender" :class="[$style.mines]">-</button>
            <span>{{item.count}}</span>
            <span :class="[$style.price]">{{item.productPrice}}</span>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: Object,
    },

    methods: {
        plusRender(){
            this.$emit('sumChange', this.item, '+');
        },

        minusRender() {
            this.$emit('sumChange', this.item, '-');
        },

        dellItem(){
            this.$emit('dellItem', this.item);
        }
    },
}
</script>

<style lang="less" module>
    .product_item_buy {
        display: grid;
        grid-template-columns: 0.3fr 0.4fr 1fr 0.3fr 0.3fr 0.3fr 50px;
        grid-gap: 10px;
        border: 1px solid black;
        padding: 5px;
    }
</style>