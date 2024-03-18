import { Component } from '@angular/core';
import { ApiService } from '../../../../API/api.service';
import { Recipe } from '../../../../Types/Recipe';

@Component({
  selector: 'app-all-recipes',
  standalone: true,
  imports: [],
  templateUrl: './all-recipes.component.html',
  styleUrl: './all-recipes.component.css'
})
export class AllRecipesComponent {
  constructor(private apiService:ApiService) {}

  recipes: Recipe[] = [];
  isLoading: boolean = true;

  
}
