import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../../Types/Recipe';
import { ApiService } from '../../../../API/api.service';
// import { NgModule } from '@angular/core';
@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrl: './recipe-list-component.component.css'
})
export class RecipeListComponentComponent implements OnInit {
  constructor(private apiService: ApiService) {}
  recipesList: Recipe[] = [];
  isLoading: boolean = true;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      this.apiService.getNewest6Recipes().subscribe({
        next: (recipes: any) => {
          console.log(recipes);
          this.recipesList = recipes;
        },
        error: (error: any) => {
          console.error(error.message);
          this.recipesList = [];
        }
      });
    }, 2500);
  }
}