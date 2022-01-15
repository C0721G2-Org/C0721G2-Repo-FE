import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Employee} from '../model/employee/employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  public API = 'http://localhost:8080/employee';

  constructor(private http: HttpClient) {
  }

  getAllEmployee(index: number): Observable<any> {
    return this.http.get(this.API + '/list?page=' + index);
  }

  getAllEmployeeNoPage(): Observable<any> {
    return this.http.get(this.API);
  }

  getEmployee(id: string): Observable<any> {
    return this.http.get(this.API + '/detail/' + id);
  }

  search(name: string, email: string, positon: string): Observable<any> {
    return this.http.get(this.API + '/search?name=' + name + '&email=' + email + '&position_id=' + positon);
  }

  save(employee: any): Observable<any> {
    return this.http.post(this.API, employee);
  }

  findEmployeeById(id: string): Observable<any> {
    return this.http.get(this.API + '/' + id);
  }

  deleteEmployeeById(id: string): Observable<any> {
    return this.http.delete(this.API + '/delete/' + id);
  }

  updateEmployee(id: string, employee: Employee): Observable<any> {
    return this.http.put(this.API + '/' + id, employee);
  }
}
