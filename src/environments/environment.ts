export const baseUrls = {
  // catalog: 'https://thelibrary.ms.catalog.mypoc.online/api'
  catalog: 'http://localhost:8090/api'
};


import {KeycloakConfig, KeycloakInitOptions, KeycloakOptions} from 'keycloak-angular';

// Add here your keycloak configuration information
const keycloakConfig: KeycloakConfig = {
  url: 'https://www.auth.thelibrary.mypoc.online/auth',
  realm: 'TheLibrary',
  clientId: 'thelibrary-app',
  credentials: {
    secret: '5902eff4-0127-440d-92d5-f0c0682ff4d7'
  }
};

const keycloakInitOptions: KeycloakInitOptions = {
  // onLoad: 'login-required',
  checkLoginIframe: false
};

const keycloakOptions: KeycloakOptions = {
  config: keycloakConfig,
  initOptions: keycloakInitOptions,
  enableBearerInterceptor: true
};

export const environment = {
  production: false,
  keycloakOptions
};
