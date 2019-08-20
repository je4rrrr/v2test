import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';
import { Customer } from '../../../../../models/customer';


@Component({
  selector: 'app-retrieve-customer',
  templateUrl: './retrieve-customer.component.html',
  styleUrls: ['./retrieve-customer.component.css']
})
export class RetrieveCustomerComponent implements OnInit {

  id: number;
  currentCustomer: Customer;
  name: string;
  word: string;
  age: number;


  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }


  foo() {
    this.customerService.retrieveCustomer(this.id).subscribe(
      response => {

        console.log('succcess');
        console.log(response);
        this.currentCustomer = response;
        this.name = this.currentCustomer.name;
        this.word = this.currentCustomer.word;
        this.age = this.currentCustomer.age;
        console.log(this.currentCustomer.age);
      },
      error => {
        console.log(error);
      }
    );
  }

}
