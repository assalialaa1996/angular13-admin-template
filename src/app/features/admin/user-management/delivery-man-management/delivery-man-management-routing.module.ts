import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeliveryManListComponent } from './pages/delivery-man-list/delivery-man-list.component';

const routes: Routes = [{
  path: '',
  component: DeliveryManListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DeliveryManManagementRoutingModule { }
