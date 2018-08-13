import {Injectable} from '@angular/core';
import {BaseService} from '../base.service';
import {HttpClient, HttpErrorResponse, HttpHeaders, HttpParams} from '@angular/common/http';
import {Account} from '../../model/authentication/account.model';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {MessageService} from 'primeng/api';
import {TranslateService} from '@ngx-translate/core';

const httpOptions = {
  headers: new HttpHeaders({
    'Accept': 'application/json',
    'Content-Type':  'application/x-www-form-urlencoded',
    'Authorization': 'Basic YnJlYWstdm4tc2FsZS1tYW5hZ2VtZW50OmJyZWFrLXZuLXNhbGUtbWFuYWdlbWVudC1zZWNyZXQ='
  })
};

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {

  constructor(protected httpClient: HttpClient,
              private messageService: MessageService,
              private translateService: TranslateService) {
    super();
  }

  login(account: Account): Observable<any> {
    if (!account.login || !account.password) {
      return;
    }
    const body = new HttpParams()
      .set('username', account.login)
      .set('password', account.password)
      .set('grant_type', 'password');

    return this.httpClient.post<any>(this.apiUrl + 'oauth/token', body.toString(), httpOptions).pipe(
      catchError((error: any) => {  // then handle the error
        return this.handleErrorAuthentication(error);
      }));
  }

  private handleErrorAuthentication(httpErrorResponse: HttpErrorResponse) {
    if (httpErrorResponse.error && httpErrorResponse.error.error === 'invalid_grant') {

      this.translateService.get(['AUTHENTICATION.NOTIFICATION.LOGIN_FAILED',
                                      'AUTHENTICATION.NOTIFICATION.INVALID_GRANT']).subscribe((res: string) => {
          this.messageService.add({severity: 'error',
                                  summary: res['AUTHENTICATION.NOTIFICATION.LOGIN_FAILED'],
                                  detail: res['AUTHENTICATION.NOTIFICATION.INVALID_GRANT']});
      });
    } else {

      this.translateService.get(['AUTHENTICATION.NOTIFICATION.LOGIN_FAILED']).subscribe((res: string) => {
        this.messageService.add({severity: 'error',
                                summary: res['AUTHENTICATION.NOTIFICATION.LOGIN_FAILED'],
                                detail: httpErrorResponse.message});
      });
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }
}
