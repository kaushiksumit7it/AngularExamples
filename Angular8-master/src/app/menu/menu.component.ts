import { Component, OnInit } from '@angular/core';
import {MenuService} from "../services/menuservice";
import {Router} from '@angular/router';

@Component({
  selector: 'loan-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  _menuArr:any;
  //dependecy injection
  constructor(private menuService:MenuService,private router:Router) {


  }
  //when compoenent is ready
  ngOnInit() {

     this._menuArr=this.menuService.getMenuData();
  }

}
