//
//
// export const urls = {
//   book: {
//     baseUrl : 'http://localhost:8010/THELIBRARY-BOOK/api'
//   }
// };
//
// export const environment = {
//   production: true,
//   authServiceApiUrl: 'https://auth.thelibrary.mypoc.online/auth',
//   keycloak: {
//     // Url of the Identity Provider
//     issuer: 'https://www.auth.thelibrary.mypoc.online/auth/realms/TheLibrary',
//
//     // URL of the SPA to redirect the user to after login
//     redirectUri: 'https://thelibrary.mypoc.online',
//     // The SPA's id.
//     // The SPA is registerd with this id at the auth-server
//     clientId: 'thelibrary-app',
//     dummyClientSecret: '5902eff4-0127-440d-92d5-f0c0682ff4d7',
//     responseType: 'code',
//     // set the scope for the permissions the client should request
//     // The first three are defined by OIDC.
//     scope: 'openid profile email',
//     // Remove the requirement of using Https to simplify the demo
//     // THIS SHOULD NOT BE USED IN PRODUCTION
//     // USE A CERTIFICATE FOR YOUR IDP
//     // IN PRODUCTION
//     requireHttps: true,
//     // at_hash is not present in JWT token
//     showDebugInformation: true,
//     disableAtHashCheck: true
//   },
//   urls: {
//     book: {
//       getBooks: urls.book.baseUrl + '/books',
//       getBookById: urls.book.baseUrl + '/book',
//     }
//   }
// };

export const urls = {
  book: {
    baseUrl : 'http://localhost:8081/THELIBRARY-BOOK/api'
  }
};


// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  envName: 'local',
  keycloak: {
    // Url of the Identity Provider
    issuer: 'http://localhost:8080/auth/realms/TheLibrary',

    // URL of the SPA to redirect the user to after login
    redirectUri: 'http://localhost:4200/',

    // The SPA's id.
    // The SPA is registerd with this id at the auth-server
    clientId: 'thelibrary-app',
    dummyClientSecret: '5902eff4-0127-440d-92d5-f0c0682ff4d7',
    responseType: 'code',
    // set the scope for the permissions the client should request
    // The first three are defined by OIDC.
    scope: 'openid profile email',
    // Remove the requirement of using Https to simplify the demo
    // THIS SHOULD NOT BE USED IN PRODUCTION
    // USE A CERTIFICATE FOR YOUR IDP
    // IN PRODUCTION
    requireHttps: false,
    // at_hash is not present in JWT token
    showDebugInformation: true,
    disableAtHashCheck: true
  },
  urls: {
    book: {
      getBooks: urls.book.baseUrl + '/books',
      getBookById: urls.book.baseUrl + '/book',
    }
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
