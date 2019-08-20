import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import { Customer } from '../../../../../models/customer';

@Component({
  selector: 'app-create-customer',
  templateUrl: './create-customer.component.html',
  styleUrls: ['./create-customer.component.css']
})
export class CreateCustomerComponent implements OnInit {

  createName: string;
  createWord: string;
  createAge: string;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  createCustomer() {
    this.customerService.createCustomer(this.createName, this.createWord, this.createAge).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    )
  }

}
