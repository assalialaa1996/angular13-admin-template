import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LaundryOwnerGuard implements CanActivate {
  
  constructor(
    public router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Guard for user is login or not
    let user = JSON.parse(localStorage.getItem('user'));
    if (!user || user === null) {
      this.router.navigate(['/auth/login-laundry']);
      return true
    }
    else if (user) {
      if (!Object.keys(user).length) {
        this.router.navigate(['/auth/login-laundry']);
        return true
      }
    }
    return true
  }
  
}
