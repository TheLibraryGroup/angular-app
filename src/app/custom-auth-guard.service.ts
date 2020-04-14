import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import * as jwt_decode from 'jwt-decode';
import {JwtHelperService} from './shared/jwt-helper.service';
import {AuthConfigService} from './auth/auth-config.service';

@Injectable()
export class CustomAuthGuard implements CanActivate {
  constructor(private oauthService: OAuthService,
              protected router: Router,
              private jwtHelper: JwtHelperService,
              private oauthConfig: AuthConfigService) {}


  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Promise<boolean> {
    const hasIdToken = this.oauthService.hasValidIdToken();
    const hasAccessToken = this.oauthService.hasValidAccessToken();

    // console.log(jwt_decode(this.oauthService.getAccessToken()));
    // const decoded = jwt_decode(this.oauthService.getAccessToken(), { header: true });
    // const { roles } = decoded.realm_access;
    // const userHaveAccess = () => {
    //   const array = route.data.roles.map((value) => {
    //     const include: boolean = roles.includes(value);
    //     return include;
    //   });
    //   return array.include('true');
    // };

    return new Promise(async (resolve, reject) => {

      if (!this.oauthService.hasValidAccessToken()) {
        this.oauthService.loadDiscoveryDocumentAndLogin().then(() => {
          resolve(this.canActivate(route, state));
          }
        ).catch(reject);
      }
      if (this.oauthService.getAccessToken()) {
        console.log('**************************************');
        console.log(this.jwtHelper.decodeToken(this.oauthService.getAccessToken()));
        console.log(this.jwtHelper.getRealmRoles());
        console.log('**************************************');
      }
      console.log('role restriction given at app-routing.module for this route', route.data.roles);
      // console.log('User roles coming after login from keycloak :', this.roles);
      const requiredRoles = route.data.roles;
      let granted = false;
      if (!requiredRoles || requiredRoles.length === 0) {
        granted = true;
      } else {
        for (const requiredRole of requiredRoles) {
          if (this.jwtHelper.getRealmRoles().indexOf(requiredRole) > -1) {
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
