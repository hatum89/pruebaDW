import { Injectable } from '@angular/core';
import {UserInterface} from '../../interfaces/user-interface';
import {isObservable} from 'rxjs/internal-compatibility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private  http: HttpClient) { }
  // tslint:disable-next-line:typedef
  getUsers() {
    return this.http.get('assets/user.json');
  }
  getCurrentUser(): string {
   return  localStorage.getItem('type');
  }
}
