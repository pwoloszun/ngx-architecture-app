import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SearchProductComponent } from './pages/search-product/search-product.component';
import { ProductDetailsComponent } from './pages/product-details/product-details.component';

const routes: Routes = [
  {path: '', component: SearchProductComponent},
  {path: 'details', component: ProductDetailsComponent},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class ShopRoutingModule {
}
