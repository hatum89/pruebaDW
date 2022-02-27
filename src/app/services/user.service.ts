import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http: HttpClient) {
  }
  // tslint:disable-next-line:typedef
  getUsers(){
    return this.http.get('assets/user.json');
  }
  getCurrentUser(): string {
   return  localStorage.getItem('type');
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
