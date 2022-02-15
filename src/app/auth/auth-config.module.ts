import { APP_INITIALIZER, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AuthConfig, OAuthModule } from 'angular-oauth2-oidc';

import { AuthConfigService } from './auth-config.service';
import { authConfig, OAuthModuleConfig } from './auth-config';
import {AuthInitializer} from '../auth-initializer';

export function init_app(authConfigService: AuthConfigService) {
    return () => authConfigService.initAuth();
}


@NgModule({
  imports: [
    HttpClientModule,
    OAuthModule.forRoot()
  ],
  providers: [
    // AuthConfigService,
    // {
    //   provide: AuthConfig,
    //   useValue: authConfig
    // },
    // OAuthModuleConfig,
    // AuthInitializer,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: init_auth,
    //   deps: [AuthInitializer],
    //   multi: true,
    // },
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: init_app,
    //   deps: [ AuthConfigService ],
    //   multi: true
    // }
  ],
})
export class AuthConfigModule {}
