import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ApplicationRef, DoBootstrap, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {BooksComponent} from './shared/books/books.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {environment} from '../environments/environment';
import {HttpErrorInterceptor} from './shared/http-error.interceptor';
import {HeaderComponent} from './shared/header/header.component';
import {SideNavComponent} from './shared/side-nav/side-nav.component';
import {MatButtonModule} from '@angular/material';
import {KeycloakSecurityService} from './auth/keycloak-security.service';

// const keycloakService = new KeycloakService();

export function kcFactory(kcSecurity: KeycloakSecurityService) {
  return () => kcSecurity.init();

}

@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    HeaderComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    // KeycloakAngularModule,
    MatButtonModule
  ],
  providers: [
    // {
    //   provide: KeycloakService,
    //   useValue: keycloakService
    // },
    { provide: APP_INITIALIZER,
      useFactory: kcFactory,
      multi: true,
      deps: [KeycloakSecurityService]
    },
    // { provide: HTTP_INTERCEPTORS,
    //   useClass: HttpErrorInterceptor,
    //   multi: true
    // }
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule /*implements DoBootstrap*/ {

  // ngDoBootstrap(appRef: ApplicationRef) {
  //   keycloakService
  //     .init({
  //       config: environment.keycloak,
  //       initOptions: {
  //         // onLoad: 'login-required',
  //         checkLoginIframe: false
  //       },
  //       enableBearerInterceptor: true,
  //       bearerExcludedUrls: []
  //     })
  //     .then(() => {
  //       console.log('[ngDoBootstrap] bootstrap app');
  //       appRef.bootstrap(AppComponent);
  //     })
  //     .catch(error => console.error('[ngDoBootstrap] init Keycloak failed', error));
  // }
}
