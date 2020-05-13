let main = document.querySelector('main');
let cart = new Cart();
let view = new View(main,cart);
let listItem = new ListItem();


for (let i = 0; i < product.length; i++){
    let item = new Item(product[i],i);
    listItem.addItemInList(item);
    view.render(item);
}
const render = ()=>{
    view._place.innerHTML = ''
    for(let i = 0; i < listItem.getList().length; i++){
        view.render(listItem.getList()[i]);
    }
}

document.getElementsByClassName('box-buy')[0].addEventListener('click', cart.renderCart.bind(cart));
document.getElementsByClassName('logo')[0].addEventListener('click', render);
console.log(listItem.getList());