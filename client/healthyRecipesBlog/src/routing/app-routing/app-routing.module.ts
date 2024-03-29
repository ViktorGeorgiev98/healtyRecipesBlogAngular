import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from '../../components/core/homePage/home-page/home-page.component';
import { ErrorPageComponent } from '../../components/shared/ErrorPage/error-page/error-page.component';
import { RegisterPageComponent } from '../../components/User/RegisterPage/register-page/register-page.component';
import { LoginPageComponent } from '../../components/User/LoginPage/login-page/login-page.component';
import { CreateRecipeComponent } from '../../components/Recipes/CreateRecipe/create-recipe/create-recipe.component';
import { AuthGuard } from '../../routeGuards/auth.activate';
import { GuestGuard } from '../../routeGuards/guest.activate';
import { AllRecipesComponent } from '../../components/core/recipes/all-recipes/all-recipes.component';
import { SearchPageComponent } from '../../components/core/search/search-page/search-page.component';
import { RecipeDetailsComponent } from '../../components/Recipes/recipeDetails/recipe-details/recipe-details.component';
import { EditRecipeComponent } from '../../components/Recipes/editRecipe/edit-recipe/edit-recipe.component';

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: '', component: HomePageComponent },
  { path: 'register', component: RegisterPageComponent, canActivate: [GuestGuard]},
  { path: 'login', component: LoginPageComponent, canActivate: [GuestGuard]},
  { path: 'create-recipe', component: CreateRecipeComponent, canActivate: [AuthGuard]},
  { path: 'recipes', component: AllRecipesComponent },
  { path: 'search', component: SearchPageComponent  },
  { path: 'recipes/:id', component: RecipeDetailsComponent },
  { path: 'recipes/:id/edit', component: EditRecipeComponent, canActivate: [AuthGuard]},
  // { path: '**', redirectTo: '/404' },
  { path: '**', component: ErrorPageComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
