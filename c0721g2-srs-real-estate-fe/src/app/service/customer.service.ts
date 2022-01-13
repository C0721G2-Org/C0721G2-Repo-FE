import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer/customer';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  id: any;
  private API_URL = 'http://localhost:9090/api/customer';


  constructor(private httpClient: HttpClient) {
  }

  getCustomerById(id): Observable<any> {
    console.log('fdklgjdklfg');
    console.log(id);
    return this.httpClient.get(this.API_URL + '/' + id);
  }


  saveCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL, customer);
  }

  setId(id: string) {
    this.id = id;
  }
}
