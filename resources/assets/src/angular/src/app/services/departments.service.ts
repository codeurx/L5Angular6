import { Injectable } from '@angular/core';
import {Headers, Http} from "@angular/http";
import {environment} from "../../environments/environment.prod";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {
  constructor(private http: Http) {}
  list() {
    return this.http.get(
      environment.apiUrl + 'departments',
      {headers: new Headers({'Authorization': 'Bearer ' + localStorage.getItem('token')})}
    )
      .map(
        response => response.json().list,
        error => console.log(error)
      );
  }
  delete(id) {
    return this.http.get(
      environment.apiUrl + 'delete-department-' + id,
      {headers: new Headers({'Authorization': 'Bearer ' + localStorage.getItem('token')})}
    ).map(
      response => response.json(),
      err => console.log(err)
    );
  }
  save(name: string) {
    return this.http.post(
      environment.apiUrl + 'save-department',
      {name: name},
      {headers: new Headers({'Authorization': 'Bearer ' + localStorage.getItem('token')})}
    )
      .pipe(
        map(
          response => {
            return response.json();
          })
      )
  }
  update(name: string,id:number) {
    return this.http.post(
      environment.apiUrl + 'update-department',
      {id:id,name: name},
      {headers: new Headers({'Authorization': 'Bearer ' + localStorage.getItem('token')})}
    )
      .pipe(
        map(
          response => {
            return response.json();
          })
      )
  }
}

