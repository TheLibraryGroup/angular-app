export const baseUrls = {
  // catalog: 'https://thelibrary.ms.catalog.mypoc.online:8090/api'
  // catalog: 'http://localhost:8090/api'
  catalog: 'http://localhost:8081/THELIBRARY-MS-BOOK/api'
};

export const environment = {
  production: false,
  // authServiceApiUrl: 'https://www.auth.thelibrary.mypoc.online/auth',
  keycloak: {
    // url: 'https://www.auth.thelibrary.mypoc.online/auth',
    url: 'http://localhost:8080/auth',
    realm: 'TheLibrary',
    clientId: 'thelibrary-app',
    credentials: {
      secret: '5902eff4-0127-440d-92d5-f0c0682ff4d7'
    }
  },
  baseUrl: {
    catalog: {
      getBooks: baseUrls.catalog + '/books',
      getBookById: baseUrls.catalog + '/book',

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
