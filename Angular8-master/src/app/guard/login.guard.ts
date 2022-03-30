import { Injectable,OnInit } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router,
  CanActivateChild
} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from "../services/authservice";

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements OnInit,CanActivate,CanActivateChild {

  constructor(private authService:AuthService,private myRoute:Router)
  {

  }
  ngOnInit() {
    console.log('Login guard activated!');
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.authService.isLoggednIn()){
      return true;
    }else{
      this.myRoute.navigate(["/Login"]);
      return false;
    }
  }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot): boolean|UrlTree {



    if (!this.authService.isAdminUser()) {
      alert('You are not allowed to view this page');
      return false;
    }


    return true;
  }
}
