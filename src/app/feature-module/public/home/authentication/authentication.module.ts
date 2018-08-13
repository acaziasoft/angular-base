import {NgModule} from '@angular/core';
import {AuthenticationComponent} from './authentication.component';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../../../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    MatInputModule,
    MatButtonModule
  ],
  declarations: [AuthenticationComponent]
})
export class AuthenticationModule { }
