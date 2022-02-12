import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(private readonly cart: ShoppingCart) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your shopping cart is empty!');
      return;
    }

    this.saveOrder();
    this.cart.clear();
  }

  saveOrder(): void {
    console.log('your request was saved');
  }
}
