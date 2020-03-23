import {Component} from '@angular/core';
import {KeycloakSecurityService} from './auth/keycloak-security.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TheLibrary-Angular';


  constructor(public keycloakSecurityServcie: KeycloakSecurityService) {
  }
}
