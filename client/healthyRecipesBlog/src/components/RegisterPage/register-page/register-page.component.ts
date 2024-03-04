import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  clearForm(form: NgForm) {
    form.resetForm(); // This will reset the form
  }

  submitForm(event: Event, form: NgForm) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const email = formData.get('email') as string;
    const password = formData.get('password') as string;
    const rePassword = formData.get('rePassword') as string;
    const username = formData.get('username') as string;
    console.log({ email, password, rePassword, username });
    if (!email || !password || !username || !rePassword) {
      return alert("All fields are required!"); 
    }
  }
}


