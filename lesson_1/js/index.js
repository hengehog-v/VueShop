let cart = new Cart();
let listItem = new ListItem();
listItem.fetchList();

document.getElementsByClassName('box-buy')[0].addEventListener('click', cart.renderCart.bind(cart));
document.getElementsByClassName('logo')[0].addEventListener('click', listItem.render.bind(listItem));