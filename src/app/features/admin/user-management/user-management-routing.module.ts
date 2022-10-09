import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'customer-management',
    loadChildren: () => import('src/app/features/admin/user-management/customer-management/customer-management.module').then(m => m.CustomerManagementModule)
  },
  {
    path: 'laundry-owner-management',
    loadChildren: () => import('src/app/features/admin/user-management/laundry-owner-management/laundry-owner-management.module').then(m => m.LaundryOwnerManagementModule)
  },
  {
    path: 'delivery-man-management',
    loadChildren: () => import('src/app/features/admin/user-management/delivery-man-management/delivery-man-management.module').then(m => m.DeliveryManManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserManagementRoutingModule { }
