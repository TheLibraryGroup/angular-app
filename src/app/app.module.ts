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
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {initializer} from './keycloak-init';
import {AuthenticationService} from './auth/authentication.service';

const keycloakService = new KeycloakService();


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
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    KeycloakAngularModule,
  ],
  providers: [
    AuthenticationService,
    // {
    //   provide: APP_INITIALIZER,
    //   useFactory: initializer,
    //   multi: true,
    //   deps: [KeycloakService]
    // }
    {
      provide: KeycloakService,
      useValue: keycloakService
    },

  ],
  entryComponents: [AppComponent],
  // bootstrap: [AppComponent]
})
export class AppModule implements DoBootstrap {
  ngDoBootstrap(appRef: ApplicationRef) {
    keycloakService
      .init({
        config: environment.keycloak,
        initOptions: {
          onLoad: 'check-sso',
          checkLoginIframe: false
        },
        enableBearerInterceptor: true,
        // bearerExcludedUrls: ['/books', 'http://localhost:4200/books']
      })
      .then(() => {
        console.log('[ngDoBootstrap] bootstrap app');
        appRef.bootstrap(AppComponent);
      })
      .catch(error => console.error('[ngDoBootstrap] init Keycloak failed', error));
  }
}
