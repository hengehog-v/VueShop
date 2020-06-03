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
        fetch('/Item')
        .then(res => res.json())
        .then(res => commit('setData', res))
        commit('sumBuyChange')
    },

    addItem({commit}, formData){
        fetch('/Item', {
            method: 'POST',
            body: formData, 
        })
        .then(res => res.json())
        .then(res => commit('setData', res))
    },

    addItemOnCart({commit}, id) {
        let formData = new FormData()
        formData.append('id', id) 
        fetch('/CartItemAdd', {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(res => commit('setData', res))
        .then(res => commit('sumBuyChange'))
    },

    dellItem({commit}, id) {
        const formData = new FormData()
        formData.append('id', id) 
        fetch('/CartItemDell', {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(res => commit('setData', res))
        .then(res => commit('sumBuyChange'))
    },

    incCount({commit}, id) {
        const formData = new FormData()
        formData.append('id', id) 
        fetch('/CartItemIncCount', {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(res => commit('setData', res))
        .then(res => commit('sumBuyChange'))
    },

    decCount({commit}, id) {
        const formData = new FormData()
        formData.append('id', id) 
        fetch('/CartItemDecCount', {
            method: 'POST',
            body: formData,
        })
        .then(res => res.json())
        .then(res => commit('setData', res))
        .then(res => commit('sumBuyChange'))
    }
}

const mutations = {
    setData(state, newData) {
        state.data = newData;
        state.itemsOnPage = Object.keys(newData);
        state.itemsOnCart = state.itemsOnPage.filter(item => state.data[item].count)
    },

    sumBuyChange(state){
        state.sum = state.itemsOnCart.reduce((sum, id) => state.data[id].price * state.data[id].count + sum, 0);
    },
}


export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}