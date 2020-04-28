import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../../shared/model/product.model';

@Component({
  selector: 'app-product-cart',
  templateUrl: './product-cart.component.html',
  styleUrls: ['./product-cart.component.scss']
})
export class ProductCartComponent implements OnInit {
  @Input() products: Product;

  constructor() { }

  ngOnInit(): void {
  }
}
