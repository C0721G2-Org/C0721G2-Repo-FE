import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {CustomerService} from '../../../service/customer.service';
import {Customer} from "../../../model/customer/customer";

@Component({
  selector: 'app-customer-detail',
  templateUrl: './customer-detail.component.html',
  styleUrls: ['./customer-detail.component.scss']
})
export class CustomerDetailComponent implements OnInit {
  public customer: Customer;
  private subscription: Subscription;
  id: string;


  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute) {
  }

  // ngOnInit(): void {
  //   this.activatedRoute.params.subscribe(data => {
  //     this.id = data.id;
  //     console.log(data.id);
  //   });
  //   this.customerService.getCustomerById(this.id).subscribe(data => {
  //     this.customer.patchValue(data);
  //     console.log(data);
  //   }, error => {
  //     console.log('error');
  //   });
  //
  // }
  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.customerService.getCustomerById(this.id).subscribe(
        data => {
          this.customer = data;
        }, error => {
          console.log('error');
        }
      );
    });
  }

  // ngOnInit(): void {
  //   this.customerService.getCustomerById(this.id).subscribe(
  //     data => {
  //       this.customer = data;
  //     }, error => {
  //       console.log(error);
  //     }
  //   );
  // }
}
