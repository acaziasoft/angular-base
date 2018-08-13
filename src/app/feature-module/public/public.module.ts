import {NgModule} from '@angular/core';
import {HomeModule} from './home/home.module';
import {SharedModule} from '../../shared/shared.module';
import {AuthenticationModule} from './home/authentication/authentication.module';

@NgModule({
  imports: [
    SharedModule,
    HomeModule,
    AuthenticationModule
  ],
  declarations: [],
  exports: []
})
export class PublicModule { }
