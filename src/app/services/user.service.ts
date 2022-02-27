import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  setCurrentUser = 'sin user';
  constructor(private  http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  getUsers(){
    return this.http.get('assets/user.json');
  }
  // tslint:disable-next-line:typedef
  getToken(token) {
    if (localStorage.getItem('token') !== null) {
     return localStorage.getItem('token');
    } else {
      return '';
    }
  }
}
