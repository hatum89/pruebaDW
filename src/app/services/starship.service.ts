import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ShipsInterface} from '../../interfaces/ships-interface';

@Injectable({
  providedIn: 'root'
})
export class StarshipService {

  constructor( private http: HttpClient) { }

  // tslint:disable-next-line:typedef
  getStarship(): Observable<any>{
    return this.http.get('assets/starship.json');
  }
}
