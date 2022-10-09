import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaundryServiceListRoutingModule } from './laundry-service-list-routing.module';
import { ServiceListComponent } from './pages/service-list/service-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AvailableProductsComponent } from './components/available-products/available-products.component';
import { MatTooltipModule } from '@angular/material/tooltip';


@NgModule({
  declarations: [
    ServiceListComponent,
    AvailableProductsComponent
  ],
  imports: [
    CommonModule,
    LaundryServiceListRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgxDropzoneModule,
    MatSelectModule,
    MatTooltipModule
  ]
})
export class LaundryServiceListModule { }
