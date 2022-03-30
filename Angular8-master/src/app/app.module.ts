import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import {MenubarModule} from "primeng/menubar";
import {MenuService} from "./services/menuservice";
import { HomeComponent } from './home/home.component';
import { AboutloanComponent } from './home/aboutloan/aboutloan.component';
import { AboutofferComponent } from './home/aboutoffer/aboutoffer.component';
import { LoanComponent } from './loan/loan.component';
import { ApplyComponent } from './loan/apply/apply.component';
import { EligibilityComponent } from './loan/eligibility/eligibility.component';
import { StatusComponent } from './loan/status/status.component';
import { EmiComponent } from './loan/emi/emi.component';
import { LoginComponent } from './login/login.component';



import { RegisterComponent } from './register/register.component';
import {UserService} from "./services/userservice";

import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import 'rxjs'
import {HttpClientModule} from "@angular/common/http";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {LoginGuard} from "./guard/login.guard";
import {AuthService} from "./services/authservice";
import {AdminModule} from "./admin/admin.module";

import { NotificationComponent } from './notification/notification.component';
import {EqualValidator} from "./register/matchvalidator";
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    AboutloanComponent,
    AboutofferComponent,
    LoanComponent,
    ApplyComponent,
    EligibilityComponent,
    StatusComponent,
    EmiComponent,
    LoginComponent,
    RegisterComponent,
    NotificationComponent,
    EqualValidator,
    ParentComponent,
    ChildComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenubarModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,
    AdminModule
  ],
  providers: [MenuService,UserService,LoginGuard, AuthService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { }
