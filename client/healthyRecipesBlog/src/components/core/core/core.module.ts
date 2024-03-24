import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../homePage/home-page/home-page.component';
import { FooterComponent } from '../footerComponent/footer/footer.component';
import { RecipeListComponentComponent } from '../recipeListComponent/recipe-list-component/recipe-list-component.component';
import { NavBarComponent } from '../navBar/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared/shared.module';
import { AllRecipesComponent } from '../recipes/all-recipes/all-recipes.component';
import { SearchPageComponent } from '../search/search-page/search-page.component';
import { FormsModule, NgForm } from '@angular/forms';
import { RecipeDetailsComponent } from '../../Recipes/recipeDetails/recipe-details/recipe-details.component';
import { EditRecipeComponent } from '../../Recipes/editRecipe/edit-recipe/edit-recipe.component';



@NgModule({
  declarations: [HomePageComponent, FooterComponent, RecipeListComponentComponent, NavBarComponent, AllRecipesComponent, SearchPageComponent, RecipeDetailsComponent, EditRecipeComponent],
  imports: [
    CommonModule, RouterModule, SharedModule, FormsModule
  ],
  exports: [HomePageComponent, FooterComponent, RecipeListComponentComponent, NavBarComponent, AllRecipesComponent, SearchPageComponent, RecipeDetailsComponent, EditRecipeComponent]
})
export class CoreModule { }
