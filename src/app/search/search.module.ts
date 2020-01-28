import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {SearchRoutingModule} from './search-routing.module';
import {AdvancedSearchComponent} from './advanced-search/advanced-search.component';


@NgModule({
  declarations: [AdvancedSearchComponent],
  exports: [AdvancedSearchComponent],
  imports: [
    CommonModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
