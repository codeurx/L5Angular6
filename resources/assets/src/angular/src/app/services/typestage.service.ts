import {environment} from './../../environments/environment.prod';
import {Http, Headers} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {map} from "rxjs/operators";

@Injectable()
export class TypestageService {
  constructor(private http: Http) {}
  list(search, page) {
    return this.http.post(
      environment.apiUrl + 'types-stages',
      { search: search,page:page },
      {headers: new Headers({'Authorization': 'Bearer ' + localStorage.getItem('token')})}
    )
      .map(
        response => response.json().TypesStages,
        error => console.log(error)
      );
  }
  delete(id) {
    return this.http.get(
      environment.apiUrl + 'delete-type-stage-' + id,
      {headers: new Headers({'Authorization': 'Bearer ' + localStorage.getItem('token')})}
    ).map(
      response => response.json(),
      err => console.log(err)
    );
  }
  save(name: string) {
    return this.http.post(
      environment.apiUrl + 'save-new-type-stage',
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
      environment.apiUrl + 'update-type-stage',
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
