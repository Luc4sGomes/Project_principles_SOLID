import { OrderStatus } from './interfaces/order-status';
import { Messaging } from '../services/messaging';
import { Persistence } from '../services/persistence';
import { ShoppingCart } from './shopping-cart';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messsaging: Messaging,
    private readonly persistence: Persistence,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your shopping cart is empty!');
      return;
    }

    this.messsaging.sendMessage(
      `your request is total of ${this.cart.total()} was received`,
    );

    this.persistence.saveOrder();
    this.cart.clear();
  }
}
