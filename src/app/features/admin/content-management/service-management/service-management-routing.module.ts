import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './pages/service-list/service-list.component';
import { ServiceCategoryListComponent } from './pages/service-category-list/service-category-list.component';
import { ProductListPricingComponent } from './pages/product-list-pricing/product-list-pricing.component';

const routes: Routes = [
  {
    path: '',
    component: ServiceListComponent,
  },
  {
    path: 'service-category/:id',
    component: ProductListPricingComponent,
  },
  {
    path: ':id',
    component: ServiceCategoryListComponent,
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceManagementRoutingModule { }
