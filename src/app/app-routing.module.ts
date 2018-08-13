import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PublicLayoutComponent} from './shared/layout/public-layout/public-layout.component';
import {HomeComponent} from './feature-module/public/home/home.component';
import {AuthenticationComponent} from './feature-module/public/home/authentication/authentication.component';

const routes: Routes = [
  {
    path: '',
    component: PublicLayoutComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent},
      { path: 'login', component: AuthenticationComponent},
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
