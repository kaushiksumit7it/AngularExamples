import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {InboxComponent} from "./inbox/inbox.component";

import {ReportsComponent} from "./reports/reports.component";
import {AlertComponent} from "./alert/alert.component";

const childRoutes: Routes = [
  {
    path:'Inbox',
    component:InboxComponent
  },
  {
    path:'Alert',
    component:AlertComponent
  },
  {
    path:'Reports',
    component:ReportsComponent
  }

  ];

@NgModule({
  imports: [RouterModule.forChild(childRoutes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
