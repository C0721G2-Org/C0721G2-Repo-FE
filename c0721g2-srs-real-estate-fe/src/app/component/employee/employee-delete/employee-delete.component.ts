import { Component, OnInit } from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {Employee} from '../../../model/employee/employee';
import {ActivatedRoute, Router} from '@angular/router';
import {EmployeeService} from '../../../service/employee.service';

@Component({
  selector: 'app-employee-delete',
  templateUrl: './employee-delete.component.html',
  styleUrls: ['./employee-delete.component.scss']
})
export class EmployeeDeleteComponent implements OnInit {
  deleteEmployee: Observable<any>;
  employee: Employee;
  private subscription: Subscription;

  constructor(private activatedRoute: ActivatedRoute, private employeeSerivce: EmployeeService, private router: Router,
              ) {
  }

  ngOnInit(): void {
    let idDelete = this.activatedRoute.snapshot.params['id'];
    this.deleteEmployee = this.employeeSerivce.getEmployee(idDelete);
    this.deleteEmployee.subscribe(data => {
      this.employee = data;
    });
    console.log(this.employee);
  }
  //
  // onNoClick(): void {
  //
  //   this.dialogRef.close();
  // }
  //
  // deleteCustomer() {
  //   this.subscription = this.customerService.deleteCustomer(this.customer.id).subscribe(data => {
  //     this.dialogRef.close();
  //   });
  // }

  // submit() {
  //   let idDelete = this.activatedRoute.snapshot.params['id'];
  //   this.employeeSerivce.deleteEmployeeById(idDelete).subscribe(data => {
  //     console.log(data);
  //     this.router.navigateByUrl('employee/list');
  //     alert('Xóa Thành Công');
  //   });

  // }

}
