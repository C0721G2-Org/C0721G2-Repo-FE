import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Customer} from '../model/customer/customer';
import {HttpClient} from '@angular/common/http';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  id: any;
  private API_URL = 'http://localhost:8080/api/customers';


  constructor(private httpClient: HttpClient) {
  }

  getCustomerById(id): Observable<any> {
    console.log('fdklgjdklfg');
    console.log(id);
    return this.httpClient.get(this.API_URL + '/' + id);
  }


  saveCustomer(customer: Customer): Observable<Customer> {
    return this.httpClient.post<Customer>(this.API_URL + '/create', customer);
  }

  // checkUsername(username: string): Observable<boolean> {
  //   return this.httpClient.get(this.API_URL).pipe(
  //     map((usernameList: Array<any>) =>
  //       usernameList.filter(user => user.userName === username)
  //     ),
  //     map(users => !users.length)
  //   );
  // }
}
