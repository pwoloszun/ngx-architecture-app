import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './shared';
import { PublicModule } from './features/public/public.module';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: function () {
      return PublicModule;
    },
  },
  // TODO: user feature
  {
    path: 'shop',
    loadChildren: 'app/features/shop/shop.module#ShopModule',
  },
  // TODO: admin feature
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        // enableTracing: true, // <-- debugging purposes only,
        // preloadingStrategy: PreloadAllModules,
      }
    )
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {
}
