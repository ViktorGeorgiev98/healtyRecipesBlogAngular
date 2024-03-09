import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from '../LoginPage/login-page/login-page.component';
import { RegisterPageComponent } from '../RegisterPage/register-page/register-page.component';
import { FormsModule, NgForm } from '@angular/forms';
// import { NgForm } from '@angular/forms';
// import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [LoginPageComponent, RegisterPageComponent],
  imports: [
    CommonModule,
    FormsModule,
  ],
  exports: [LoginPageComponent, RegisterPageComponent]
})
export class UserModule { }
