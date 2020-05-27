import ListItem from './listItem'
import CartItem from './cartItem'

export default class Cart extends ListItem {
    constructor(){
        super();
        this._cost = 0;
    }

    get cost(){
        return this._cost = this.list.reduce((sum, item) => Number(item.price) * item.count + sum, 0);
    }

    fetchList() {
        return Promise.resolve();
    }

    add(tmp, id){
        const productBuy = new CartItem(tmp, id);
        const existedItem = this.list.filter(e => e.id === id)[0];
        if (existedItem){
            return existedItem.incCount();
        }else {
            this.addItemInList(productBuy);
        }
    }

    dellRender(item){
        return this.dellItemOfList(item.id)
            .then(() => this.renderCart())
    } 

    minusRender(item) {
        if (item.count === 1) {
            return this.dellRender(item);
        }
        return item.decCount()
            .then(() => {this.renderCart()})
    }

    plusRender(item){
        return item.incCount()
            .then(() => {this.renderCart()}) 
    }

    renderCart(){
        return new Promise((res, rej) => {
            const main = document.querySelector('main');
            main.innerHTML = `<p>${'Sum: ' + this.cost}</p>`;
            this.list.forEach(item => {
                let container = document.createElement('div');
                container.className = 'product-item-buy';
                container.innerHTML = `
                    <button class = "Dell">X</button>
                    <img src="${item.image}" alt="product" class="product-image" width="40" height="36">
                    <span class="product-name">${item.name}</span>
                    <button class = "Plus">+</button>
                    <button class = "Mines">-</button>
                    <span>${item.count}</span>
                    <span class="price">${item.price}</span>`;
                main.appendChild(container);
                const buttonPlus = container.querySelector('.Plus');
                const buttonMines = container.querySelector('.Mines');
                const buttonDell = container.querySelector('.Dell');
                buttonPlus.addEventListener('click', () => {this.plusRender(item)})
                buttonMines.addEventListener('click', () => {this.minusRender(item)})
                buttonDell.addEventListener('click', () => {this.dellRender(item)})
            })
        }).then(() => console.log('?')) 
    }
}