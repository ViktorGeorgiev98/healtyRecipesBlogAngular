import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CreateRecipeComponent } from '../components/Recipes/CreateRecipe/create-recipe/create-recipe.component';
import { CoreModule } from '../components/core/core/core.module';
import { UserModule } from '../components/User/user/user.module';
import { SharedModule } from '../components/shared/shared/shared.module';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, UserModule, CoreModule, UserModule, CreateRecipeComponent, SharedModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'healthyRecipesBlog';
}
