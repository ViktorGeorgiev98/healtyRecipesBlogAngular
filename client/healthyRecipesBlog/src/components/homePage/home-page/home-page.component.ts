import { Component } from '@angular/core';
import { RecipeListComponentComponent } from '../../recipeListComponent/recipe-list-component/recipe-list-component.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RecipeListComponentComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

}
