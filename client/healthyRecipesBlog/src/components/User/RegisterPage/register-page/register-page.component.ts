import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../../API/api.service';
import { Router } from '@angular/router';



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


