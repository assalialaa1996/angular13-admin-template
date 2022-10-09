import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { IconsModule } from '../components/icons/icons.module';
import { SharedModule } from '../shared/shared.module';
import { LoginLaundryComponent } from './pages/login-laundry/login-laundry.component';
import { AgmCoreModule } from '@agm/core';
import { environment } from 'src/environments/environment';
@NgModule({
  declarations: [LoginComponent, RegisterComponent, LoginLaundryComponent],
  imports: [
    CommonModule,
    AuthRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    IconsModule,
    SharedModule,
    AgmCoreModule.forRoot({
      apiKey: environment.MAPS_API_KEY,
      libraries: ["places"]
    })
  ]
})
export class AuthModule { }
