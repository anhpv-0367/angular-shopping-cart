import { Component, OnInit} from '@angular/core';
import { ProductService } from '../services/product.service';
import { Observable, of } from 'rxjs';
import { Product } from '../shared/model/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProducts().subscribe(
      response => {
        this.products = response;
      }
    );
  }

  onChangeSortValue(value: String) {
    if (value === "lowestprice")
    {
      return this.products = this.products.sort((a,b) => a.price - b.price)
    }
    else (value === "highestprice")
    {
      return this.products = this.products.sort((a,b) => b.price - a.price)
    }
  }
}
