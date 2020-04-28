import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { ProductCartComponent } from './product-list/product-cart/product-cart.component';
import { RouterModule } from '@angular/router';
import { ProductService } from './services/product.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './services/in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    ProductDetailComponent,
    ProductCartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    RouterModule.forRoot([
      { path: '', component: ProductListComponent },
    ])
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
