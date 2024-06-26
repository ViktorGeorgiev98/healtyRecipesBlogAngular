import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, map } from "rxjs";
import { UserService } from "../services/userService.service";

@Injectable({
    providedIn: "root",
})

export class ApiService {
    constructor(private http: HttpClient, private userService: UserService ) {}
    url = `http://localhost:3030`;

    register(email: string, password: string, username: string) {
        const urlRegister = `${this.url}/users/register`;
        const registerPayload = {
            email: email,
            password: password,
            username: username,
        }
        return this.http.post(urlRegister, registerPayload);
    }

    userExists(email: string) {
        const urlUserExists = `${this.url}/users/${email}`;
        return this.http.get(urlUserExists).pipe(
            map((response: any) => {
                console.log({response})
                return !!response;
            })
        );
    }

    login(email: string, password: string) {
        const urlLogin = `${this.url}/users/login`;
        const loginPayload = {
            email: email,
            password: password,
        }
        return this.http.post(urlLogin, loginPayload);
    }

    createRecipe(recipeName: string, author: string, imageUrl: string, difficultyLevel: string, shortDescription: string, ingredients: string, instructions: string) {
        const createUrlRecipe = `${this.url}/data/healthyRecipes`;
        const createRecipePayload = {
            recipeName: recipeName,
            author: author,
            imageUrl: imageUrl,
            difficultyLevel: difficultyLevel,
            shortDescription: shortDescription,
            ingredients: ingredients,
            instructions: instructions,
            likes: []
        };
        const accessToken = this.userService.getAccessToken() || '';
        console.log(`This is our access token: ${accessToken}`);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        });

        console.log("Headers: ", headers)
        return this.http.post(createUrlRecipe, createRecipePayload, { headers });
    }

    getNewest6Recipes() {
        const urlGetNewest6Recipes = `${this.url}/data/healthyRecipes?sortBy=_createdOn%20desc&page=1&pageSize=6`;
        return this.http.get(urlGetNewest6Recipes);
    }

    getAllRecipes(page: number, pageSize: number): Observable<any> {
        const offset = page;
        const urlGetAllRecipes = `${this.url}/data/healthyRecipes?offset=${offset}&pageSize=${pageSize}`;
        console.log("urlGetAllRecipes: ", urlGetAllRecipes)
        return this.http.get(urlGetAllRecipes);
      }

      searchRecipes(recipeForSearch: string): Observable<any> {
        const urlSearchRecipes = `${this.url}/data/healthyRecipes?where=recipeName LIKE "${recipeForSearch}"`;
        console.log("urlSearchRecipes: ", urlSearchRecipes)
        return this.http.get(urlSearchRecipes);
      }

      getAllRecipesWithoutPagination() {
        const urlGetAllRecipesWithoutPagination = `${this.url}/data/healthyRecipes`;
        console.log("urlGetAllRecipesWithoutPagination: ", urlGetAllRecipesWithoutPagination)
        return this.http.get(urlGetAllRecipesWithoutPagination);
      }

      getSingleRecipeById(id: string) {
        const urlGetSingleRecipeById = `${this.url}/data/healthyRecipes/${id}`;
        console.log("urlGetSingleRecipeById: ", urlGetSingleRecipeById)
        return this.http.get(urlGetSingleRecipeById);
      }

      deleteRecipeById(id: string) {
        const urlDeleteRecipeById = `${this.url}/data/healthyRecipes/${id}`;
        console.log("urlDeleteRecipeById: ", urlDeleteRecipeById)
        const accessToken = this.userService.getAccessToken() || '';
        console.log(`This is our access token: ${accessToken}`);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        });
        return this.http.delete(urlDeleteRecipeById, {headers});
      }

      editRecipe(recipe: any) {
        const urlForEdit = `${this.url}/data/healthyRecipes/${recipe._id}`;
        console.log("urlForLike: ", urlForEdit)
        const accessToken = this.userService.getAccessToken() || '';
        console.log(`This is our access token: ${accessToken}`);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        });
        // const likes = recipe.likes;
        // likes.push(userId);
        const payload = {
            recipeName: recipe.recipeName,
            author: recipe.author,
            imageUrl: recipe.imageUrl,
            difficultyLevel: recipe.difficultyLevel,
            shortDescription: recipe.shortDescription,
            ingredients: recipe.ingredients,
            instructions: recipe.instructions,
            likes: []
        }
        return this.http.put(urlForEdit, payload, {headers});
      }

      submitComment(comment: string, refId: string) {
        const urlSubmitComment = `${this.url}/data/healthyRecipesBlogComments`;
        const accessToken = this.userService.getAccessToken() || '';
        const userEmail = this.userService.getEmail();
        console.log(`This is our access token: ${accessToken}`);
        const headers = new HttpHeaders({
            'Content-Type': 'application/json',
            'X-Authorization': accessToken
        });
        const payload = {
            author: userEmail,
            comment: comment,
            refId: refId
        }
        return this.http.post(urlSubmitComment, payload, {headers});
      }

      getComments(recipeId: string) {
        const urlGetComments = `${this.url}/data/healthyRecipesBlogComments?where=refId LIKE "${recipeId}"`;
        console.log("urlGetComments: ", urlGetComments)
        return this.http.get(urlGetComments);
      }
}