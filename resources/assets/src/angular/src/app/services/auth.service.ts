import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';
import {map} from "rxjs/operators";

@Injectable()

export class AuthService {
    constructor(private http: Http) {}
    isLoggedIn: Boolean;
    login(email:string, pass:string) {
        return this.http.post(
            'http://local.io:8080/L5Angular6/api/login',
            {email: email, password: pass}
            )
            .pipe(
                map(
                response => {
                    return response.json().token;
                })
            )
            .do(
                (token) => {
                    localStorage.setItem('token', token);
                    this.isLoggedIn = true;
                }
            )
    }
    // logout() {
    //     return this.http.get(
    //         'http://local.io:8080/L5Angular6/api/logout',
    //         { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    //     )
    //         .map(
    //             response => {
    //                 return response.json().message;
    //             })
    //         .do(
    //             () => {
    //                 localStorage.removeItem('token');
    //                 this.isLoggedIn = false;
    //             }
    //         )
    // }
    // user(){
    //     return this.http.get(
    //         'http://local.io:8080/air/api/user',
    //         { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
    //     )
    //         .map(
    //             response => {
    //                 return response.json().user;
    //             })
    //
    // }
    checkAuth() {
        if(localStorage.getItem('token')) {
            this.isLoggedIn=true;
            return true;
        }
        return false;
    }
}