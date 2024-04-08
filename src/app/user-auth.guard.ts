import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserAuthGuard implements CanActivate {
  constructor(private route:Router)
  {

  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(!localStorage.getItem('IsLoggedIn'))
        {
          this.route.navigate(['/Login']);
          return false ;
        }

      if(localStorage.getItem('Role') == "UserLogin" && route.data['role'] == 'User')
        {
          return true ;
        }

        
      if(localStorage.getItem('Role') == "AdminLogin" && route.data['role'] == 'Admin')
        {
          return true ;
        }

        this.route.navigate(['/Login']);
        return false ;

   
  }
  
}
