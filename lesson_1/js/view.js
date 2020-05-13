class View {
    constructor(place, cart){
        this._place = place;
        this._cart = cart
    }

    render(item) {
        let container = document.createElement('div');
        container.className = 'product-item';
        container.innerHTML = `
            <img src="${item._product.image}" alt="product" class="product-image" width="200" height="180">
            <span class="product-name">${item._product.name}</span>
            <span class="price">${item._product.price}</span>
            <button id = "${item.id}" class="button">Добавить</button>`;
        this._place.appendChild(container);
        document.getElementById(item.id.toString()).addEventListener('click', item.addItemCart(this._cart))
    }
};