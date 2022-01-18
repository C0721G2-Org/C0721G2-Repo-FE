import {Component, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../../../service/customer.service';
import {Router} from '@angular/router';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import {LoginComponent} from "../../security/login/login.component";


@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.scss']
})
export class CustomerCreateComponent implements OnInit {
  private subscription: Subscription;
  createCustomer: FormGroup = new FormGroup({});
  validateErrorEmail: string;
  validateErrorUsername: string;


  constructor(private formBuilder: FormBuilder,
              private customerService: CustomerService,
              private router: Router,
              private dialogRef: MatDialogRef<CustomerCreateComponent>,
              private dialog: MatDialog,
  ) {
    this.createCustomer = formBuilder.group({
      name: ['', [Validators.required, Validators.pattern('^([^0-9]{2,100})$')]],
      email: ['', [Validators.required, Validators.email]],
      address: this.formBuilder.control('', Validators.required),
      idCard: ['', [Validators.required, Validators.pattern('^([0-9]{9,12})$')]],
      dateOfBirth: this.formBuilder.control('', Validators.required),
      phoneNumber: ['', [Validators.required, Validators.pattern('^([0-9]{8,12})$')]],
      gender: [2, Validators.required],
      password: ['', [Validators.required, Validators.min(6), Validators.max(200)]],
      confirmPassword: ['', [Validators.required]],
      userName: ['', [Validators.required, Validators.min(2), Validators.max(100)]],
      // , Validators.pattern('^([0-9]{9})|([0-9]{12})$')
    }, {
      validator: this.checkPassword('passWord', 'confirmPassword')
    });
  }

  ngOnInit(): void {
  }

  submit() {
    if (this.createCustomer.valid) {
      this.customerService.saveCustomer(this.createCustomer.value).subscribe(
        data => {
          console.log(data);
        }, error => {
          console.log(error.error);
          console.log(error);
          this.validateErrorEmail = error.error.errorEmail;
          this.validateErrorUsername = error.error.errorUsername;
        }
      );
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

  login() {
    this.dialogRef.close();
    const dialogLogin = this.dialog.open(LoginComponent, {
      width: '450px',
      panelClass: 'custom-dialog',
      disableClose: true
    });

    dialogLogin.afterClosed().subscribe(result => {
    });
  }

  closeDialog() {
    this.dialogRef.close();
  }
}
