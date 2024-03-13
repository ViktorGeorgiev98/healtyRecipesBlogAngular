import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../../components/core/homePage/home-page/home-page.component';
import { ErrorPageComponent } from '../../components/shared/ErrorPage/error-page/error-page.component';
import { RegisterPageComponent } from '../../components/User/RegisterPage/register-page/register-page.component';
import { LoginPageComponent } from '../../components/User/LoginPage/login-page/login-page.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '', component: HomePageComponent },
  { path: 'register', component: RegisterPageComponent},
  { path: 'login', component: LoginPageComponent},
  // { path: '**', redirectTo: '/404' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
