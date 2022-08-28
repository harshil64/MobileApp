import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
    catchError(errorResponse => {
      if (errorResponse instanceof HttpErrorResponse && errorResponse.error) {
        console.log(errorResponse);
      } else {
        console.log('Something went wrong');
      }
      return throwError(errorResponse);
    })
  );
  }
}
