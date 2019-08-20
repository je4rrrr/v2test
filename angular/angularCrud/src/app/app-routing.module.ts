import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetrieveCustomerComponent } from './retrieve-customer/retrieve-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';


const routes: Routes = [
  {
    path: 'customer/view',
    component: RetrieveCustomerComponent
  },
  {
  path: 'customer/create',
    component: CreateCustomerComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
