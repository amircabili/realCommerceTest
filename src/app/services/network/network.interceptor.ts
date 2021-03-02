import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class NetworkInterceptor implements HttpInterceptor {

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // we cannot modify the original req, so we clone it
    // const reqClone = req.clone();
    // return next.handle(reqClone);

    // return with no changes
    console.log('DEBUG::req', req);
    return next.handle(req);
  }
}
