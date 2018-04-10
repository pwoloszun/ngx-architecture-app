import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GmapComponent } from './gmap/gmap.component';
import { ModalComponent } from './modal/modal.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    GmapComponent,
    ModalComponent,
    PageNotFoundComponent,
  ],
})
export class SharedModule {
}
