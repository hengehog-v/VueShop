import {cart} from './index'

export default class Item {
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
