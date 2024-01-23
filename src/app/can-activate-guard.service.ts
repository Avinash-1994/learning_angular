import { Injectable, inject } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRouteSnapshot, CanActivateFn, Route, Router, RouterStateSnapshot } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class gaurdService{

  constructor(private loginService:LoginService, private router:Router, private jwtHelperService:JwtHelperService) { 

  }

  canActivate (next: ActivatedRouteSnapshot, state:RouterStateSnapshot) :boolean{

    // console.log(this.router.url);


    var token = sessionStorage.getItem("currentUser")? JSON.parse(sessionStorage.getItem('currentUser') as any).token: null;
    console.log(this.loginService.isAuthenticated())
    if(this.loginService.isAuthenticated() || this.jwtHelperService.decodeToken(token).role == next.data['expectedRole']){
      return true;
    }
    this.router.navigateByUrl('/login')
    return false;
    
  }

  
}

export const CanActivateGuardService:CanActivateFn = (next:ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean =>{
  return inject(gaurdService).canActivate(next, state)
}
