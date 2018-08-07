import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms';
import {TranslateModule} from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports:      [ CommonModule, FormsModule, TranslateModule ]
})
export class SharedModule { }
