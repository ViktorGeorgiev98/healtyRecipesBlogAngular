import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RegisterPageComponent } from '../components/RegisterPage/register-page/register-page.component';
import { LoginPageComponent } from '../components/LoginPage/login-page/login-page.component';
import { CreateRecipeComponent } from '../components/CreateRecipe/create-recipe/create-recipe.component';
import { CoreModule } from '../components/core/core/core.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RegisterPageComponent, LoginPageComponent, CreateRecipeComponent, CoreModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'healthyRecipesBlog';
}
