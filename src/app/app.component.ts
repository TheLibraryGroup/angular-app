import { Component } from '@angular/core';
import { AuthConfig, NullValidationHandler, OAuthService } from 'angular-oauth2-oidc';
import { environment } from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ],
})
export class AppComponent {
  title = 'TheLibrary-Angular';

  constructor(private oauthService: OAuthService) {
    // console.log(environment.production); // Logs false for default environment
    // this.configure();
  }

  // authConfig: AuthConfig = {
  //   issuer: 'https://www.auth.thelibrary.mypoc.online/auth/realms/TheLibrary',
  //   redirectUri: window.location.origin + '',
  //   clientId: 'thelibrary-app',
  //   dummyClientSecret: '5902eff4-0127-440d-92d5-f0c0682ff4d7',
  //   scope: 'openid profile email offline_access thelibrary',
  //   responseType: 'code',
  //   // at_hash is not present in JWT token
  //   disableAtHashCheck: true,
  //   showDebugInformation: true
  // };
  //
  // public login() {
  //   this.oauthService.initLoginFlow();
  // }
  //
  // public logoff() {
  //   this.oauthService.logOut();
  // }
  //
  // private configure() {
  //   this.oauthService.configure(this.authConfig);
  //   this.oauthService.tokenValidationHandler = new NullValidationHandler();
  //   this.oauthService.loadDiscoveryDocumentAndTryLogin();
  // }
}
