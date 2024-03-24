import { Component } from '@angular/core';
import { ApiService } from '../../../../API/api.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Recipe } from '../../../../Types/Recipe';
import { UserService } from '../../../../services/userService.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute, private userService: UserService, private router: Router) {}
  currentRecipe: any = [];
  isLoading: boolean = false;
  isUserLoggedIn: boolean = false;
  userHasLikedRecipe: boolean = false;
  userId: string = '';
  recipeId: string = '';
  userIsOwner: boolean = false;

  ngOnInit() {
    this.isUserLoggedIn = this.userService.isUserLoggedIn();
    this.route.params.subscribe((params: Params) => {
    this.recipeId = params['id'];
    console.log({recipeId: this.recipeId});
    this.isLoading = true;
    setTimeout(() => {
      this.apiService.getSingleRecipeById(this.recipeId).subscribe({
        next: (recipe: any) => {
          console.log(recipe);
          this.currentRecipe = recipe;
          this.userId = this.userService.getUserId();
          this.userHasLikedRecipe = this.userService.hasUserLikedREcipe(this.currentRecipe, this.userId);
          if (this.userId) {
            this.userIsOwner = this.userService.isUserOwnerOfRecipe(this.currentRecipe, this.userId);
          }
          this.isLoading = false;
        },
        error: (error: any) => {
          console.log(error.message);
          this.isLoading = false;
          return alert("Error: " + error.message);
        }
      });
    }, 2000)


   })
  }

  deleteRecipeHandler() {
    const result = confirm("Are you sure you want to delete this recipe ?");

    if (result) {
      console.log('Will delete recipe...')
      this.isLoading = true;
      setTimeout(() => {
        this.apiService.deleteRecipeById(this.recipeId).subscribe({
          next: (response: any) => {
            console.log('recipe deleted');
            this.isLoading = false;
            this.router.navigate(['/']);
          },
          error: (error:any) => {
            console.log(error.message);
            this.isLoading = false;
            return alert("Error: " + error.message);
          }
        })
      })
    } else {
      return;
    }
  }
}
