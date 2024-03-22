import { Component } from '@angular/core';
import { ApiService } from '../../../../API/api.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Recipe } from '../../../../Types/Recipe';
import { UserService } from '../../../../services/userService.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {
  constructor(private apiService: ApiService, private route: ActivatedRoute, private userService: UserService) {}
  currentRecipe: any = [];
  isLoading: boolean = false;
  isUserLoggedIn: boolean = false;
  userHasLikedRecipe: boolean = false;
  userId: string = '';

  ngOnInit() {
    this.isUserLoggedIn = this.userService.isUserLoggedIn();
    this.route.params.subscribe((params: Params) => {
    const id = params['id'];
    console.log({id});
    this.isLoading = true;
    setTimeout(() => {
      this.apiService.getSingleRecipeById(id).subscribe({
        next: (recipe: any) => {
          console.log(recipe);
          this.currentRecipe = recipe;
          this.userId = this.userService.getUserId();
          this.userHasLikedRecipe = this.userService.hasUserLikedREcipe(this.currentRecipe, this.userId);
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
}
