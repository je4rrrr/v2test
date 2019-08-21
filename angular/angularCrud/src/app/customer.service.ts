import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {


  constructor(private httpClient: HttpClient) { }

  retrieveCustomer(id: number) {
    return this.httpClient.get<any>('http://localhost:8081/api/customers/single?customerId=' + id).pipe(
      catchError(this.handleError)
    );
  }

  retrieveAllCustomers() {
    return this.httpClient.get<any>('http://localhost:8081/api/customers/').pipe(
      catchError(this.handleError)
    );
  }

  createCustomer(createName: string, createWord: string, createAge: string) {
    return this.httpClient.post<any>('http://localhost:8081/api/customers/?name=' + createName +
    '&word=' + createWord +
    '&age=' + createAge, null).pipe(
      catchError(this.handleError)
    );

  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = '';

    if (error.error instanceof ErrorEvent) {
      errorMessage = 'An unknown error has occurred: ' + error.error.message;
    } else {
      errorMessage = 'A HTTP error has occurred: ' + `HTTP ${error.status}: ${error.error.message}`;
    }

    console.error(errorMessage);

    return throwError(errorMessage);
  }

}
