class Cart extends ListItem {
    constructor(){
        super();
        this._cost = 0;
    }

    removeProduct(){

    }

    add(buy){
        const items = cart.getList().filter(e => e.id === buy.id);
        if (items.length > 0){
            items[0].incCount();
        }else{
        this.addItemInList(buy);
        }
        this.incCost(buy.getPrice());
    }
    dell(buy){
        this.decCost(Number(buy.getPrice()) * buy.count);
        this.dellItemOfList(buy.id);
    }
    incCost(price){
        this._cost+= Number(price);
    }
    decCost(price){
        this._cost-= Number(price);
    }
    renderCart(){
        document.querySelector('main').innerHTML = `<p>${'Sum: ' + this._cost}</p>`;
        this._list.forEach(item => {
            let container = document.createElement('div');
            container.className = 'product-item-buy';
            container.innerHTML = `
                <button id = "${'Dell'+ item.id}">X</button>
                <img src="${item.getImage()}" alt="product" class="product-image" width="40" height="36">
                <span class="product-name">${item.getName()}</span>
                <button id = "${'Plus' + item.id}" >+</button>
                <button id = "${'Mines' + item.id}" >-</button>
                <span>${item.count}</span>
                <span class="price">${item.getPrice()}</span>`;
            document.querySelector('main').appendChild(container);
            document.getElementById('Plus' + item.id).addEventListener('click', () => {item.incCount(); this.incCost(item._product.price); this.renderCart()})
            document.getElementById('Mines' + item.id).addEventListener('click', () => {
                if (item.count == 1) {
                    this.dell(item);
                }else {
                    item.decCount()
                    this.decCost(item.getPrice());
                }
                this.renderCart();}
            )
            document.getElementById('Dell' + item.id).addEventListener('click', () => {this.dell(item); this.renderCart();})
        })
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