import {Component, OnInit} from '@angular/core';
import {Employee} from '../../../model/employee/employee';
import {EmployeeService} from '../../../service/employee.service';
import {FormControl, FormGroup} from '@angular/forms';
import {EmployeeDeleteComponent} from '../employee-delete/employee-delete.component';
import {MatDialog} from '@angular/material/dialog';
import {Router} from '@angular/router';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[];
  indexPagination: number = 1;
  totalPagination: number;
  totalPaginationArray: number[] = [];
  employeeForm: FormGroup;
  listEmployeeNotPagination: Employee[] = [];
  total: number;

  positionList = [{id: 1, name: 'Nhân Viên'}, {id: 2, name: 'Kế Toán'}, {id: 3, name: 'Chuyên Viên'},
    {id: 4, name: 'Trưởng Phòng'}, {id: 5, name: 'Giám Đốc'}]
  ;


  constructor(private employeeService: EmployeeService,
              private dialogDelete: MatDialog, private router: Router) {
  }

  ngOnInit(): void {
    this.employeeService.getAllEmployee(0).subscribe(data => {
      this.employees = data.content;
      console.log(data.content.valueOf()) ;
    });
    this.employeeForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      position: new FormControl(''),
    });
    this.employeeService.getAllEmployeeNoPage().subscribe(data => {
      this.listEmployeeNotPagination = data;
      console.log(this.listEmployeeNotPagination.length);
      if (this.listEmployeeNotPagination.length !== 0) {
        this.totalPagination = (Math.floor(this.listEmployeeNotPagination.length / 10)) + 1;
      }
      for (let i = 1; i <= this.totalPagination; i++) {
        this.totalPaginationArray.push(i);
      }
      console.log(this.totalPaginationArray);
    });
  }

  findPaginnation(i) {
    this.employeeService.getAllEmployee(i).subscribe(data => {
      this.employees = data.content;
    });
  }

  indexPaginationChage(value: number) {
    this.indexPagination = value;
  }

  firtPage() {
    this.employeeService.getAllEmployee(0).subscribe(data => {
      this.employees = data.content;
    });
  }

  nextPage() {
    this.indexPagination = this.indexPagination + 1;
    if (this.indexPagination > this.totalPagination) {
      this.indexPagination = this.indexPagination - 1;
    }
    this.employeeService.getAllEmployee(this.indexPagination).subscribe(data => {
      this.employees = data.content;
    });
  }

  previousPage() {
    this.indexPagination = this.indexPagination - 1;
    if (this.indexPagination === 0) {
      this.indexPagination = 1;
      this.ngOnInit();
    } else {
      this.employeeService.getAllEmployee(this.indexPagination).subscribe(data => {
        this.employees = data.content;
      });
    }
  }

  lastPage() {
    this.indexPagination = this.totalPaginationArray.length - 1;
    this.employeeService.getAllEmployee(this.indexPagination).subscribe(data => {
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

  openDialog(employeeId: string) {
    console.log(employeeId);
    // Trả về đối tượng
    this.employeeService.getEmployee(employeeId).subscribe(customerData => {
      const dialogRef = this.dialogDelete.open(EmployeeDeleteComponent, {
        width: '500px',
        data: {customerData},
        // Khi bấm ra ngoài dialog khong bi mat di
        disableClose: true
      });

      dialogRef.afterClosed().subscribe(result => {
        console.log('The dialog was closed');
        this.ngOnInit();
      });
    });
  }
}
