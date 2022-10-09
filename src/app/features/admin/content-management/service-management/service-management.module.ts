import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { ServiceManagementRoutingModule } from './service-management-routing.module';
import { ServiceListComponent } from './pages/service-list/service-list.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { CreateUpdateServiceComponent } from './components/create-update-service/create-update-service.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ServiceCategoryListComponent } from './pages/service-category-list/service-category-list.component';
import { CreateServiceCategoryComponent } from './components/create-service-category/create-service-category.component';
import { MatSelectModule } from '@angular/material/select';
import { ProductListPricingComponent } from './pages/product-list-pricing/product-list-pricing.component';
import { CreateProductPricingComponent } from './components/create-product-pricing/create-product-pricing.component';
import { UpdateProductPricingComponent } from './components/update-product-pricing/update-product-pricing.component';

@NgModule({
  declarations: [
    ServiceListComponent,
    CreateUpdateServiceComponent,
    ServiceCategoryListComponent,
    CreateServiceCategoryComponent,
    ProductListPricingComponent,
    CreateProductPricingComponent,
    UpdateProductPricingComponent,
  ],
  imports: [
    CommonModule,
    ServiceManagementRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    NgxDropzoneModule,
    MatSelectModule
  ]
})
export class ServiceManagementModule { }
