import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../shared/guard/admin.guard';
import { LaundryOwnerGuard } from '../shared/guard/laundry-owner.guard';

const routes: Routes = [
  {
    path: 'admin',
    canActivate: [AdminGuard],
    loadChildren: () => import('src/app/features/admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: 'laundry',
    canActivate: [LaundryOwnerGuard],
    loadChildren: () => import('src/app/features/laundry/laundry.module').then(m => m.LaundryModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
