import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth/auth.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { ToastrService } from 'ngx-toastr';
@Injectable()
export class JwtInterceptor implements HttpInterceptor {
  public loading = false;
  constructor(
    private authService: AuthService,
    private spinner: NgxSpinnerService,
    private toastr: ToastrService
  ) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // Spinner starts
    this.spinner.show();

    // Add auth header with jwt if user is logged in
    let token = this.authService.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }

    return next.handle(request).pipe(
      map((event: HttpEvent<any>) => {
        // setTimeout only wanna show the Spiner function
        setTimeout(() => {
          // Spinner end
          this.spinner.hide();
        }, 200);

        return event;
      }),
      catchError((error: HttpErrorResponse) => {
        let errorMsg = '';
        if (error.error instanceof ErrorEvent) {
          errorMsg = `Error: ${error.error.message}`;
        } else {
          errorMsg = 'Error! An error occurred. Please try again later';
        }

        this.toastr.error(errorMsg, 'Error', {
          timeOut: 800,
        });
        return throwError(errorMsg);
      })
    );
  }
}
