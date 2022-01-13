import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  public API = 'http://localhost:8080/employee/create';
  constructor(private http: HttpClient) {
  }

  getAllEmPloyee(): Observable<any> {
    return this.http.get(this.API);
  }

  save(employee: any): Observable<any> {
    return this.http.post(this.API, employee);
  }

  findEmployeeById(id: number): Observable<any> {
    return this.http.get(this.API + '/' + id);
  }

  deleteEmployeeById(id: number): Observable<any> {
    return this.http.delete(this.API + '/' + id);
  }

  updateEmployee(id: number, employee: Employee): Observable<any> {
    return this.http.put(this.API + '/' + id, employee);
  }

}
