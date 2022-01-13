import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  private subscription: Subscription;
  createCustomer: FormGroup = new FormGroup({});


  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService,
              private router: Router) {
    this.createCustomer = formBuilder.group({
      name: this.formBuilder.control(''),
      email: this.formBuilder.control(''),
      address: this.formBuilder.control(''),
      idCard: this.formBuilder.control(''),
      dateOfBirth: this.formBuilder.control(''),
      phoneNumber: this.formBuilder.control(''),
      gender: this.formBuilder.control(''),
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]],
      // idCard: ['', Validators.required, Validators.pattern('^([0-9]{9})|([0-9]{12})$')]
    }, {
      validator: this.checkPassword('password', 'confirmPassword')
    });
  }

  ngOnInit(): void {
    // this.createCustomer = new FormGroup({
    //   name: new FormControl(),
    // });
  }

  submit() {
    if (this.createCustomer.valid) {
      this.customerService.saveCustomer(this.createCustomer.value).subscribe(
        data => {
          alert('bạn đã đăng nhập thành công');
        }
      );
      // this.customerService.saveCustomer(this.createCustomer.value).subscribe(
      //   data => {
      //     alert('đã đăng nhập thành công');
      //   }, error => {
      //     console.log(error);
      //   }
      // );
    }
  }

  checkPassword(controlName: any, matchingControlName: any) {
    return (formGroup: FormGroup) => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];
      if (matchingControl.errors && !matchingControl.errors.checkPassword) {
        return;
      }
      if (control.value !== matchingControl.value) {
        matchingControl.setErrors({checkPassword: true});
      } else {
        matchingControl.setErrors(null);
      }
    };
  }

}
