import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, ApplicationRef, DoBootstrap, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {BooksComponent} from './shared/books/books.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
// import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {environment} from '../environments/environment';
import {HttpErrorInterceptor} from './shared/http-error.interceptor';
import {HeaderComponent} from './shared/header/header.component';
import {SideNavComponent} from './shared/side-nav/side-nav.component';
// import {initializer} from './app.init';
import { OAuthModule } from 'angular-oauth2-oidc';
import {TheLibraryGuard} from './the-library-guard';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {AuthConfigModule} from './auth/auth-config.module';
import {DefaultOAuthInterceptor} from './shared/default-oauth.interceptor';

// const keycloakService = new KeycloakService();

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
    OAuthModule.forRoot({
      resourceServer: {
        allowedUrls: ['http://localhost:4200'],
        sendAccessToken: true
      }
    }),
    AuthConfigModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    TheLibraryGuard,
    { provide: HTTP_INTERCEPTORS,
      useClass: DefaultOAuthInterceptor,
      multi: true
    }
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
