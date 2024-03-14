import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../../API/api.service';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/userService.service';
// Remove import statement for NgForm

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'] // Fix styleUrl to styleUrls
})
export class LoginPageComponent {
  @ViewChild('loginForm') form: NgForm | undefined;
  constructor(private apiService: ApiService, private router: Router, private userService: UserService) {}
  user: {} = {};

  submitLoginForm() {
    if (!this.form) {
      return;
    }

    const form = this.form;
    const { email, password } = form.value;

    if (!email || !password) {
      return alert("All fields are required!");
    }
    
    this.apiService.login(email, password).subscribe({
      next: (response: any) => {
        console.log({response});
        this.user = response;
        console.log(this.user);
        this.userService.login(this.user);
        this.router.navigate(['/']);
      },
      error: (error: any) => {
        console.error(error);
        alert('Email or password is wrong!');
      }
    })
  }
}
