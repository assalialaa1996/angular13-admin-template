import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  
  constructor(
    public router: Router) { }

  canActivate(next: ActivatedRouteSnapshot, 
      state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    // Guard for user is login or not
    let admin = JSON.parse(localStorage.getItem('admin'));
    if (!admin || admin === null) {
      this.router.navigate(['/auth/login']);
      return true
    }
    else if (admin) {
      if (!Object.keys(admin).length) {
        this.router.navigate(['/auth/login']);
        return true
      }
    }
    return true
  }
  
}
