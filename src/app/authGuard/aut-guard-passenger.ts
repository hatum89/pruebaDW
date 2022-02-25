import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AutGuardPassenger implements CanActivate {
  constructor(private router: Router) {
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    localStorage.getItem('type');
    if (localStorage.getItem('type') === 'passenger') {
      return true;
    } else {
      this.router.navigateByUrl('/login')
        .then();
      return false;
    }
  }
}