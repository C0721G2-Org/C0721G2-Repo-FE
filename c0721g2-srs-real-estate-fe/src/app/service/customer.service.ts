import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer/customer';
import {HttpClient} from '@angular/common/http';

const API = 'http://localhost:8080/customerInformation/';

@Injectable({
  providedIn: 'root'
})

export class CustomerService {

  private APIServeUrl = '';

  constructor(private http: HttpClient) {
  }

  findById(id: string): Observable<Customer> {
    return this.http.get<Customer>(API + `id/` + id);
  }

  update(id: string, customer: Customer): Observable<Customer> {
    return this.http.patch<Customer>(API + `update/` + id, customer);
  }

  edit(customer: Customer, id: string ): Observable<Customer> {
    return this.http.patch<Customer>(`${this.APIServeUrl}/customerInformation/update` + '/' + id, customer);
  }

}
