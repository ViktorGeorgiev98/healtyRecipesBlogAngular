import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../../../Types/Recipe';
import { ApiService } from '../../../../API/api.service';

@Component({
  selector: 'app-edit-recipe',
  templateUrl: './edit-recipe.component.html',
  styleUrls: ['./edit-recipe.component.css']
})
export class EditRecipeComponent {
  constructor(private route: ActivatedRoute, private apiService: ApiService) { }
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
    console.log("edit");
  }
}
