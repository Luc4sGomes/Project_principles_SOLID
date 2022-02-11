import { ShoppingCart } from './shopping-cart';

const car1 = new ShoppingCart();
car1.addItem({ name: 'T-shirt', price: 59.99 });
car1.addItem({ name: 'Notebook', price: 399.99 });
car1.addItem({ name: 'Candle', price: 9.99 });

console.log(car1.items);
console.log(car1.total());
console.log(car1.orderStatus);
