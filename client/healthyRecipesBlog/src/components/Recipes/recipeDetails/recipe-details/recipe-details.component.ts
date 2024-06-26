import { Component, ViewChild } from '@angular/core';
import { ApiService } from '../../../../API/api.service';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Recipe } from '../../../../Types/Recipe';
import { UserService } from '../../../../services/userService.service';
import { NgForm } from '@angular/forms';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css',
  animations: [
    trigger('myAnimationTrigger', [
      transition(':enter', [
        style({ transform: 'translateY(100%)', opacity: 0 }), // Initial position and opacity
        animate('1000ms ease-out', style({ transform: 'translateY(0)', opacity: 1 })) // End position and opacity
      ]),
      transition(':leave', [
        animate('1000ms ease-in', style({ transform: 'translateY(100%)', opacity: 0 })) // End position and opacity
      ]),
    ]),
  ],
})
export class RecipeDetailsComponent {
  @ViewChild('commentsForm') form: NgForm | undefined;
  constructor(private apiService: ApiService, private route: ActivatedRoute, private userService: UserService, private router: Router) {}
  currentRecipe: any = [];
  isLoading: boolean = false;
  isUserLoggedIn: boolean = false;
  userHasLikedRecipe: boolean = false;
  userId: string = '';
  recipeId: string = '';
  userIsOwner: boolean = false;
  recipeComments: any = [];
  commentsShown: boolean = false;

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
          this.isLoading = true;
        },
        error: (error: any) => {
          console.log(error.message);
          this.isLoading = false;
          return alert("Error: " + error.message);
        }
      });
      this.apiService.getComments(this.recipeId).subscribe({
        next: (comments: any) => {
          console.log(comments);
          this.recipeComments = comments;
          this.isLoading = false;
        },
        error: (error: any) => {
          console.log(error.message);
          this.isLoading = false;
          // return alert("Error: " + error.message);
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

  // likeRecipeButtonHandler() {
  //   this.apiService.likeRecipeById(this.currentRecipe, this.userId).subscribe({
  //     next: (response: any) => {
  //       console.log(response);
  //       // this.currentRecipe.likes = response;
  //       // this.userHasLikedRecipe = this.userService.hasUserLikedREcipe(this.currentRecipe, this.userId);
  //       this.router.navigate(['/recipes/' + this.currentRecipe._id]);

  //     },
  //     error: (error: any) => {
  //       console.log(error.message);
  //       return alert("Error: " + error.message);
  //     }
  //   });
  // }

  editRecipeHandler() {
    this.router.navigate(['/recipes/' + this.currentRecipe._id + '/edit']);
  }


  submitCommentHandler() {
    if (!this.form) {
      return;
    }

    const form = this.form;
    const comment = form.value.comment;
    console.log({comment});
    if (!comment) {
      return alert("Comment field is mandatory!");
    }
    this.apiService.submitComment(comment, this.recipeId).subscribe({
      next: (response: any) => {
        console.log(response);
        this.apiService.getComments(this.recipeId).subscribe({
          next: (comments: any) => {
            console.log(comments);
            this.recipeComments = comments;
          },
          error: (error: any) => {
            console.log(error.message);
            return alert("Error: " + error.message);
          }
        })
        this.router.navigate([`/recipes/${this.recipeId}`], { queryParams: { reload: true } });
      },
      error: (error: any) => {
        console.log(error.message);
        return alert("Error: " + error.message);
      }
    })

  }

  triggerComments() {
    this.commentsShown =! this.commentsShown;
  }
}
