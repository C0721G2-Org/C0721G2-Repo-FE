import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {AppUser} from '../../../model/user/app-user';
import {CustomerService} from '../../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

export function checkPasswordAndRePassword(c: AbstractControl) {
  const v = c.value;
  const newPassWord = v.newPassword;
  const reNewPassWord = v.reNewPassword;

  return (newPassWord === reNewPassWord) ? null : {checkpasswordandrepassword: true};
}

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  appUserForm: FormGroup;
  username = 'admin';
  message = '';

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initFormEdit();
  }

  updatePassword(): void {
    console.log(this.appUserForm.value.reNewPassword);
    this.customerService.changePassword(this.appUserForm.value).subscribe(value => {
        this.message = 'đã thay đổi mật khẩu thành công';
        // this.router.navigateByUrl('customer');
      },
      error => {
        this.message = 'Mật khẩu cũ sai';
      });
  }

  initFormEdit() {
    this.appUserForm = new FormGroup({
      // id: new FormControl(''),
      // id: new FormControl('', [Validators.required]),
      username: new FormControl(this.username, [Validators.required]),
      // isEnabled: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
      newPassword: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
      reNewPassword: new FormControl('', [Validators.required])
    }, {validators: checkPasswordAndRePassword});
  }
}
