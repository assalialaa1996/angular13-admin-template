import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-laundry',
  templateUrl: './login-laundry.component.html',
  styleUrls: ['./login-laundry.component.scss']
})
export class LoginLaundryComponent implements OnInit {
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

  showPassword() {
    this.show = !this.show;
  }

  ngOnInit(): void {
  }


  login() {
    this.authService.loginLaundryOwner({ email: this.loginForm.value['email'], password: this.loginForm.value['password'] }).subscribe(
      res => {
        if (res) {
          this.userData = res;
          localStorage.setItem('user', JSON.stringify(this.userData));
          localStorage.setItem("access_token", this.userData.accessToken);
          this.router.navigate(['/dashboard/default']);
        } else {
          localStorage.setItem('user', null);
        }
      }
    );
  }

}
