import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../../API/api.service';
import { Router } from '@angular/router';
// Remove import statement for NgForm

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'] // Fix styleUrl to styleUrls
})
export class LoginPageComponent {
  @ViewChild('loginForm') form: NgForm | undefined;
  constructor(private apiService: ApiService, private router: Router) {}


  submitLoginForm() {
    if (!this.form) {
      return;
    }

    const form = this.form;
    const { email, password } = form.value;
    const payload = {
      email: email,
      password: password,
    }

    if (!email || !password) {
      return alert("All fields are required!");
    }


  }
}
