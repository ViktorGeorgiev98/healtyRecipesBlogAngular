import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../../API/api.service';
import { Router } from '@angular/router';
import { emailValidation, passwordValidation } from '../../../../utils/validationMethods.validator';



@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  constructor(private apiService: ApiService, private router: Router) {}
  @ViewChild('registerForm') form: NgForm | undefined;
  userExists: boolean = false;

  submitRegisterForm() {
    if (!this.form) {
      return;
    }
  
    const form = this.form;
    const { email, password, rePassword, username } = form.value;
    console.log({ email, password, rePassword, username });
    if (!email || !password || !rePassword || !username) {
      return alert("All fields are required!");
    }
    if (password !== rePassword) {
      return alert("Passwords do not match!");
    }

    const emailIsValid = emailValidation(email);
    const passwordIsValid = passwordValidation(password);

    if (!emailIsValid) {
      return alert("Invalid email!");
    }

    if (!passwordIsValid) {
      return alert("Invalid password! Password must be at least 6 characters long, contain at least one uppercase and one lowercase letter and have at least 1 symbol.");
    }
  
    this.apiService.register(email, password, username).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate(['/login']);
      },
      error: (error: any) => {
        console.error(error);
        alert('User already exists!');
      }
    });
  }
}


