type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCart {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your shopping cart is empty!');
      return;
    }

    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(message: string): void {
    console.log('message sended', message);
  }

  saveOrder(): void {
    console.log('your request was saved');
  }

  clear(): void {
    this._items.length = 0;
  }
}

const car1 = new ShoppingCart();
car1.addItem({ name: 'T-shirt', price: 59.99 });
car1.addItem({ name: 'Notebook', price: 399.99 });
car1.addItem({ name: 'Candle', price: 9.99 });

console.log(car1.items);
console.log(car1.total());
console.log(car1.orderStatus);
