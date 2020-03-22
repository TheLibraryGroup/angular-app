import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {OAuthService} from 'angular-oauth2-oidc';
import {Injectable} from '@angular/core';

@Injectable()
export class TheLibraryGuard implements CanActivate {

  constructor(private oauthService: OAuthService, protected router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    const hasIdToken = this.oauthService.hasValidIdToken();
    const hasAccessToken = this.oauthService.hasValidAccessToken();

    if (this.oauthService.hasValidAccessToken()) {
      return (hasIdToken && hasAccessToken);
    }

    this.router.navigate([this.router.url]);
    return this.oauthService.loadDiscoveryDocumentAndLogin();
  }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot) {
  //
  //   const hasIdToken = this.oauthService.hasValidIdToken();
  //   const hasAccessToken = this.oauthService.hasValidAccessToken();
  //
  //   return this.oauthService.loadDiscoveryDocumentAndLogin();
  // }
}
