import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoryManagementRoutingModule } from './category-management-routing.module';
import { CategoryListComponent } from './pages/category-list/category-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { CreateUpdateCategoryComponent } from './components/create-update-category/create-update-category.component';


@NgModule({
  declarations: [
    CategoryListComponent,
    CreateUpdateCategoryComponent
  ],
  imports: [
    CommonModule,
    CategoryManagementRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgxDropzoneModule
  ]
})
export class CategoryManagementModule { }
