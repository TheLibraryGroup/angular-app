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
  }

}
