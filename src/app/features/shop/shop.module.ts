import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShopRoutingModule } from './shop-routing.module';
import { SearchProductComponent } from './pages/search-product/search-product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';
import { ProductsListComponent } from './components/products-list/products-list.component';

@NgModule({
  imports: [
    CommonModule,
    ShopRoutingModule,
  ],
  declarations: [
    SearchProductComponent,
    ProductDetailsComponent,
    ProductsListComponent,
  ],
})
export class ShopModule {
}
