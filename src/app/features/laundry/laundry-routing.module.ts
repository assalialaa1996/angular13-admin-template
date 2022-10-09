import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'service-list',
    loadChildren: () => import('src/app/features/laundry/laundry-service-list/laundry-service-list.module').then(m => m.LaundryServiceListModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaundryRoutingModule { }
