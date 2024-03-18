import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../../../API/api.service';
import { Recipe } from '../../../../Types/Recipe';

@Component({
  selector: 'app-all-recipes',
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
export class AllRecipesComponent implements OnInit {
  constructor(private apiService:ApiService) {}

  recipesList: Recipe[] = [];
  isLoading: boolean = true;
  currentPage: number = 1;
  pageSize: number = 6; // Number of items per page
  totalItems: number = 0;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      this.apiService.getAllRecipes().subscribe({
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
