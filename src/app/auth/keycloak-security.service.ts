import { Injectable } from '@angular/core';
import {KeycloakInstance} from 'keycloak-js';
import {HttpClient} from '@angular/common/http';

declare var Keycloak: any;

@Injectable({
  providedIn: 'root'
})
export class KeycloakSecurityService {

  public kcInstance: KeycloakInstance;

  constructor(private http: HttpClient) { }

  async init() {
    console.log('Security Initialisation ...');
    this.kcInstance = new Keycloak({
      url: 'https://www.auth.thelibrary.mypoc.online/auth',
      realm: 'TheLibrary',
      clientId: 'thelibrary-app',
      credentials: {
        secret: '5902eff4-0127-440d-92d5-f0c0682ff4d7'
      }
    });
    await this.kcInstance.init({
      onLoad: 'check-sso',
      promiseType: 'native'
    });
    console.log(this.kcInstance.token);
  }

  isAdmin(): boolean {
    return this.kcInstance.hasResourceRole('admin');
  }
}
