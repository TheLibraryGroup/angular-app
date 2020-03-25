import {Component} from '@angular/core';
import {AuthConfig, NullValidationHandler, OAuthService} from 'angular-oauth2-oidc';
import {environment} from '../environments/environment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheLibrary-Angular';
  // constructor(private oauthService: OAuthService) {
  //
  //   // The SPA's id. Register SPA with this id at the auth-server
  //   this.oauthService.clientId = environment.keycloak.clientId;
  //
  //   // set the scope for the permissions the client should request
  //   // The auth-server used here only returns a refresh token (see below), when the scope offline_access is requested
  //   this.oauthService.scope = environment.keycloak.scope;
  //
  //   // Use setStorage to use sessionStorage or another implementation of the TS-type Storage
  //   // instead of localStorage
  //   this.oauthService.setStorage(sessionStorage);
  //
  //   // Set a dummy secret
  //   // Please note that the auth-server used here demand the client to transmit a client secret, although
  //   // the standard explicitly cites that the password flow can also be used without it. Using a client secret
  //   // does not make sense for a SPA that runs in the browser. That's why the property is called dummyClientSecret
  //   // Using such a dummy secret is as safe as using no secret.
  //   this.oauthService.dummyClientSecret = environment.keycloak.dummyClientSecret;
  //
  //   // Load Discovery Document and then try to login the user
  //   const url = 'http://localhost:8080/auth/realms/TheLibrary/.well-known/openid-configuration';
  //   this.oauthService.loadDiscoveryDocument(url).then(() => {
  //     // Do what ever you want here
  //   });
  //
  // }
}
