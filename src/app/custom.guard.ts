import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { OAuthService } from 'angular-oauth2-oidc';
import { Injectable } from '@angular/core';
import {TokenService} from './shared/token.service';

@Injectable({
  providedIn: 'root',
})
export class CustomGuard implements CanActivate {

  constructor(private oauthService: OAuthService, private tokenService: TokenService) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // tslint:disable-next-line:max-line-length
    const { verification } = route.data; // <- ce qui veut dire : "déclare une constante 'verification' et attribue lui la valeur de même nom extraite de route.data"
    if (!Array.isArray(verification && verification.roles)) {
      throw new Error('Problème de développeur : pas de roles nécessaire renseigné');
    }

    // Si l'utilisateur n'est pas connecté => ça ne sert à rien de faire du check de roles
    if (!this.tokenService.isLogged) {
      this.oauthService.initLoginFlow(state.url);
    }

    switch (verification.type) {
      case 'ALL_ROLES':
        return verification.roles.every((requiredRole) => this.tokenService.roles.includes(requiredRole));
      case 'SOME_ROLES':
        return verification.roles.some((requiredRole) => this.tokenService.roles.includes(requiredRole));
      default:
        return false;
    }
  }
}
