import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ApiService } from '../../../../API/api.service';
import { Recipe } from '../../../../Types/Recipe';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
    @ViewChild('searchForm') form: NgForm | undefined;
    constructor(private apiService: ApiService) {}

    foundRecipe: boolean = true;
    foundRecipes: Recipe[] = [];

    submitSearchForm() {
      if (!this.form) {
        return;
      }
      const form = this.form;
      const { recipeForSearch } = form.value;
      this.apiService.searchRecipes(recipeForSearch).subscribe({
        next: (recipes: any) => {
          console.log(recipes);
          this.foundRecipes = recipes;
          if (this.foundRecipes.length > 0) {
            this.foundRecipe = true;
          } else {
            this.foundRecipe = false;
          }
        },
        error: (error: any) => {
          console.log(error.message);
          return alert(error.message);
        }
      });
    }

    }

