import { Injectable, Inject, Optional } from '@angular/core';
import {OAuthModuleConfig, OAuthResourceServerErrorHandler, OAuthService, OAuthStorage} from 'angular-oauth2-oidc';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';

import {from, Observable} from 'rxjs';

@Injectable()
export class DefaultOAuthInterceptor implements HttpInterceptor {

  // constructor(
  //   private authStorage: OAuthStorage,
  //   private oauthService: OAuthService,
  //   private errorHandler: OAuthResourceServerErrorHandler,
  //   @Optional() private moduleConfig: OAuthModuleConfig
  // ) {
  // }
  //
  // private checkUrl(url: string): boolean {
  //   const found = this.moduleConfig.resourceServer.allowedUrls.find(u => url.startsWith(u));
  //   return !!found;
  // }
  //
  // public intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  //
  //   console.log('INTERCEPTOR');
  //
  //   const url = req.url.toLowerCase();
  //
  //   if (!this.moduleConfig) { return next.handle(req); }
  //   if (!this.moduleConfig.resourceServer) { return next.handle(req); }
  //   if (!this.moduleConfig.resourceServer.allowedUrls) { return next.handle(req); }
  //   if (!this.checkUrl(url)) { return next.handle(req); }
  //
  //   const sendAccessToken = this.moduleConfig.resourceServer.sendAccessToken;
  //
  //   if (sendAccessToken) {
  //
  //     // const token = this.authStorage.getItem('access_token');
  //     const token = this.oauthService.getIdToken();
  //     const header = 'Bearer ' + token;
  //
  //     console.log('TOKEN in INTERCEPTOR : ' + token);
  //
  //     const headers = req.headers
  //       .set('Authorization', header);
  //
  //     req = req.clone({ headers });
  //   }
  //
  //   return next.handle(req)/*.catch(err => this.errorHandler.handleError(err))*/;
  //
  // }

  constructor(private oAuthService: OAuthService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return from(this.handleAccess(request, next));
  }

  private async handleAccess(request: HttpRequest<any>, next: HttpHandler): Promise<HttpEvent<any>> {
    // Only add an access token to whitelisted origins
    const allowedOrigins = ['*'];
    if (allowedOrigins.some(url => request.urlWithParams.includes(url))) {
      const accessToken = await this.oAuthService.getAccessToken();
      request = request.clone({
        setHeaders: {
          Authorization: 'Bearer ' + accessToken
        }
      });
    }
    return next.handle(request).toPromise();
  }
}
