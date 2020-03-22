// import {Injectable} from '@angular/core';
// import {ActivatedRouteSnapshot, Router} from '@angular/router';
// import {KeycloakAuthGuard, KeycloakService} from 'keycloak-angular';
//
// @Injectable({
//   providedIn: 'root'
// })
// export class AppAuthGuard extends KeycloakAuthGuard {
//
//   constructor(protected router: Router,
//               protected keycloakAngular: KeycloakService) {
//       super(router, keycloakAngular);
//     }
//
//   isAccessAllowed(route: ActivatedRouteSnapshot): Promise<boolean> {
//     return new Promise(async (resolve, reject) => {
//       const requiredRoles = route.data.roles;
//
//       console.log('Class: AppAuthGuard, Function: , Line 19 (): '
//       , route);
//
//       if (route.url[0].path === '/books') {
//         return resolve(true);
//       } else if (!this.authenticated ) {
//         this.keycloakAngular.login();
//         return resolve(true);
//       }
//       if (!requiredRoles || requiredRoles.length === 0) {
//         return resolve(true);
//       } else {
//         if (!this.roles || this.roles.length === 0) {
//           resolve(false);
//         }
//         let granted = false;
//         for (const requiredRole of requiredRoles) {
//           if (this.roles.indexOf(requiredRole) > -1) {
//             granted = true;
//             break;
//           }
//         }
//         resolve(granted);
//       }
//     });
//   }
// }
