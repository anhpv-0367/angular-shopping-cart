import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../shared/model/product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  @Input() product: any;
  @Output() productAdded = new EventEmitter();

  addProductToCart(product) {
    this.productAdded.emit(product);
  }

  constructor() { }

  ngOnInit(): void {
  }

  get imageProduct(): string {
    return "/assets/images/" + this.product.sku + ".jpg";
  }

  get nuberBeforeDot(): string {
    let price = this.product.price.toFixed(2)
    return price.substr(0, price.length - 3);
  }

  get nuberAfterDot(): string {
    let price = this.product.price.toFixed(2)
    return price.substr(price.length - 3, 3);
  }

  get isInstallment(): boolean {
    return this.product.installments > 0;
  }

  get installmentPrice(): string {
    if (this.isInstallment) {
      return (this.product.price / this.product.installments).toFixed(2);
    }
  }
}
