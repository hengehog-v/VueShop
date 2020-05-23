import Item from './item';

export default class ListItem {
    constructor(){
        this._list = [];
        this.fetchList();
    }

    get list() {
        return this._list;
    }

    render() {
        return new Promise((res, rej) => {
            const main = document.querySelector('main');
            main.innerHTML = ``;
            this._list.forEach(item => {
                let container = document.createElement('div');
                container.className = 'product-item';
                container.innerHTML = `
                    <img src="${item._product.image}" alt="product" class="product-image" width="200" height="180">
                    <span class="product-name">${item._product.name}</span>
                    <span class="price">${item._product.price}</span>
                    <button class = "addCart button">Добавить</button>`;
                main.appendChild(container);
                const addCart = container.querySelector('.addCart');
                addCart.addEventListener('click', item.addItemCart.bind(item));
            })
            res();
        }).then(() => console.log('?'))
    }

    fetchList(){
        fetch('database/data.json')
        .then(res => {
            return res.json()})
        .then(res => {
            for (let i = 0; i < res.product.length; i++){
                    let item = new Item(res.product[i],i);
                    this.addItemInList(item);
            } 
            return this;
        }).then((list) => list.render())     
    }

    addItemInList(item) {
        this._list.push(item);
    }

    dellItemOfList(id){
        return new Promise((res, rej) => {
            this._list = this._list.filter(item => item.id !== id);
            res();
        })
    }
}