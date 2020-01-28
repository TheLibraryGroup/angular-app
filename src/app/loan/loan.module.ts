import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoanRoutingModule} from './loan-routing.module';
import {ListLoanComponent} from './list-loan/list-loan.component';


@NgModule({
  declarations: [ListLoanComponent],
  exports: [ListLoanComponent],
  imports: [
    CommonModule,
    LoanRoutingModule
  ]
})
export class LoanModule { }
