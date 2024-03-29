import { Component, ViewChild } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../../../../Types/Recipe';
import { ApiService } from '../../../../API/api.service';
import { NgForm } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css'],
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
export class EditRecipeComponent {
  @ViewChild('editRecipeForm') form: NgForm | undefined;
  constructor(private route: ActivatedRoute, private apiService: ApiService, private router: Router) { }
  currentRecipe: any = [];
  isLoading: boolean = false;
  recipeId: string = '';

  ngOnInit() {
    this.isLoading = true;
    setTimeout(() => {
      this.route.params.subscribe((params: Params) => {
        this.recipeId = params['id'];
        console.log({recipeId: this.recipeId});
        
        this.apiService.getSingleRecipeById(this.recipeId).subscribe({
          next: (recipe: any) => {
            console.log(recipe);
            this.currentRecipe = recipe;
            this.isLoading = false;
          },
          error: (error: any) => {
            console.log(error.message);
            this.isLoading = false;
            return alert("Error: " + error.message);
          }
        });
      });
    }, 2000);
  }

  editRecipeSubmitHandler() {
    console.log('submitEdit')
    if (!this.form) {
      return;
    }
    const form = this.form;
    const { recipeName, author, imageUrl, difficultyLevel, shortDescription, ingredients, instructions} = form.value;
    console.log({ recipeName, author, imageUrl, difficultyLevel, shortDescription, ingredients, instructions});
    console.log({instructions});
    if (!recipeName || !author || !imageUrl || !difficultyLevel || !shortDescription || !ingredients || !instructions) {
      return alert("All fields are mandatory!");
    };

    this.apiService.editRecipe(this.currentRecipe).subscribe({
      next: (response: any) => {
        console.log(response);
        this.router.navigate([`/recipes/${this.currentRecipe._id}`]);
      },
      error: (error:any) => {
        console.log(error.message);
        return alert(error.message);
      }
    })
  }
}
