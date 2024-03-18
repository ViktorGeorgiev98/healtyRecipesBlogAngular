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


  // WE WILL HAVE PAGINATION FOR THIS PAGE


  recipesList: Recipe[] = [];
  isLoading: boolean = true;
  currentPage: number = 1;
  pageSize: number = 6;
  totalItems: number = 0;

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
      this.loadPage(this.currentPage);
    }, 2500);
  }

  loadPage(page: number) {
    const offset = (page - 1) * 6;
    if (offset > this.recipesList.length) {
      return alert("No more recipes to load.");
    } // Calculate offset based on current page and page size
    this.apiService.getAllRecipes(offset, this.pageSize).subscribe({
      next: (recipes: any) => {
        this.recipesList = recipes;
        this.currentPage = page;
      },
      error: (error: any) => {
        console.error(error);
      }
    });
  }

  nextPage() {
    this.loadPage(this.currentPage + 1);
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.loadPage(this.currentPage - 1);
    }

}
}
