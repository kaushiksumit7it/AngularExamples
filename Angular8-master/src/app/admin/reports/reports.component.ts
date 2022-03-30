import { Component, OnInit,ViewChild } from '@angular/core';
import {CountryService} from "../../services/country.service";
import {MatDialog, MatPaginator, MatSort, MatTableDataSource} from "@angular/material";
import {EditreportComponent} from "./editreport/editreport.component";
@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {
  private countries: any;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: false}) sort: MatSort;

  constructor(private countryService: CountryService,private dialog: MatDialog) {

  }

  displayedColumns: string[] = ['name', 'capital', 'region',
    'population', 'edit', 'delete'];
  tableSource = new MatTableDataSource();

//once component is initalized
  ngOnInit() {
    this.countryService.getCountries().subscribe(response => {
      this.countries = response;
      this.tableSource.data = response;
    })

  }

  ngAfterViewInit() {
    this.tableSource.paginator = this.paginator;
    this.tableSource.sort = this.sort;

  }

  openDialog(data): void {
    const dialogRef = this.dialog.open(EditreportComponent, {
      width: '500px',
      data: {name: data.name,
        capital: data.capital,
        population:data.population,
        region:data.region
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      this.updateRowData(result);

    });
  }

  updateRowData(row_obj) {
    this.tableSource.data = this.tableSource.data.filter((value:any)=>{
      if(value.name == row_obj.name){
        value.capital = row_obj.capital;
        value.population=row_obj.population;
        value.region=row_obj.region;

      }
      return true;
    });
  }

  deleteRowData(row_obj) {
    this.tableSource.data = this.tableSource.data.filter((value:any)=>{
      return value.name != row_obj.name;
    });
    //physical deletion
    /*this.addPolicyHolderService.deletePolicyHolder(row_obj.adharCardNo)
      .subscribe(response=>{
        console.log(response);
      })*/

  }


}
