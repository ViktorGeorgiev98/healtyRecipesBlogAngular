import { Component, OnInit } from '@angular/core';
import { Recipe } from '../../../../Types/Recipe';
import { ApiService } from '../../../../API/api.service';
import { animate, style, transition, trigger } from '@angular/animations';
// import { NgModule } from '@angular/core';
@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrl: './recipe-list-component.component.css',
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