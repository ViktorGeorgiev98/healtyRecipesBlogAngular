import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../../API/api.service';
import { Router } from '@angular/router';
// import { FormsModule } from '@angular/forms';
// import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {

  constructor(private apiService: ApiService, private router: Router) {}
  @ViewChild('registerForm') form: NgForm | undefined;
  userExists: {} = {};

  submitRegisterForm() {
    if (!this.form) {
      return;
    }

    const form = this.form;
    const {email, password, rePassword, username} = form.value;
    console.log({email, password, rePassword, username})
    if (!email || !password || !rePassword || !username) {
      return alert("All fields are required!");
    }
    if (password !== rePassword) {
      return alert("Passwords do not match!");
    }

    this.apiService.userExists(email).subscribe((user) => {
      this.userExists = user;
    })

    if (this.userExists) {
      return alert("User already exists!");
    }

    this.apiService.register(email, password, username).subscribe((response: any) => {
      console.log(response.json());
    });
    
    this.router.navigate(['/login']);

  

  }
}


