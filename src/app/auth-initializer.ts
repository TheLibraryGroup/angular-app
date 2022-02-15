import { Injectable } from '@angular/core';
import {JwksValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';
import {authConfig} from './auth/auth-config';

@Injectable({
  providedIn: 'root',
})
export class AuthInitializer {

  constructor(private authService: OAuthService, private router: Router) {
    console.log('******************************');
    console.log('******************************');
    console.log('******************************');
    console.log('******************************');
    console.log('******************************');
    console.log('******************************');
  }

  init(): Promise<any> {
    if (!environment.production) {
      Object.assign(globalThis, { authService: this.authService }); // juste pour m'aider, je veux acceder à authService depuis ma console
    }
    this.authService.configure(authConfig);
    this.authService.setStorage(localStorage);
    this.authService.setupAutomaticSilentRefresh();
    this.authService.tokenValidationHandler = new JwksValidationHandler();

    // A l'arrivée sur l'application, on tente de s'authentifier (via des tokens pré-enregistrés)
    return this.authService.loadDiscoveryDocumentAndTryLogin().then(() => {
      if (this.authService.state) {
        // Je demande à mon routeur de me rediriger vers la page souhaitée avant login
        this.router.navigateByUrl(decodeURIComponent(this.authService.state));
      }
    });
  }
}
