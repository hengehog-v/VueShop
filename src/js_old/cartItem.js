import Item from './item';

export default class CartItem extends Item{
    constructor(product, id) {
        super(product, id);
        this.count = 1; 
    }
    
    incCount(){
        return new Promise((res, rej) => {
            this.count++;
            res()
        });
    }

    decCount(){
        return new Promise((res, rej) => {
            this.count--;
            res()
        });
    }
}