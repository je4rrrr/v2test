import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RetrieveCustomerComponent } from './retrieve-customer/retrieve-customer.component';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { RetrieveAllCustomersComponent } from './retrieve-all-customers/retrieve-all-customers.component';


const routes: Routes = [
  {
    path: 'customer/view',
    component: RetrieveCustomerComponent
  },
  {
  path: 'customer/create',
    component: CreateCustomerComponent
  },
  {
    path: 'customer/viewAll',
    component: RetrieveAllCustomersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
