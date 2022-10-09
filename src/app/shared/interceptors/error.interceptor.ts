import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest
} from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Router } from "@angular/router";
import Swal from "sweetalert2";

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(public router: Router) { }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
      catchError(error => {
        console.error("error is intercept", error);
        if(error.status != 400) Swal.fire(
          error?.error?.message,
          '',
          'error'
        );
        if (error.status == 400) Swal.fire(
          error?.error?.message,
          'يرجى التحقق من مدخلاتك',
          'error'
        );
        if (error.status == 401 || error.status == 403) { return throwError(null) }
        return throwError(error);
      })
    );
  }
}