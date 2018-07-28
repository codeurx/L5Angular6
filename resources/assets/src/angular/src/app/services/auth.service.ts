import { environment } from '../../environments/environment';
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
            environment.apiUrl+'login',
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
    logout() {
        return this.http.get(
            environment.apiUrl+'logout',
            { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
        )
            .map(
                response => {
                    return response.json().message;
                })
            .do(
                () => {
                    localStorage.removeItem('token');
                    this.isLoggedIn = false;
                }
            )
    }
    user(){
        return this.http.get(
            environment.apiUrl+'user',
            { headers: new Headers({ 'Authorization': 'Bearer ' + localStorage.getItem('token') }) }
        )
            .map(
                response => {
                    return response.json().user;
                })
    
    }
    checkAuth() {
        if(localStorage.getItem('token')) {
            this.isLoggedIn=true;
            return true;
        }
        return false;
    }
}