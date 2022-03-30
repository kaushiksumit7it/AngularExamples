import {Component, Inject, Injectable,OnInit} from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA, MatDialog} from '@angular/material';

@Component({
  selector: 'app-editreport',
  templateUrl: './editreport.component.html',
  styleUrls: ['./editreport.component.css']
})
export class EditreportComponent{

  constructor(
    public dialogRef: MatDialogRef<EditreportComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any)
  {

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
