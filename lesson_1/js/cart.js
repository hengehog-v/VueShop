class Cart extends ListItem {
    constructor(){
        super();
        this._cost = 0;
    }

    add(tmp, id){
        const productBuy = new CartItem(tmp, id);
        const existedItem = cart.list.filter(e => e.id === id)[0];
        if (existedItem){
            existedItem.incCount(productBuy);
        }else {
            this.addItemInList(productBuy);
        }
        this.incCost();
    }

    dell(item){
        return new Promise((res, req) => {
            this.dellItemOfList(item.id);
            this.incCost();
            res()
        }).then(() => this.renderCart())//?????
    }

    incCost(){
        this._cost = this.list.reduce((sum, item) => Number(item.price) * item.count + sum, 0);
    }

    minusRender(item) {
        return new Promise((res, req) => {
            if (item.count == 1) {
                this.dell(item);
            }else {
                item.decCount();
                this.incCost();
                res();
            }
        }).then(() => this.renderCart())//???
    }

    plusRender(item){
        return new Promise((res, req) => {
            item.incCount();
            this.incCost();
            res()
        }).then(() => this.renderCart()) 
    }

    renderCart(){
        return new Promise((res, req) => {
            const main = document.querySelector('main');
            main.innerHTML = `<p>${'Sum: ' + this._cost}</p>`;
            this._list.forEach(item => {
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
                buttonPlus.addEventListener('click', () => {cart.plusRender(item)})
                buttonMines.addEventListener('click', () => {cart.minusRender(item)})
                buttonDell.addEventListener('click', () => {this.dell(item)})
            })
            res();
        }).then(() => console.log('?')) 
    }
    
    

}

class CartItem extends Item{
    constructor(product, id) {
        super(product, id);
        this.count = 1; 
    }
    
    incCount(){
        this.count++;
    }

    decCount(){
        this.count--;
    }

}