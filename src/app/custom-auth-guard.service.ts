import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import { JwtHelperService } from './shared/jwt-helper.service';

@Injectable()
export class CustomAuthGuard implements CanActivate {
  constructor(private oauthService: OAuthService,
              protected router: Router,
              private jwtHelper: JwtHelperService) {}

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Promise<boolean> {

    return new Promise(async (resolve, reject) => {

      if ( !this.oauthService.hasValidAccessToken() ) {
        return this.oauthService.loadDiscoveryDocumentAndLogin()
          .then( () => resolve(this.canActivate(route, state) ) )
          .catch(reject);
      }

      const requiredRoles = route.data.roles;
      let granted = false;
      if ( !requiredRoles || requiredRoles.length === 0) {
        granted = true;
      } else {
        // granted = requiredRoles.some(requiredRole => this.jwtHelper.hasRealmRole(requiredRole));
        // this.router.navigate([ '/books' ]);c'est b
        for (const requiredRole of requiredRoles) {
          if (this.jwtHelper.getRealmRoles().indexOf(requiredRole) > -1) {
            // if (this.jwtHelper.hasRealmRole(requiredRole)) {
            granted = true;

            break;
          }
        }
      }
      if (granted === false) {
        this.router.navigate([ '/' ]);
      }
      resolve(granted);
    });
  }
}
