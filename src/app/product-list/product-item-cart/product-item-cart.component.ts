import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared/model/product.model';

@Component({
  selector: 'app-product-item-cart',
  templateUrl: './product-item-cart.component.html'
})
export class ProductItemCartComponent implements OnInit {
  @Input() product: any;
  @Output() productRemoved = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  get imageProduct(): string {
    return "/assets/images/" + this.product.sku + ".jpg";
  }

  removeProduct(product) {
    this.productRemoved.emit(this.product);
  }

  reducedProduct(product) {
    if (this.product.num === 1) {
      return;
    }
    return this.product.num = this.product.num - 1
  }

  increaseProduct(product) {
    return this.product.num = this.product.num + 1
  }

  isReduced() {
    if (this.product.num === 1) {
      return true;
    }
    return false;
  }
}
