import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'services',
    loadChildren: () => import('src/app/features/admin/content-management/service-management/service-management.module').then(m => m.ServiceManagementModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('src/app/features/admin/content-management/category-management/category-management.module').then(m => m.CategoryManagementModule)
  },
  {
    path: 'types',
    loadChildren: () => import('src/app/features/admin/content-management/type-management/type-management.module').then(m => m.TypeManagementModule)
  },
  {
    path: 'products',
    loadChildren: () => import('src/app/features/admin/content-management/product-management/product-management.module').then(m => m.ProductManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentManagementRoutingModule { }
