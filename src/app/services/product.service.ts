import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { Product } from '../shared/model/product.model';
import { Size } from '../shared/model/size.model';
import { regexFilterBySize } from '../shared/function/regex-filter';

@Injectable()

export class ProductService {
  private productsUrl = 'api/products/';
  private sizesUrl = 'api/sizes/';
  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<Product> {
    return this.http.get<Product>(this.productsUrl)
  }

  getSizes(): Observable<Size> {
    return this.http.get<Size>(this.sizesUrl)
  }

  filterProductBySize(sizes: Size[]): Observable<Product> {
    console.log(sizes);
    const filterSizes = sizes.map((size: Size) => regexFilterBySize(size.key)).join("|");
    const filterSizeUrl = this.productsUrl + "?availableSizes=(" + filterSizes + ")"
    return this.http.get<Product>(filterSizeUrl)
  }
}
