/*
Open/Closed principle
deve estar aberto para extensão mas não para modificação
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistence } from './services/persistence';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';

const car1 = new ShoppingCart();
const messaging = new Messaging();
const persistence = new Persistence();

const order = new Order(car1, messaging, persistence);
car1.addItem(new Product('T-shirt', 49.99));
car1.addItem(new Product('notebook', 499.99));
car1.addItem(new Product('pincel', 9.99));

console.log(car1.items);
console.log(car1.total());
console.log(car1.totalWithDiscount(0.5));
console.log(order.orderStatus);
