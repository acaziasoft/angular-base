import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PublicLayoutComponent } from './public-layout.component';
import {RouterModule} from '@angular/router';
import { PublicLayoutHeaderComponent } from './public-layout-header/public-layout-header.component';
import { PublicLayoutFooterComponent } from './public-layout-footer/public-layout-footer.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
  ],
  declarations: [PublicLayoutComponent, PublicLayoutHeaderComponent, PublicLayoutFooterComponent]
})
export class PublicLayoutModule { }
