import { Component } from '@angular/core';
import { Recipe } from '../../../../Types/Recipe';
import { ApiService } from '../../../../API/api.service';
// import { NgModule } from '@angular/core';
@Component({
  selector: 'app-recipe-list-component',
  templateUrl: './recipe-list-component.component.html',
  styleUrl: './recipe-list-component.component.css'
})
export class RecipeListComponentComponent {
  constructor(private apiService: ApiService) {}
  recipesList: Recipe[] | null = [];
  isLoading: boolean = true;

  ngOnInit() {
    this.apiService.getNewest6Recipes().subscribe({
      
      next: (recipes: any) => {
        setTimeout(() => {
          this.isLoading = false;
        }, 5000)
        console.log(recipes);
        this.recipesList = recipes;

      },
      
      error: (error: any) => {
        console.error(error.message);
        return alert('Error: ' + error.message);
      }
    })
  }
//   recipes: Recipe[] = [{_id: "dsadasfafa", recipeName: "random", author: "random", shortDescription: "Top meal!", imageUrl: "https://images.immediate.co.uk/production/volatile/sites/2/2020/02/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg?quality=90&resize=556,505", difficultyLevel: "randomw", ingredients: "neshto, neshto, neshto", instructions: "Mix everything together"},
//   {_id: "dsadasfafa", recipeName: "random", author: "random", shortDescription: "Top meal!",  imageUrl: "https://images.immediate.co.uk/production/volatile/sites/2/2020/02/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg?quality=90&resize=556,505", difficultyLevel: "randomw", ingredients: "neshto, neshto, neshto", instructions: "Mix everything together"},
//   {_id: "dsadasfafa", recipeName: "random", author: "random", shortDescription: "Top meal!", imageUrl: "https://images.immediate.co.uk/production/volatile/sites/2/2020/02/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg?quality=90&resize=556,505", difficultyLevel: "randomw", ingredients: "neshto, neshto, neshto", instructions: "Mix everything together"},
//   {_id: "dsadasfafa", recipeName: "random", author: "random", shortDescription: "Top meal!", imageUrl: "https://images.immediate.co.uk/production/volatile/sites/2/2020/02/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg?quality=90&resize=556,505", difficultyLevel: "randomw", ingredients: "neshto, neshto, neshto", instructions: "Mix everything together"},
//   {_id: "dsadasfafa", recipeName: "random", author: "random", shortDescription: "Top meal!", imageUrl: "https://images.immediate.co.uk/production/volatile/sites/2/2020/02/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg?quality=90&resize=556,505", difficultyLevel: "randomw", ingredients: "neshto, neshto, neshto", instructions: "Mix everything together"},
//   {_id: "dsadasfafa", recipeName: "random", author: "random", shortDescription: "Top meal!", imageUrl: "https://images.immediate.co.uk/production/volatile/sites/2/2020/02/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg?quality=90&resize=556,505", difficultyLevel: "randomw", ingredients: "neshto, neshto, neshto", instructions: "Mix everything together"},
// ];
}
