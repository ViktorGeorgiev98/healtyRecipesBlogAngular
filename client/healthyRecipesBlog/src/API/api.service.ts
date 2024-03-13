import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root",
})

export class ApiService {
    constructor(private http: HttpClient) {}
    const url = `http://localhost:3030`;

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
        const urlUserExists = `${url}/users/${email}`;
        return this.http.get(urlUserExists);
    }
}