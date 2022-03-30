import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AdminRoutingModule} from "./admin-routing.module";
import { InboxComponent } from './inbox/inbox.component';
import { ReportsComponent } from './reports/reports.component';
import {AlertComponent} from "./alert/alert.component";
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatSortModule} from "@angular/material/sort";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import { EditreportComponent } from './reports/editreport/editreport.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormArray, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";



@NgModule({
  declarations: [InboxComponent, AlertComponent, ReportsComponent, EditreportComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatIconModule,
    MatFormFieldModule,
     MatInputModule,
    ReactiveFormsModule,
    MatButtonModule,
    FormsModule
  ],
  entryComponents: [EditreportComponent]
})
export class AdminModule { }
