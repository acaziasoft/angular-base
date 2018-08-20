import {Injectable} from '@angular/core';
import {HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {LocalStorageUtils} from '../util/local-storage.utils';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    // Get the auth token from the service.
    const authToken = LocalStorageUtils.getAccessToken();
    if (authToken) {
      // Clone the request and replace the original headers with
      // cloned headers, updated with the authorization.
      const authReq = req.clone({
        headers: req.headers.set('Authorization', 'Bearer ' + authToken)
      });

      // send cloned request with header to the next handler.
      return next.handle(authReq);
    }

    return next.handle(req);
  }
}
