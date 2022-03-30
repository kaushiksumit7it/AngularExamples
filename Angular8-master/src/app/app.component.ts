import { Component } from '@angular/core';

@Component({
  selector: 'loan-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'loanapp';
  //one way binding
  logoPath='./assets/boa.jpg';
  banner1='./assets/banner.jpg';
  banner2='./assets/banner2.jpg';
  constructor()
  {
    //debugger;
  }
}
