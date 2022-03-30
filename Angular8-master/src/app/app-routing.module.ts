import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PreloadAllModules} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {AboutloanComponent} from "./home/aboutloan/aboutloan.component";
import {AboutofferComponent} from "./home/aboutoffer/aboutoffer.component";
import {LoanComponent} from "./loan/loan.component";
import {LoginComponent} from "./login/login.component";

import {ApplyComponent} from "./loan/apply/apply.component";
import {EligibilityComponent} from "./loan/eligibility/eligibility.component";
import {StatusComponent} from "./loan/status/status.component";
import {EmiComponent} from "./loan/emi/emi.component";
import {RegisterComponent} from "./register/register.component";
import {LoginGuard} from "./guard/login.guard";



const routes: Routes = [
  {
    path:'Login',
    component:LoginComponent
  },

  {
    path: 'Home',
    component: HomeComponent,
    canActivate: [ LoginGuard ],
    canActivateChild : [LoginGuard],
    children: [
      {path: 'About-Loan', component: AboutloanComponent},
      {path: 'About-Offer', component: AboutofferComponent}

    ]
  },
  {
    path: 'Loan',
    component: LoanComponent,
    canActivate: [ LoginGuard ],
    canActivateChild : [LoginGuard],
   children: [
    {path: 'Apply', component: ApplyComponent,},
    {path: 'Eligibility-Check', component: EligibilityComponent},
     {path: 'Loan-Status', component: StatusComponent},
     {path: 'Pay-EMI', component:EmiComponent}
  ]
  },

  { path: 'Register', component: RegisterComponent },
  {
    path: 'Notification',
    component: Notification,
    canActivate: [ LoginGuard ]
  },

  {
    path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: '**', redirectTo: '/Home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    preloadingStrategy: PreloadAllModules
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
