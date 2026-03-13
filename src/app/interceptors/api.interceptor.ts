import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

export const apiInterceptor: HttpInterceptorFn = (
  request: HttpRequest<any>,
  next: HttpHandlerFn,
): Observable<HttpEvent<any>> => {
  const apiReq: HttpRequest<any> = request.clone({
    url: request.url.startsWith('http') ? request.url : environment.apiUrl + request.url,
  });

  return next(apiReq);
};
