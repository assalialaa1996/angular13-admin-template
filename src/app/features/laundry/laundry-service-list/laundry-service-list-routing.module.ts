import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceListComponent } from './pages/service-list/service-list.component';

const routes: Routes = [{
  path: '',
  component: ServiceListComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LaundryServiceListRoutingModule { }
