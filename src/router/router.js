import Vue from 'vue'
import VueRouter from 'vue-router'

import Item from '../js/Item.vue'
import Cart from '../js/Cart.vue'

Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {   path: '/',
            name: 'catalog',
            component: Item,
        },

        {   path: '/cart',
            name: 'cart',
            component: Cart,
        }
    ]
})

export default router;