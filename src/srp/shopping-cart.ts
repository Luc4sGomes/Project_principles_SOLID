type CartItem = { name: string; price: number };

export class ShoppingCart {
  private readonly _items: CartItem[] = [];

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }
}

const car1 = new ShoppingCart();
car1.addItem({ name: 'T-shirt', price: 59.99 });
car1.addItem({ name: 'Notebook', price: 399.99 });
car1.addItem({ name: 'Candle', price: 9.99 });

console.log(car1.items);
console.log(car1.total());
