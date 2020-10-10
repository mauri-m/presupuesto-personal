import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('http interceptor');
    if (localStorage.getItem('user-token')) {
      req = req.clone({
        setHeaders: { 'user-token': localStorage.getItem('user-token') }
      });
    } else {
      console.log("no hay token")
    }

    return next.handle(req);
  }
}
