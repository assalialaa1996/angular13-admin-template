import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/firebase/auth.service';

@Injectable({
    providedIn: 'root'
})

export class SecureInnerPagesGuard implements CanActivate {

    constructor(private authService: AuthService,
        private router: Router) { }

    canActivate(
        next: ActivatedRouteSnapshot,
        state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        let user = JSON.parse(localStorage.getItem('user'));
        let admin = JSON.parse(localStorage.getItem('admin'));
        if (user == null  && admin == null) {
            this.router.navigate(['auth/login-laundry']);
            return true
        }
        return true;
    }
}