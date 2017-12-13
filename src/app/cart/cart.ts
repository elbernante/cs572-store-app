import { Product } from '../product';

export class LineItem {
  
  constructor (
    public product: Product,
    public quantity: number = 0
  ) {}

}

export class Cart {
  items: LineItem[] = [];
  size: number = 0;

  addItem(product: Product): LineItem {
    if (!product) return null;

    let lineItem : LineItem = this.items.find(i => i.product.id === product.id)
                   || new LineItem(product);

    if (lineItem.quantity === 0) {
      this.items.push(lineItem);
    }

    lineItem.quantity += 1;
    this.size += 1;

    return lineItem;
  }
}
