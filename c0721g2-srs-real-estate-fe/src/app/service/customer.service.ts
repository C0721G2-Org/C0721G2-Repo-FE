import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  // API - Thien
  public API = 'http://localhost:8080/api/customers';

  constructor(
    public http: HttpClient,
  ) {
  }

  // thienlb
  getCustomerById(customerId): Observable<any> {
    return this.http.get(this.API + '/' + customerId);
  }

  // thienlb
  deleteCustomer(customerId): Observable<any> {
    return this.http.delete(this.API + '/delete-customer/' + customerId);
  }

  // thienlb
  findCustomer(page, customerName, customerPhone, customerEmail): Observable<any> {
    return this.http.get(this.API + '/customer-list?page=' + page + '&name=' +
      customerName + '&phone=' + customerPhone + '&email=' + customerEmail);
  }
}
