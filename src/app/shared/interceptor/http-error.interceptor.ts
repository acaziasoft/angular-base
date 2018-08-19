import {HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core';
import {catchError} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {HttpEvent} from '@angular/common/http/src/response';
import {environment} from '../../../environments/environment';
import {MessageService} from 'primeng/api';

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {

  constructor(private messageService: MessageService) {}

  protected apiUrl: string = environment.apiUrl;
  API_IGNORE_HANDLE_ERROR = [this.apiUrl + 'oauth/token'];

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    if (this.API_IGNORE_HANDLE_ERROR.includes(req.url)) {
      return next.handle(req);
    } else {
      return next.handle(req)
        .pipe(
          catchError((error: any) => {  // then handle the error
            return this.handleError(error);
          })
        );
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,

      console.log(error);
      this.messageService.add({severity: 'error', summary: error.statusText, detail: error.message});
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
