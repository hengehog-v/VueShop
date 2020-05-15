let cart = new Cart();
let listItem = new ListItem();


fetch('http://localhost:3000/js/data.json')
    .then(res => {
        return res.json()})
    .then(res => {
        for (let i = 0; i < res.product.length; i++){
                let item = new Item(res.product[i],i);
                listItem.addItemInList(item);
        }
        return listItem.render();
    })

document.getElementsByClassName('box-buy')[0].addEventListener('click', cart.renderCart.bind(cart));
document.getElementsByClassName('logo')[0].addEventListener('click', listItem.render.bind(listItem));
console.log(listItem.list);