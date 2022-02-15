import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BooksComponent} from './shared/books/books.component';
import {CustomGuard} from './custom.guard';

const routes: Routes = [
  {
    path: 'books', component: BooksComponent,
    canActivate: [CustomGuard],
    data: { verification: { type: 'SOME_ROLES', roles: ['user'] } },
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then(mod => mod.SearchModule),
    // canActivate: [AppAuthGuard]
  },
  {
    path: 'last-release',
    loadChildren: () => import('./last-release/last-release.module').then(mod => mod.LastReleaseModule),
    // canActivate: [AppAuthGuard]
  },
  {
    path: 'loan',
    loadChildren: () => import('./loan/loan.module').then(mod => mod.LoanModule),
    canActivate: [CustomGuard],
    data: { verification: { type: 'SOME_ROLES', roles: ['admin'] } },
  },
  // {
  //   path: '', redirectTo: '/books',
  //   pathMatch: 'full'
  // },
  // {
  //   path: '**',
  //   redirectTo: '/'
  // }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
