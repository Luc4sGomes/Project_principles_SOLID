import { Messaging } from './services/messaging';
import { Order } from './entitites/order';
import { Persistence } from './services/persistence';
import { Product } from './entitites/product';
import { ShoppingCart } from './entitites/shopping-cart';

const car1 = new ShoppingCart();
const messaging = new Messaging();
const persistence = new Persistence();

const order = new Order(car1, messaging, persistence);
car1.addItem(new Product('T-shirt', 49.99));
car1.addItem(new Product('notebook', 499.99));
car1.addItem(new Product('pincel', 9.99));

console.log(car1.items);
console.log(car1.total());
console.log(order.orderStatus);
