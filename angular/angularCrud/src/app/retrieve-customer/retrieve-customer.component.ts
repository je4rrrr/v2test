import { Component, OnInit } from '@angular/core';
import {CustomerService} from '../customer.service';


@Component({
  selector: 'app-retrieve-customer',
  templateUrl: './retrieve-customer.component.html',
  styleUrls: ['./retrieve-customer.component.css']
})
export class RetrieveCustomerComponent implements OnInit {

  id: number;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }


  foo() {
    this.customerService.retrieveCustomer(this.id).subscribe(
      response => {

        console.log('succcess');
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
  }

}
