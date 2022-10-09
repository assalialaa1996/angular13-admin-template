import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'content-management',
    loadChildren: () => import('src/app/features/admin/content-management/content-management.module').then(m => m.ContentManagementModule)
  },
  {
    path: 'user-management',
    loadChildren: () => import('src/app/features/admin/user-management/user-management.module').then(m => m.UserManagementModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
