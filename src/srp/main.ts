import { Order } from './order';
import { ShoppingCart } from './shopping-cart';

const car1 = new ShoppingCart();
const order = new Order(car1);
car1.addItem({ name: 'T-shirt', price: 59.99 });
car1.addItem({ name: 'Notebook', price: 399.99 });
car1.addItem({ name: 'Candle', price: 9.99 });

console.log(car1.items);
console.log(car1.total());
console.log(order.orderStatus);
