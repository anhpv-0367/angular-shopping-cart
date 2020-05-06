import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared/model/product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  @Input() products: any[];
  @Output() productRemoved = new EventEmitter();
  @Output() productCheckouted = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    this.products;
  }

  removeProduct(product) {
    this.productRemoved.emit(product)
  }

  get calcTotal() {
    return this.products.reduce((acc, prod) => acc+= prod.num ,0)
  }

  get totalPrice()
  {
    return this.products.reduce((sum,x)=>
    (
      {
        quantity: 1,
        price: sum.price + x.num*x.price
      }),
    {
      quantity: 1, price: 0
    }).price;
  }

  checkoutProduct(products) {
    for (let product of this.products) {
      this.productCheckouted.emit(product)
    }
  }
}
