import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// Remove import statement for NgForm

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'] // Fix styleUrl to styleUrls
})
export class LoginPageComponent {
  @ViewChild('myForm', { static: true }) myForm: NgForm | undefined;
  submitForm(event: Event) {
    console.log("login");
    console.log("Form value:", this.myForm?.value);
  }
}
