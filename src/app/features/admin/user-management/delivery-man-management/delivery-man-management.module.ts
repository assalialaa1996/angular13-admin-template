import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DeliveryManManagementRoutingModule } from './delivery-man-management-routing.module';
import { DeliveryManListComponent } from './pages/delivery-man-list/delivery-man-list.component';


@NgModule({
  declarations: [
    DeliveryManListComponent
  ],
  imports: [
    CommonModule,
    DeliveryManManagementRoutingModule
  ]
})
export class DeliveryManManagementModule { }
