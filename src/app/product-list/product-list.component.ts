import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ProductService } from '../services/product.service';
import { map } from 'rxjs/operators';
import { Size } from '../shared/model/size.model';
import { Observable } from 'rxjs'

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  cartProductList = [];
  products;
  sizes: any;
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
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    });;
    this.productService.getSizes().subscribe((data: any) => {
      this.sizes = data;
    });
  }

  onChangeSortValue(value: String) {
    if (value === "lowestprice")
    {
      return this.products = this.products.sort(this.sortlowestprice)
    }
    else (value === "highestprice")
    {
      return this.products = this.products.sort(this.sorthighestprice)
    }
  }

  filterByListSizes(){
    const sizes_checked = this.sizes.filter((size: Size) => size.checked === true);
    this.productService.filterProductBySize(sizes_checked).subscribe((data: any) => {
      this.products = data;
    });
  }

  changeSize(size) {
    size.checked = !size.checked;
    this.filterByListSizes();
  }

  clickEvent() {
    this.status = !this.status;
  }

  addProductToCart(product) {
    const productExistInCart = this.cartProductList.find(({id}) => id === product.id);
    if (!productExistInCart) {
      return this.cartProductList.push({...product, num:1});
    }
    productExistInCart.num += 1;
  }

  removeProduct(product) {
    this.cartProductList = this.cartProductList.filter(
      ({ id }) => id !== product.id
    );
  }

  checkoutProduct(product) {
    for (let product of this.cartProductList) {
      this.cartProductList = this.cartProductList.filter(
        ({ id }) => id !== product.id
      );
    }
  }

  calcTotal() {
    return this.cartProductList.reduce((acc, prod) => acc+= prod.num ,0)
  }
}

