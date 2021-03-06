abstract class Discount {
  constructor(public discount: number) {}
  abstract calculate(value: number);
}

export class FiftyPercentDiscount extends Discount {
  calculate(value: number): number {
    return value - value * this.discount;
  }
}
