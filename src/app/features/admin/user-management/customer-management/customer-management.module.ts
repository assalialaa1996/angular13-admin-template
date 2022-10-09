import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerManagementRoutingModule } from './customer-management-routing.module';
import { CustomerListComponent } from './pages/customer-list/customer-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { MatSelectModule } from '@angular/material/select';
import { CreateHotelAccountComponent } from './components/create-hotel-account/create-hotel-account.component';


@NgModule({
  declarations: [
    CustomerListComponent,
    CreateHotelAccountComponent
  ],
  imports: [
    CommonModule,
    CustomerManagementRoutingModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    NgxDropzoneModule,
    MatSelectModule,
  ]
})
export class CustomerManagementModule { }
