import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentManagementRoutingModule } from './content-management-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import {MatDialogModule} from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ContentManagementRoutingModule,
    SharedModule,
    MatDialogModule,
    MatSelectModule
  ]
})
export class ContentManagementModule { }
