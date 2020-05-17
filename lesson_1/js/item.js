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
    constructor(renderFlag){
        this._list = [];
        // if (renderFlag){
        //     this.fetchList();
        // } можно сделать, для того чтобы наследыванный класс не вызывал каждый раз fetchList (моих знаний не хватает чтоб понять как по нормальному)
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
        fetch('js/data.json')
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
