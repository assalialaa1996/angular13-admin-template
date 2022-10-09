import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public show: boolean = false;
  public loginForm: FormGroup;
  public errorMessage: any;
  userData: any;

  constructor(public authService: AuthService, private fb: FormBuilder,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {
  }

  showPassword() {
    this.show = !this.show;
  }

  // Simple Login
  login() {
    this.authService.loginAdmin({ email: this.loginForm.value['email'], password: this.loginForm.value['password'] }).subscribe(
      res => {
        if (res) {
          this.userData = res;
          localStorage.setItem('admin', JSON.stringify(this.userData));
          localStorage.setItem("access_token", this.userData.accessToken);
          this.router.navigate(['/dashboard/default']);
        } else {
          localStorage.setItem('admin', null);
        }
      }
    );
  }

}
