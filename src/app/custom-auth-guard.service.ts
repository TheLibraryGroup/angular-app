import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {OAuthService} from 'angular-oauth2-oidc';
import {Injectable} from '@angular/core';
import {AuthConfigService} from './auth/auth-config.service';

@Injectable()
export class CustomAuthGuard implements CanActivate {

  constructor(private oauthService: OAuthService, protected router: Router, private authConfigService: AuthConfigService) {
  }

  // canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
  //   const hasIdToken = this.oauthService.hasValidIdToken();
  //   const hasAccessToken = this.oauthService.hasValidAccessToken();
  //
  //   if (hasAccessToken) {
  //     return (hasIdToken && hasAccessToken);
  //   }
  //
  //   this.router.navigate([this.router.url]);
  //   return this.oauthService.loadDiscoveryDocumentAndLogin();
  // }

  // canActivate(
  //   route: ActivatedRouteSnapshot,
  //   state: RouterStateSnapshot) {
  //
  //   const hasIdToken = this.oauthService.hasValidIdToken();
  //   const hasAccessToken = this.oauthService.hasValidAccessToken();
  //
  //   return this.oauthService.loadDiscoveryDocumentAndLogin();
  // }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

    const hasIdToken = this.oauthService.hasValidIdToken();
    const hasAccessToken = this.oauthService.hasValidAccessToken();

    return new Promise(async (resolve, reject) => {

      this.authConfigService.initAuth();

      if (!this.oauthService.hasValidAccessToken()) {
        this.oauthService.loadDiscoveryDocumentAndLogin();
        resolve(true);
      }
      console.log('role restriction given at app-routing.module for this route', route.data.roles);
      // console.log('User roles coming after login from keycloak :', this.roles);
      const requiredRoles = route.data.roles;
      let granted = false;
      if (!requiredRoles || requiredRoles.length === 0) {
        granted = true;
      } else {
        for (const requiredRole of requiredRoles) {
          if (this.oauthService.getGrantedScopes()/*.indexOf(requiredRole) > -1*/) {
            granted = true;
            break;
          }
        }
      }
      if (granted === false) {
        this.router.navigate(['/']);
      }
      resolve(granted);
    });
  }

}

