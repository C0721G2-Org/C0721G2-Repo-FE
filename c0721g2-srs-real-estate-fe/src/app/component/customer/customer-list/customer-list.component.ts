import {Component, OnInit} from '@angular/core';
import {Customer} from '../../../model/customer/customer';
import {Subscription} from 'rxjs';
import {CustomerService} from '../../../service/customer.service';
import {MatDialog} from '@angular/material/dialog';
import {CustomerDeleteComponent} from '../customer-delete/customer-delete.component';

// import {ToastrService} from 'ngx-toastr';


@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.scss']
})
export class CustomerListComponent implements OnInit {

  constructor(
    private customerService: CustomerService,
    private dialog: MatDialog,
    // private toastrService: ToastrService
  ) {
  }

  customers: Customer[] = [];
  private subscription: Subscription | undefined;

  page = 0;
  customerName = "";
  customerPhone = "";
  customerEmail = "";
  totalElements: number;
  totalPages: number;
  numberOfElements: number;
  pageNumber: number;
  size = 0;

  // showMessageNotFound(){
  //   this.toastrService.warning('Không tìm thấy', 'Max page');
  // }
  clickPage = false;

  ngOnInit(): void {
    this.showCustomer(this.page, this.customerName, this.customerPhone, this.customerEmail);
  }

  showCustomer(page, customerName, customerPhone, customerEmail) {

    // tslint:disable-next-line:triple-equals
    if (page == this.page && customerName === this.customerName && customerPhone === this.customerPhone && customerEmail === this.customerEmail) {
      this.subscription = this.customerService.findCustomer(this.page, this.customerName, this.customerPhone, this.customerEmail).subscribe(data => {
        console.log(data);
        this.customers = data.content;
        this.totalPages = data.totalPages;
        this.pageNumber = data.pageable.pageNumber;
        this.size = data.size;
      }, error => {
        console.log(this.customers);
      });
    } else {
      this.subscription = this.customerService.findCustomer(0, this.customerName, this.customerPhone, this.customerEmail).subscribe(data => {
        // console.log(data);
        this.customers = data.content;
        this.totalPages = data.totalPages;
        this.pageNumber = data.pageable.pageNumber;
        this.size = data.size;

      }, error => {
        console.log(this.customers);
      });
    }
  }


  openDialog(customerId) {
    this.customerService.getCustomerById(customerId).subscribe(data => {
      const dialogRef = this.dialog.open(CustomerDeleteComponent, {
        width: '500px',
        data: {data2: data},
        disableClose: true
      });
      dialogRef.afterClosed().subscribe(result => {
        console.log('the dialog was closed');
        // this.showAlert();
        this.ngOnInit();
      });
    });
  }

  previousClick(index) {

    // if (pageNumber <= 0 ) {
    //   this.page = 0;
    //   this.clickPage = true;
    // } else {
    //
    // }
    this.page = this.page - index;
    console.log("pre" + this.page);
    if (this.page <= 0) {
      this.page = 0;
      this.clickPage = true;

    } else {
      this.clickPage = false;
    }
    this.showCustomer(this.page, '', '', '');
  }

  nextClick(index) {
    this.page = this.page + index;
    console.log("next" + this.page);
    // if (this.page > this.totalPages) {
    //   this.page = this.totalPages;
    //   console.log(this.page)
    //   this.showCustomer(this.page, '', '', '');
    // } else {
    //   this.showCustomer(this.page, '', '', '');
    // }

    if (this.page >= this.totalPages) {
      this.clickPage = true;
      console.log('total page ' + this.page);
    }else {
      this.clickPage = false;
    }
    this.showCustomer(this.page, '', '', '');
  }

}
