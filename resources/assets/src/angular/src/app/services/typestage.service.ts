import { environment } from './../../environments/environment.prod';
import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
@Injectable()
export class TypestageService {
  constructor(private http: Http) { }
  getTypesStages() {
        return this.http.get(
            environment.apiUrl +'types-stages',
            { headers: new Headers({'Authorization': 'Bearer '+localStorage.getItem('token')})}
        )
        .map(
            response => response.json().TypesStages,
            error => console.log(error)
        );
    }
}
