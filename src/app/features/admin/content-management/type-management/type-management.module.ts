import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TypeManagementRoutingModule } from './type-management-routing.module';
import { TypeListComponent } from './pages/type-list/type-list.component';
import { CreateUpdateTypeComponent } from './components/create-update-type/create-update-type.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { SharedModule } from '../../../../shared/shared.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    TypeListComponent,
    CreateUpdateTypeComponent
  ],
  imports: [
    CommonModule,
    TypeManagementRoutingModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatInputModule,
    NgxDropzoneModule
  ]
})
export class TypeManagementModule { }
