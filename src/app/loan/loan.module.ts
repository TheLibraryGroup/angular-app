import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoanRoutingModule} from './loan-routing.module';
import {ListLoanComponent} from './list-loan/list-loan.component';
import {MatButtonModule} from '@angular/material';


@NgModule({
  declarations: [ListLoanComponent],
  exports: [ListLoanComponent],
    imports: [
        CommonModule,
        LoanRoutingModule,
        MatButtonModule
    ]
})
export class LoanModule { }
