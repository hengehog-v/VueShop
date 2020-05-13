class Item {
    constructor(objectValue, id){
        this._product = {
            image: objectValue.productImage,
            name: objectValue.productName,
            price: objectValue.productPrice
        };
        this.id = id
    }

    getValues() {
        return Object.values(this._product);
    }

    getPrice(){
        return this._product.price;
    }

    getName(){
        return this._product.name;
    }

    getImage(){
        return this._product.image;
    }

    addItemCart(cart) {
        return( ()=>{
            const tmp = {
                productImage: this._product.image,
                productName: this._product.name,
                productPrice: this._product.price
            } 
            let productBuy = new CartItem(tmp, this.id);
            cart.add(productBuy);
        }
        )
    }
}

class ListItem {
    constructor(){
        this._list = [];
    }

    addItemInList(item) {
        this._list.push(item);
    }
    dellItemOfList(id){
        this._list = this._list.reduce((arr, item) => { 
            if(item.id !== id) arr.push(item);
            return arr}, [])
    }

    getList() {
        return this._list;
    }
}
