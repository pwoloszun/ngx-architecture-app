import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthService } from './auth/auth.service';
import { GlobalErrorHandlerService } from './global-error-handler/global-error-handler.service';

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    AuthService,
    GlobalErrorHandlerService,
  ],
})
export class CoreModule {
}
