import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor, HttpHeaders, HttpErrorResponse
} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {UserService} from '../services/user.service';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  constructor( private userService: UserService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = this.userService.getToken('auth-token');
    const headers = new HttpHeaders({
        'token-user': token
      });
    const requestClone = request.clone({
        headers
      });
    return next.handle(requestClone)
        .pipe(
          catchError (this.errorMethod)
        );
  }
  errorMethod( err: HttpErrorResponse): Observable<any> {
    return throwError('Error en la petición al servicio' + ' ' + err);
  }
}
