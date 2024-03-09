import { Component } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-create-recipe',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './create-recipe.component.html',
  styleUrl: './create-recipe.component.css'
})
export class CreateRecipeComponent {
  submitForm(event: Event, form: NgForm) {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const recipeName = formData.get('recipeName') as string;
    const author = formData.get('author') as string;
    const imageUrl = formData.get('imageUrl') as string;
    const difficultyLevel = formData.get('difficultyLevel') as string;
    const shortDescription = formData.get('shortDescription') as string;
    const ingredients = formData.get('ingredients') as string;
    const instructions = formData.get('instructions') as string;
    console.log({recipeName, author, imageUrl, difficultyLevel, shortDescription, ingredients, instructions})
    if (!recipeName || !author || !imageUrl || !difficultyLevel || !shortDescription || !ingredients || !ingredients || !instructions) {
      return alert("All fields are mandatory! Please fill all fields.")
    }
    console.log("Submit create recipe.")
  }
}
