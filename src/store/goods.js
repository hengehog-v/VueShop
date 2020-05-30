const state = {
    data: {},
    itemsOnPage: [],
    itemsOnCart: [],
    sum: 0
}

const getters = {
    getData: state => state.data,
    getItemsOnPage: state => state.itemsOnPage,
    getItemsOnCart: state => state.itemsOnCart,
    getSum: state => state.sum
}

const actions = {
    requestData({commit}){
        fetch('/database/data.json')
        .then(res => res.json())
        .then(res => commit('setDate', res))
    },

    addItemOnCart({commit}, id) {
       commit('itemCartListChange', id)
       commit('sumBuyChange')
    },

    dellItem({commit}, id) {
        commit('dellItemCartList', id)
        commit('sumBuyChange')
    },

    incCount({commit}, id) {
        commit('plusRender', id)
        commit('sumBuyChange')
    },

    decCount({commit}, id) {
        commit('minusRender', id)
        commit('sumBuyChange')
    }
}

const mutations = {
    setDate(state, newData) {
        state.data = newData;
        state.itemsOnPage = Object.keys(newData);
    },

    sumBuyChange(state){
        state.sum = state.itemsOnCart.reduce((sum, id) => state.data[id].productPrice * state.data[id].count + sum, 0);
    },

    itemCartListChange(state, id) {
        if(!state.itemsOnCart.filter(itemCartId => id === itemCartId)[0]){
            state.data[id].count = 1;
            state.itemsOnCart.push(id);
        } else {
            state.data[id].count++;
        }
        state.data.id = {...state.data.id};
    },

    dellItemCartList(state, id) {
        state.itemsOnCart = state.itemsOnCart.filter(itemCartId => id !== itemCartId);
    },

    plusRender(state, id) {
        state.data[id].count++;
        state.data.id = {...state.data.id};
    },

    minusRender(state, id) {
        if(!(state.data[id].count === 1)) {
            state.data[id].count--;
            state.data.id = {...state.data.id};
        } else mutations.dellItemCartList(state, id);
    }
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}