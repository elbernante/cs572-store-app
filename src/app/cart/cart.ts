import { Product } from '../product';

export class LineItem {
  product: Product;
  quantity: number = 0;
}

export class Cart {
  items: LineItem[] = [];
  size: number = 0;

  addItem(product: Product): LineItem {
    if (!product) return null;

    let lineItem : LineItem = this.items.find(i => i.product.id === product.id)
                   || { product: product, quantity: 0 };

    if (lineItem.quantity === 0) {
      this.items.push(lineItem);
    }

    lineItem.quantity += 1;
    this.size += 1;

    return lineItem;
  }
}
