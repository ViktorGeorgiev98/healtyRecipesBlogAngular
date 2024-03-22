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
    isLoading: boolean = false;

    submitSearchForm() {
      if (!this.form) {
        return;
      }
      this.foundRecipes = [];
      const form = this.form;
      const recipeForSearch = form.value.recipe
      if (!recipeForSearch) {
        return alert("You cannot search with an empty field!")
      } else {
        this.isLoading = true;
        setTimeout(() => {
          this.apiService.searchRecipes(recipeForSearch).subscribe({
            next: (recipes: any) => {
              console.log(recipes);
              this.foundRecipes = recipes;
              if (this.foundRecipes.length > 0) {
                this.foundRecipe = true;
              } else {
                this.foundRecipe = false;
              }
              this.isLoading = false;
            },
            error: (error: any) => {
              console.log(error.message);
              this.foundRecipe = false;
              this.isLoading = false;
            }
          });
        }, 2000)
      }
    }

    }

