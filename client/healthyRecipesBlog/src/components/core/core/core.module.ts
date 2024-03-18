import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from '../homePage/home-page/home-page.component';
import { FooterComponent } from '../footerComponent/footer/footer.component';
import { RecipeListComponentComponent } from '../recipeListComponent/recipe-list-component/recipe-list-component.component';
import { NavBarComponent } from '../navBar/nav-bar/nav-bar.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared/shared.module';



@NgModule({
  declarations: [HomePageComponent, FooterComponent, RecipeListComponentComponent, NavBarComponent],
  imports: [
    CommonModule, RouterModule, SharedModule
  ],
  exports: [HomePageComponent, FooterComponent, RecipeListComponentComponent, NavBarComponent]
})
export class CoreModule { }
