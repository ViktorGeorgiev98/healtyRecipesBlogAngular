import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root",
})

export class UserService {
    constructor() {}

    login(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('accessToken', user.accessToken);
    }
    

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
    }
    

    getAccessToken() {
        return localStorage.getItem('accessToken');
    }

    
    isUserLoggedIn() {
        return !!localStorage.getItem('user');
    }

    getUserId() {
        const userString = localStorage.getItem('user');
        if (userString) {
            const user = JSON.parse(userString);
            return user._id;
        }
        return null;
    }

    hasUserLikedREcipe(recipe: any, userID: string) {
        return recipe.likes.includes(userID);
    }

}