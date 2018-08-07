import {NgModule} from '@angular/core';
import {HomeModule} from './home/home.module';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    HomeModule
  ],
  declarations: []
})
export class PublicModule { }
