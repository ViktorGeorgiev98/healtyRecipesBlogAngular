import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map } from "rxjs";

@Injectable({
    providedIn: "root",
})

export class ApiService {
    constructor(private http: HttpClient) {}
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
}