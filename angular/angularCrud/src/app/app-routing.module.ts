import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetrieveCustomerComponent } from './retrieve-customer/retrieve-customer.component';


const routes: Routes = [
  {
    path: 'customer/view',
    component: RetrieveCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
