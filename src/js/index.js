import Cart from './cart';
import ListItem from './listItem';
import './../css/style.less';

export const cart = new Cart();
let listItem = new ListItem();

document.getElementsByClassName('box-buy')[0].addEventListener('click', cart.renderCart.bind(cart));
document.getElementsByClassName('logo')[0].addEventListener('click', listItem.render.bind(listItem));