import { Component, ViewChild } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../../../API/api.service';
import { Router } from '@angular/router';
import { UserService } from '../../../../services/userService.service';
import { animate, style, transition, trigger } from '@angular/animations';


@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.css',
  animations: [
    trigger('myAnimationTrigger', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }), // Initial position and opacity
        animate('1000ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })) // End position and opacity
      ]),
      transition(':leave', [
        animate('1000ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 })) // End position and opacity
      ]),
    ]),
  ],
})
export class CreateRecipeComponent {
  @ViewChild('createRecipeForm') form: NgForm | undefined;
  constructor(private apiService: ApiService, private router: Router) {}


  submitCreateRecipeForm() {
  if (!this.form) {
    return;
  }
  const form = this.form;

  const { recipeName, author, imageUrl, difficultyLevel, shortDescription, ingredients, instructions} = form.value;
  console.log({ recipeName, author, imageUrl, difficultyLevel, shortDescription, ingredients, instructions})
  console.log({instructions})
  if (!recipeName || !author || !imageUrl || !difficultyLevel || !shortDescription || !ingredients || !instructions) {
    return alert("All fields are mandatory!");
  };

  this.apiService.createRecipe(recipeName, author, imageUrl, difficultyLevel, shortDescription, ingredients, instructions).subscribe({
    next: (response: any) => {
      console.log(response);
      this.router.navigate(['/']);
    },
    error: (error:any) => {
      console.log(error.message);
      return alert(error.message);
    }
  })



  }

}
