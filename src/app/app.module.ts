import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {BooksComponent} from './shared/books/books.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
// import {KeycloakAngularModule, KeycloakService} from 'keycloak-angular';
import {HeaderComponent} from './shared/header/header.component';
import {SideNavComponent} from './shared/side-nav/side-nav.component';
// import {initializer} from './app.init';
import {OAuthModule} from 'angular-oauth2-oidc';
import {CustomAuthGuard} from './custom-auth-guard.service';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
// import {AuthConfigModule} from './auth/auth-config.module';
import {OauthInterceptor} from './shared/oauth.interceptor';
import {AuthConfigModule} from './auth/auth-config.module';


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
        // allowedUrls: ['http://localhost:4200'],
        allowedUrls: [window.location.origin],
        // allowedUrls: [globalThis.location.origin],
        sendAccessToken: true
      }
    }),
    AuthConfigModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [
    CustomAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OauthInterceptor,
      multi: true
    }
  ],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
