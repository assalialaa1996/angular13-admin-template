import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaundryOwnerManagementRoutingModule } from './laundry-owner-management-routing.module';
import { LaundryOwnerListComponent } from './pages/laundry-owner-list/laundry-owner-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NgxDropzoneModule } from 'ngx-dropzone';


@NgModule({
  declarations: [
    LaundryOwnerListComponent
  ],
  imports: [
    CommonModule,
    LaundryOwnerManagementRoutingModule,
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
export class LaundryOwnerManagementModule { }
