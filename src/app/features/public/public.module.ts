import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicRoutingModule } from './public-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { WelcomeBannerComponent } from './components/welcome-banner/welcome-banner.component';

@NgModule({
  imports: [
    CommonModule,
    PublicRoutingModule,
  ],
  declarations: [
    LoginComponent,
    HomeComponent,
    WelcomeBannerComponent,
  ]
})
export class PublicModule {
}
