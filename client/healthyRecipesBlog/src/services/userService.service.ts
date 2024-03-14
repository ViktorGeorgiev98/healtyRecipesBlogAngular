import { Injectable } from "@angular/core";


@Injectable({
    providedIn: "root",
})

export class UserService {
    constructor() {}

    login(user: any) {
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('accessToken', JSON.stringify(user.accessToken));
    }
    

    logout() {
        localStorage.removeItem('user');
        localStorage.removeItem('accessToken');
    }
    
}