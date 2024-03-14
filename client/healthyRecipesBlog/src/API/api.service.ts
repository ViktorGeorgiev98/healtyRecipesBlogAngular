import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";
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
        };
        const accessToken = this.userService.getAccessToken();
        const headers = new HttpHeaders({
            'X-Authorization': `Bearer ${accessToken}`,
            'Content-Type': 'application/json'
        })
        return this.http.post(createUrlRecipe, createRecipePayload, { headers: headers });
    }
}