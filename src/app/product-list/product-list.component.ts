import { Component, OnInit} from '@angular/core';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products;
  status: boolean = false;
  sortlowestprice = (a,b) => {
    return a.price < b.price ? -1 : 1;
  }

  sorthighestprice = (a,b) => {
    return a.price > b.price ? -1 : 1;
  }

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.products = this.productService.getProducts();
  }

  onChangeSortValue(value: String) {
    if (value === "lowestprice")
    {
      return this.products = this.products.pipe(
        map((data: []) => { return data.sort(this.sortlowestprice) })
      );
    }
    else (value === "highestprice")
    {
      return this.products = this.products.pipe(
        map((data: []) => { return data.sort(this.sorthighestprice) })
      );
    }
  }

  clickEvent() {
    this.status = !this.status;
  }
}
