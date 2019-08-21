import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import { Customer } from '../../../../../models/customer';

@Component({
  selector: 'app-retrieve-all-customers',
  templateUrl: './retrieve-all-customers.component.html',
  styleUrls: ['./retrieve-all-customers.component.css']
})
export class RetrieveAllCustomersComponent implements OnInit {

  currentCustomer: Customer;
  allCustomers: any[];

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.customerService.retrieveAllCustomers().subscribe(
      response => {
        this.allCustomers = response;
        console.log(this.allCustomers);
      },
      error => {
        console.log(error);
      }
    )
  }


}
