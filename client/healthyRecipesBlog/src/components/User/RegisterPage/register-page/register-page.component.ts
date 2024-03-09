import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrl: './register-page.component.css'
})
export class RegisterPageComponent {
  @ViewChild('myForm', { static: true }) myForm: NgForm | undefined;
  clearForm(form: NgForm) {
    form.resetForm(); // This will reset the form
  }

  submitForm(event: Event) {
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


