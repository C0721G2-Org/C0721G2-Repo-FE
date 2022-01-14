import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Customer} from '../../../model/customer/customer';
// import {MatSnackBar} from '@angular/material/snack-bar';
// import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.scss']
})
export class CustomerEditComponent implements OnInit {

  customerForm: FormGroup;
  id: string;
  customer: Customer;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initFormEdit();
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params[ ' id ' ];
    });
    console.log(this.id);
    // this.id = this.activatedRoute.snapshot.params.id;
    this.customerService.findById(this.id).subscribe(data => {
      console.log(data);
      this.customer = data;
      this.customerForm.setValue(this.customer);
    });
  }

  // findCustomerByid(): void {
  //   this.customerService.findById(this.customerForm.value);
  // }

  updateCustomer(): void {
    this.customerService.update(this.id, this.customerForm.value).subscribe(value => {
      this.router.navigateByUrl('customer');
    });
  }


  initFormEdit() {
    this.customerForm = new FormGroup({
      // id: new FormControl(''),
      id: new FormControl('', [Validators.required, Validators.pattern('^KH-\\d{4}$')]),
      name: new FormControl('', [Validators.required]),
      dateOfBirth: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      idCard: new FormControl('', [Validators.required, Validators.pattern(/^\d{9}|\d{12}$/)]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern(/^(0|(\\(84\\)\\+))+([9][0-1][0-9]{7})$/)]),
      email: new FormControl('', [Validators.required, Validators.email]),
      address: new FormControl('', [Validators.required])
      // appUserId: new FormControl('', [Validators.required])
    });
  }
}
