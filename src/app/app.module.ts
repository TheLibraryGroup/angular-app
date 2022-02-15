import {BrowserModule} from '@angular/platform-browser';
import {APP_INITIALIZER, NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {BooksComponent} from './shared/books/books.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {HeaderComponent} from './shared/header/header.component';
import {SideNavComponent} from './shared/side-nav/side-nav.component';
import {OAuthModule} from 'angular-oauth2-oidc';
import {MatButtonModule, MatFormFieldModule, MatInputModule} from '@angular/material';
import {AuthInitializer} from './auth-initializer';


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
        allowedUrls: ['htpp://localhost:8010'],
        // allowedUrls: [globalThis.location.origin],
        sendAccessToken: true
      }
    }),
    // AuthConfigModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
  ],
  providers: [
    // CustomAuthGuard,
    // AuthInitializer,
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: OauthInterceptor,
    //   multi: true
    // },
    {
      provide: APP_INITIALIZER,
      useFactory(authInitializer: AuthInitializer) {
        return () => authInitializer.init();
      },
      deps: [AuthInitializer],
      multi: true,
    }
  ],
  // entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}
