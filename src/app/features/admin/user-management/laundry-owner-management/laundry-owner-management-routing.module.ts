import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaundryOwnerListComponent } from './pages/laundry-owner-list/laundry-owner-list.component';

const routes: Routes = [{
  component: LaundryOwnerListComponent,
  path: ''
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaundryOwnerManagementRoutingModule { }
