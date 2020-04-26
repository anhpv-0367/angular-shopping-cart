import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable, of } from 'rxjs';
import { Product } from '../shared/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Observable<Product[]>;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.products = this.productService.getProducts()
  }
}
