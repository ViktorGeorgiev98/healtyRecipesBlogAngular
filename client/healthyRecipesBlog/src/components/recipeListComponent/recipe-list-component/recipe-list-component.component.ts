import { Component } from '@angular/core';
import { Recipe } from '../../../Types/Recipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-recipe-list-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './recipe-list-component.component.html',
  styleUrl: './recipe-list-component.component.css'
})
export class RecipeListComponentComponent {
  recipes: Recipe[] = [{_id: "dsadasfafa", recipeName: "random", author: "random", shortDescription: "Top meal!", imageUrl: "https://images.immediate.co.uk/production/volatile/sites/2/2020/02/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg?quality=90&resize=556,505", difficultyLevel: "randomw", ingredients: "neshto, neshto, neshto", instructions: "Mix everything together"},
  {_id: "dsadasfafa", recipeName: "random", author: "random", shortDescription: "Top meal!",  imageUrl: "https://images.immediate.co.uk/production/volatile/sites/2/2020/02/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg?quality=90&resize=556,505", difficultyLevel: "randomw", ingredients: "neshto, neshto, neshto", instructions: "Mix everything together"},
  {_id: "dsadasfafa", recipeName: "random", author: "random", shortDescription: "Top meal!", imageUrl: "https://images.immediate.co.uk/production/volatile/sites/2/2020/02/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg?quality=90&resize=556,505", difficultyLevel: "randomw", ingredients: "neshto, neshto, neshto", instructions: "Mix everything together"},
  {_id: "dsadasfafa", recipeName: "random", author: "random", shortDescription: "Top meal!", imageUrl: "https://images.immediate.co.uk/production/volatile/sites/2/2020/02/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg?quality=90&resize=556,505", difficultyLevel: "randomw", ingredients: "neshto, neshto, neshto", instructions: "Mix everything together"},
  {_id: "dsadasfafa", recipeName: "random", author: "random", shortDescription: "Top meal!", imageUrl: "https://images.immediate.co.uk/production/volatile/sites/2/2020/02/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg?quality=90&resize=556,505", difficultyLevel: "randomw", ingredients: "neshto, neshto, neshto", instructions: "Mix everything together"},
  {_id: "dsadasfafa", recipeName: "random", author: "random", shortDescription: "Top meal!", imageUrl: "https://images.immediate.co.uk/production/volatile/sites/2/2020/02/OLI-0320_Healthy-CuminCrustedChickenBreastWithKaleSaladHumous_02786_preview-eba91c9.jpg?quality=90&resize=556,505", difficultyLevel: "randomw", ingredients: "neshto, neshto, neshto", instructions: "Mix everything together"},
];
}
