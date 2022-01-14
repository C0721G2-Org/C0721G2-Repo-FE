import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../model/employee/employee';
import {EmployeeService} from '../../../service/employee.service';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  indexPagination: number = 1;
  totalPagination: number;
  employeeForm: FormGroup;
  listEmployeeNotPagination: Employee[] = [];

  positionList = [{id: 1, name: 'Nhân Viên'}, {id: 2, name: 'Kế Toán'}, {id: 3, name: 'Chuyên Viên'},
    {id: 4, name: 'Trưởng Phòng'}, {id: 5, name: 'Giám Đốc'}]
  ;

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getAllEmployee(0).subscribe(data => {
      this.employees = data.content;
    });
    this.employeeForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      position: new FormControl(''),
    });
  }

  findPaginnation() {
    this.employeeService.getAllEmployee((this.indexPagination * 10) - 10).subscribe(data => {
      this.employees = data.content;
    });
  }

  indexPaginationChage(value: number) {
    this.indexPagination = value;
  }

  firtPage() {
    this.indexPagination = 0;
    this.ngOnInit();
  }

  nextPage() {
    this.indexPagination = this.indexPagination + 1;
    if (this.indexPagination > this.totalPagination) {
      this.indexPagination = this.indexPagination - 1;
    }
    this.employeeService.getAllEmployee((this.indexPagination * 10) - 10).subscribe(data => {
      this.employees = data.content;
    });
  }

  prviousPage() {
    this.indexPagination = this.indexPagination - 1;
    if (this.indexPagination === 0) {
      this.indexPagination = 1;
      this.ngOnInit();
    } else {
      this.employeeService.getAllEmployee((this.indexPagination * 10) - 10).subscribe(data => {
        this.employees = data.content;
      });
    }
  }

  lastPage() {
    this.indexPagination = this.listEmployeeNotPagination.length / 10;
    this.employeeService.getAllEmployee((this.indexPagination * 10) - 10).subscribe(data => {
      this.employees = data.content;
    });
  }

  search() {
    this.employeeService.search(this.employeeForm.value.name, this.employeeForm.value.email,
      this.employeeForm.value.position
    ).subscribe(data => {
      this.employees = data.content;
    });
  }
}
