<template>
    <div>
        <div :class="[$style.form]">
            <input type="file" ref="image" @change="file"/>
            <input type="text" v-model="name" placeholder="Name"/>
            <input type="text" v-model="price" placeholder="Price"/>
            <button @click="onClick">Ckick</button>
        </div>
        <div :class="[$style.itemList]">
            <ItemList v-for="id in getItemsOnPage" 
                :key="id"
                :id="+id" />
        </div>
    </div>
</template>

<script>
import ItemList from './ItemList.vue'
import {mapGetters, mapActions} from 'vuex';

export default {
    data(){
        return {
            image: '',
            name: '',
            price: ''
        }
    },

    components: {
        ItemList
    },

    computed: {
        ...mapGetters('goods', [
            'getItemsOnPage'
        ])
    },

    methods: {
        ...mapActions('goods', [
            'addItem'
        ]),

        onClick(){
            const formData = new FormData();
            formData.append("image", this.image)
            formData.append("name", this.name)
            formData.append("price", this.price)
            this.addItem(formData)
        },

        file() {
            console.log(this.$refs.image)
            if(this.$refs.image)
                this.image = this.$refs.image.files[0]
        },
}

}
</script>

<style lang="less" module>
    .form {
        display: flex;
        flex-direction: column;
        justify-content: start;
        max-width: 300px;
        & input, button{
            margin: 10px
        }
    }
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