import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {AppUser} from '../../../model/user/app-user';
import {CustomerService} from '../../../service/customer.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.scss']
})
export class UpdatePasswordComponent implements OnInit {
  appUserForm: FormGroup;
  userName: string;
  appUser: AppUser;

  constructor(private customerService: CustomerService,
              private activatedRoute: ActivatedRoute,
              private router: Router) {
  }

  ngOnInit(): void {
    this.initFormEdit();
    this.activatedRoute.queryParams.subscribe(params => {
      this.userName = params[ ' userName ' ];
    });
    console.log(this.userName);
    this.customerService.finduserbyusername(this.userName).subscribe(data => {
      console.log(data);
      this.appUser = data;
      this.appUserForm.setValue(this.appUser);
    });
  }
  updatepassword(): void {
    this.customerService.update(this.userName, this.appUserForm.value).subscribe(value => {
      this.router.navigateByUrl('customer');
    });
  }
  initFormEdit() {
    this.appUserForm = new FormGroup({
      // id: new FormControl(''),
      id: new FormControl('', [Validators.required]),
      userName: new FormControl('', [Validators.required]),
      isEnabled: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required, Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/)]),
      verificationCode: new FormControl('', [Validators.required])
    });
  }
}
