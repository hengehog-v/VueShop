import Vue from 'vue';
import App from './App.vue';
import store from '../store/index'
import router from '../router/router'

new Vue({
    router,
    el: 'div',
    template: '<App />',
    components: {
        App
    },
    store
})