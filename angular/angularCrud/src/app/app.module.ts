import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RetrieveCustomerComponent } from './retrieve-customer/retrieve-customer.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCustomerComponent } from './create-customer/create-customer.component';
import { RetrieveAllCustomersComponent } from './retrieve-all-customers/retrieve-all-customers.component';

@NgModule({
  declarations: [
    AppComponent,
    RetrieveCustomerComponent,
    CreateCustomerComponent,
    RetrieveAllCustomersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
