class Item {
    constructor(objectValue, id){
        this._product = {
            image: objectValue.productImage,
            name: objectValue.productName,
            price: objectValue.productPrice
        };
        this.id = id;
    }

    get price(){
        return this._product.price;
    }

    get name(){
        return this._product.name;
    }

    get image(){
        return this._product.image;
    }

    addItemCart() {
        const tmp = {
            productImage: this._product.image,
            productName: this._product.name,
            productPrice: this._product.price
        } 
        cart.add(tmp, this.id);
    }
}

class ListItem {
    constructor(){
        this._list = [];
    }

    get list() {
        return this._list;
    }

    render() {
        return new Promise((res, req) => {
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
        
    addItemInList(item) {
        this._list.push(item);
    }

    dellItemOfList(id){
        this._list = this._list.filter(item => item.id !== id);
    }

 
}
