export const baseUrls = {
  // catalog: 'https://thelibrary.ms.catalog.mypoc.online:8090/api'
  catalog: 'http://localhost:8090/api'
};

export const environment = {
  production: false,
  authServiceApiUrl: 'http://localhost:8080/auth',
  keycloak: {
    url: 'http://localhost:8080/auth',
    // realm: 'thelibrary',
    // clientId: 'app-thelibrary',
    realm: 'TheLibrary',
    clientId: 'thelibrary-app'
  },
  baseUrl: {
    catalog: {
      getBooks: baseUrls.catalog + '/books'
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
