import { NgModule } from '@angular/core';
import { LoanlibraryComponent } from './loanlibrary.component';
import { ClaimComponent } from './claim/claim.component';



@NgModule({
  declarations: [LoanlibraryComponent, ClaimComponent],
  imports: [
  ],
  exports: [LoanlibraryComponent]
})
export class LoanlibraryModule { }
