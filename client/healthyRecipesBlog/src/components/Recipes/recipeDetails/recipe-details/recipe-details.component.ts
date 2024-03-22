import { Component } from '@angular/core';
import { ApiService } from '../../../../API/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../../../Types/Recipe';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute) {}
  currentRecipe: any = [];
  isLoading: boolean = false;

  ngOnInit() {
   this.route.params.subscribe((params: Params) => {
    const id = params['id'];
    console.log({id});
    this.isLoading = true;
    setTimeout(() => {
      this.apiService.getSingleRecipeById(id).subscribe({
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
    }, 2000)


   })
  }
}
